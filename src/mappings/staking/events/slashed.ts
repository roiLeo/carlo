import assert from 'assert'
import { UnknownVersionError } from '../../../common/errors'
import { encodeId, isStorageCorrupted, saturatingSumBigInt } from '../../../common/tools'
import { Slash, Staker } from '../../../model'
import storage from '../../../storage'
import { StakingSlashedEvent, StakingSlashEvent } from '../../../types/generated/events'
import { EventContext, EventHandlerContext } from '../../types/contexts'
import { ActionData } from '../../types/data'
import { getMeta } from '../../util/actions'
import { getOrCreateStaker } from '../../util/entities'

interface EventData {
    amount: bigint
    account: Uint8Array
}

function getSlashedEvent(ctx: EventContext): EventData {
    const event = new StakingSlashedEvent(ctx)

    if (event.isV9090) {
        const [account, amount] = event.asV9090
        return {
            account,
            amount,
        }
    } else if (event.isV9300) {
        const {staker: account, amount} = event.asV9300
        return {
            account,
            amount,
        }
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

function getSlashEvent(ctx: EventHandlerContext): EventData {
    const event = new StakingSlashEvent(ctx)

    if (event.isV1020) {
        const [account, amount] = event.asV1020
        return {
            account,
            amount,
        }
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

export async function handleSlashed(ctx: EventHandlerContext, old = false) {
    const data = old ? getSlashEvent(ctx) : getSlashedEvent(ctx)
    await saveSlash(ctx, {
        id: ctx.event.id,
        timestamp: new Date(ctx.block.timestamp),
        blockNumber: ctx.block.height,
        extrinsicHash: ctx.event.extrinsic?.hash,
        accountId: encodeId(data.account),
        amount: data.amount,
        era: (await storage.staking.getCurrentEra(ctx))?.index || 0,
    })
}

export async function handleSlash(ctx: EventHandlerContext) {
    return handleSlashed(ctx, true)
}

export interface SlashData extends ActionData {
    amount: bigint
    accountId: string
    era: number
}

export async function saveSlash(ctx: EventHandlerContext, data: SlashData) {
    const { accountId, amount } = data

    const staker = await getOrCreateStaker(ctx, 'Stash', accountId)
    if (!staker && isStorageCorrupted(ctx)) return
    assert(staker != null, `Missing staking info for ${accountId}`)

    const account = staker.stash

    staker.totalSlash += data.amount
    staker.activeBond = saturatingSumBigInt(staker.activeBond, amount * -1n)

    await ctx.store.save(staker)

    await ctx.store.insert(
        new Slash({
            ...getMeta(data),
            account,
            amount: data.amount,
            era: data.era,
        })
    )
}
