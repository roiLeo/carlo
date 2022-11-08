import { SubstrateCall, SubstrateEvent } from '@subsquid/substrate-processor'
import assert from 'assert'
import { UnknownVersionError } from '../../../common/errors'
import { encodeId, isStorageCorrupted, saturatingSumBigInt } from '../../../common/tools'
import { PayeeType, Reward } from '../../../model'
import { StakingPayoutStakersCall } from '../../../types/generated/calls'
import { StakingRewardedEvent, StakingRewardEvent } from '../../../types/generated/events'
import { Call, ChainContext, Event } from '../../../types/generated/support'
import { EventContext, CallContext, EventHandlerContext, BlockHandlerContext } from '../../types/contexts'
import { getMeta } from '../../util/actions'
import { getOrCreateStakers } from '../../util/entities'
import { RewardData } from '../events'

interface EventData {
    amount: bigint
    account: Uint8Array
}

function getRewardedEventData(ctx: ChainContext, event: Event): EventData {
    const data = new StakingRewardedEvent(ctx, event)

    if (data.isV9090) {
        const [account, amount] = data.asV9090
        return {
            account,
            amount,
        }
    } else if (data.isV9300) {
        const { stash: account, amount } = data.asV9300
        return {
            account,
            amount,
        }
    } else {
        throw new UnknownVersionError(data.constructor.name)
    }
}

function getRewardEventData(ctx: ChainContext, event: Event): EventData | undefined {
    const data = new StakingRewardEvent(ctx, event)

    if (data.isV1020) {
        return undefined
    } else if (data.isV1050) {
        const [account, amount] = data.asV1050
        return {
            account,
            amount,
        }
    } else {
        throw new UnknownVersionError(data.constructor.name)
    }
}

export interface CallData {
    era: number
    validator: Uint8Array
}

function getCallData(ctx: ChainContext, call: Call): CallData {
    const data = new StakingPayoutStakersCall(ctx, call)

    if (data.isV1058) {
        const { validatorStash, era } = data.asV1058
        return {
            validator: validatorStash,
            era,
        }
    } else {
        throw new UnknownVersionError(call.constructor.name)
    }
}

export const rewardsRequest = {
    items: {
        calls: {
            'Staking.payout_stakers': true,
        },
        events: {
            'Staking.Reward': true,
            'Staking.Rewarded': true,
        },
    },
} as const

export async function rewardsHook(ctx: BlockHandlerContext<typeof rewardsRequest>) {
    const rewardsData = new Map<string, RewardData[]>()
    const payoutsData = new Map<string, { validator: string; era: number }>()
    const stakersSet = new Set<string>()

    for (const item of ctx.items) {
        if (item.kind === 'event') {
            let data: EventData | undefined
            switch (item.name) {
                case 'Staking.Reward':
                    data = getRewardEventData(ctx, item.event)
                    break
                case 'Staking.Rewarded':
                    data = getRewardedEventData(ctx, item.event)
                    break
            }
            if (!data) continue

            const event = item.event as SubstrateEvent

            const callId = event.call?.id || 'no-call'

            let callRewards = rewardsData.get(callId)
            if (!callRewards) {
                callRewards = []
                rewardsData.set(callId, callRewards)
            }

            const accountId = encodeId(data.account)
            stakersSet.add(accountId)

            callRewards.push({
                id: event.id,
                timestamp: new Date(ctx.block.timestamp),
                blockNumber: ctx.block.height,
                accountId,
                amount: data.amount,
            })
        } else if (item.kind === 'call') {
            if (item.name !== 'Staking.payout_stakers') continue

            const call = item.call as SubstrateCall
            if (!call.success) continue

            const data = getCallData(ctx, call)

            payoutsData.set(call.id, {
                validator: encodeId(data.validator),
                era: data.era,
            })
        }
    }

    const stakers = new Map((await getOrCreateStakers(ctx, 'Stash', [...stakersSet.values()])).map((s) => [s.id, s]))
    const rewards: Reward[] = []

    for (const [callId, callRewardsData] of rewardsData) {
        const payoutData = payoutsData.get(callId)

        for (const rewardData of callRewardsData) {
            const { accountId, amount } = rewardData
            const staker = stakers.get(accountId)
            if (!staker && isStorageCorrupted(ctx)) return
            assert(staker != null, `Missing staking info for ${accountId}`)

            const account = staker.payee
            assert(account != null, `Payee is null for staker ${staker.id}`)

            staker.totalReward = saturatingSumBigInt(staker.totalReward, amount)
            if (staker.payeeType === PayeeType.Staked)
                staker.activeBond = saturatingSumBigInt(staker.activeBond, amount)

            rewards.push(
                new Reward({
                    ...getMeta(rewardData),
                    account,
                    amount,
                    staker,
                    validator: payoutData?.validator,
                    era: payoutData?.era,
                })
            )
        }
    }

    await ctx.store.save([...stakers.values()])
    await ctx.store.insert(rewards)
}
