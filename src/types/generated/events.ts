import assert from 'assert'
import {Chain, ChainContext, EventContext, Event, Result, Option} from './support'

export class CrowdloanContributedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Crowdloan.Contributed')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   *  Contributed to a crowd sale. [who, fund_index, amount]
   */
  get isV9010(): boolean {
    return this._chain.getEventHash('Crowdloan.Contributed') === 'ad00729b31f26d2879a6f96c1691ed42a69cd4947c75e84221a6bde93a3415bc'
  }

  /**
   *  Contributed to a crowd sale. [who, fund_index, amount]
   */
  get asV9010(): [Uint8Array, number, bigint] {
    assert(this.isV9010)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Contributed to a crowd sale.
   */
  get isV9230(): boolean {
    return this._chain.getEventHash('Crowdloan.Contributed') === 'a09bba4441a47a7b463e5f26020197386183019a6130ce697a434ee31cc39482'
  }

  /**
   * Contributed to a crowd sale.
   */
  get asV9230(): {who: Uint8Array, fundIndex: number, amount: bigint} {
    assert(this.isV9230)
    return this._chain.decodeEvent(this.event)
  }
}

export class CrowdloanCreatedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Crowdloan.Created')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   *  Create a new crowdloaning campaign. [fund_index]
   */
  get isV9010(): boolean {
    return this._chain.getEventHash('Crowdloan.Created') === '0a0f30b1ade5af5fade6413c605719d59be71340cf4884f65ee9858eb1c38f6c'
  }

  /**
   *  Create a new crowdloaning campaign. [fund_index]
   */
  get asV9010(): number {
    assert(this.isV9010)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Create a new crowdloaning campaign.
   */
  get isV9230(): boolean {
    return this._chain.getEventHash('Crowdloan.Created') === 'de61486138d2b3b92b3ed0bdfddb05a4a7e6ae35d065c89bba1f47c365c252e2'
  }

  /**
   * Create a new crowdloaning campaign.
   */
  get asV9230(): {paraId: number} {
    assert(this.isV9230)
    return this._chain.decodeEvent(this.event)
  }
}

export class CrowdloanDissolvedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Crowdloan.Dissolved')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   *  Fund is dissolved. [fund_index]
   */
  get isV9010(): boolean {
    return this._chain.getEventHash('Crowdloan.Dissolved') === '0a0f30b1ade5af5fade6413c605719d59be71340cf4884f65ee9858eb1c38f6c'
  }

  /**
   *  Fund is dissolved. [fund_index]
   */
  get asV9010(): number {
    assert(this.isV9010)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Fund is dissolved.
   */
  get isV9230(): boolean {
    return this._chain.getEventHash('Crowdloan.Dissolved') === 'de61486138d2b3b92b3ed0bdfddb05a4a7e6ae35d065c89bba1f47c365c252e2'
  }

  /**
   * Fund is dissolved.
   */
  get asV9230(): {paraId: number} {
    assert(this.isV9230)
    return this._chain.decodeEvent(this.event)
  }
}

export class GrandpaNewAuthoritiesEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Grandpa.NewAuthorities')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   *  New authority set has been applied.
   */
  get isV1020(): boolean {
    return this._chain.getEventHash('Grandpa.NewAuthorities') === 'a1a8c88e19b8fedde4aab1bef41aa9e1bdfc3748b1e39f7ad5bb09d0347d9505'
  }

  /**
   *  New authority set has been applied.
   */
  get asV1020(): [Uint8Array, bigint][] {
    assert(this.isV1020)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * New authority set has been applied.
   */
  get isV9130(): boolean {
    return this._chain.getEventHash('Grandpa.NewAuthorities') === 'e25505d283e6b21359efad4ea3b01da035cbbe2b268fd3cbfb12ca0b5577a9de'
  }

  /**
   * New authority set has been applied.
   */
  get asV9130(): {authoritySet: [Uint8Array, bigint][]} {
    assert(this.isV9130)
    return this._chain.decodeEvent(this.event)
  }
}

export class StakingBondedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Staking.Bonded')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   *  An account has bonded this amount.
   * 
   *  NOTE: This event is only emitted when funds are bonded via a dispatchable. Notably,
   *  it will not be emitted for staking rewards when they are added to stake.
   */
  get isV1051(): boolean {
    return this._chain.getEventHash('Staking.Bonded') === '23bebce4ca9ed37548947d07d4dc50e772f07401b9a416b6aa2f3e9cb5adcaf4'
  }

  /**
   *  An account has bonded this amount.
   * 
   *  NOTE: This event is only emitted when funds are bonded via a dispatchable. Notably,
   *  it will not be emitted for staking rewards when they are added to stake.
   */
  get asV1051(): [Uint8Array, bigint] {
    assert(this.isV1051)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * An account has bonded this amount. \[stash, amount\]
   * 
   * NOTE: This event is only emitted when funds are bonded via a dispatchable. Notably,
   * it will not be emitted for staking rewards when they are added to stake.
   */
  get isV9300(): boolean {
    return this._chain.getEventHash('Staking.Bonded') === '9623d141834cd425342a1ff7a2b2265acd552799bcd6a0df67eb08a661e2215d'
  }

  /**
   * An account has bonded this amount. \[stash, amount\]
   * 
   * NOTE: This event is only emitted when funds are bonded via a dispatchable. Notably,
   * it will not be emitted for staking rewards when they are added to stake.
   */
  get asV9300(): {stash: Uint8Array, amount: bigint} {
    assert(this.isV9300)
    return this._chain.decodeEvent(this.event)
  }
}

export class StakingEraPaidEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Staking.EraPaid')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   *  The era payout has been set; the first balance is the validator-payout; the second is
   *  the remainder from the maximum amount of reward.
   *  \[era_index, validator_payout, remainder\]
   */
  get isV9090(): boolean {
    return this._chain.getEventHash('Staking.EraPaid') === '1b75f96f7f74feed246668e0244abf707060018d56d88b1a638f75594d2a8005'
  }

  /**
   *  The era payout has been set; the first balance is the validator-payout; the second is
   *  the remainder from the maximum amount of reward.
   *  \[era_index, validator_payout, remainder\]
   */
  get asV9090(): [number, bigint, bigint] {
    assert(this.isV9090)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * The era payout has been set; the first balance is the validator-payout; the second is
   * the remainder from the maximum amount of reward.
   */
  get isV9300(): boolean {
    return this._chain.getEventHash('Staking.EraPaid') === '940fb56de13a3a5bb887ff8bc3518465d73e48a2e4418a6edb32a9d338f0b44a'
  }

  /**
   * The era payout has been set; the first balance is the validator-payout; the second is
   * the remainder from the maximum amount of reward.
   */
  get asV9300(): {eraIndex: number, validatorPayout: bigint, remainder: bigint} {
    assert(this.isV9300)
    return this._chain.decodeEvent(this.event)
  }
}

export class StakingPayoutStartedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Staking.PayoutStarted')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   *  The stakers' rewards are getting paid. \[era_index, validator_stash\]
   */
  get isV9090(): boolean {
    return this._chain.getEventHash('Staking.PayoutStarted') === '0379562584d6426ccff49705dfa9dba95ad94215b772fd97d0ad0c4ca0001c12'
  }

  /**
   *  The stakers' rewards are getting paid. \[era_index, validator_stash\]
   */
  get asV9090(): [number, Uint8Array] {
    assert(this.isV9090)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * The stakers' rewards are getting paid.
   */
  get isV9300(): boolean {
    return this._chain.getEventHash('Staking.PayoutStarted') === 'd95599bb0ef0f714befa738223f11c2fc8127ccc863fcf601c59c2c90393c3cf'
  }

  /**
   * The stakers' rewards are getting paid.
   */
  get asV9300(): {eraIndex: number, validatorStash: Uint8Array} {
    assert(this.isV9300)
    return this._chain.decodeEvent(this.event)
  }
}

export class StakingRewardEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Staking.Reward')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   *  All validators have been rewarded by the first balance; the second is the remainder
   *  from the maximum amount of reward.
   */
  get isV1020(): boolean {
    return this._chain.getEventHash('Staking.Reward') === 'f7d5bd1431cb954502149f64a8137986d660e0729a3d9731d421496b4298be52'
  }

  /**
   *  All validators have been rewarded by the first balance; the second is the remainder
   *  from the maximum amount of reward.
   */
  get asV1020(): [bigint, bigint] {
    assert(this.isV1020)
    return this._chain.decodeEvent(this.event)
  }

  /**
   *  The staker has been rewarded by this amount. AccountId is controller account.
   */
  get isV1050(): boolean {
    return this._chain.getEventHash('Staking.Reward') === '23bebce4ca9ed37548947d07d4dc50e772f07401b9a416b6aa2f3e9cb5adcaf4'
  }

  /**
   *  The staker has been rewarded by this amount. AccountId is controller account.
   */
  get asV1050(): [Uint8Array, bigint] {
    assert(this.isV1050)
    return this._chain.decodeEvent(this.event)
  }
}

export class StakingRewardedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Staking.Rewarded')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   *  The nominator has been rewarded by this amount. \[stash, amount\]
   */
  get isV9090(): boolean {
    return this._chain.getEventHash('Staking.Rewarded') === '23bebce4ca9ed37548947d07d4dc50e772f07401b9a416b6aa2f3e9cb5adcaf4'
  }

  /**
   *  The nominator has been rewarded by this amount. \[stash, amount\]
   */
  get asV9090(): [Uint8Array, bigint] {
    assert(this.isV9090)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * The nominator has been rewarded by this amount.
   */
  get isV9300(): boolean {
    return this._chain.getEventHash('Staking.Rewarded') === '9623d141834cd425342a1ff7a2b2265acd552799bcd6a0df67eb08a661e2215d'
  }

  /**
   * The nominator has been rewarded by this amount.
   */
  get asV9300(): {stash: Uint8Array, amount: bigint} {
    assert(this.isV9300)
    return this._chain.decodeEvent(this.event)
  }
}

export class StakingSlashEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Staking.Slash')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   *  One validator (and its nominators) has been slashed by the given amount.
   */
  get isV1020(): boolean {
    return this._chain.getEventHash('Staking.Slash') === '23bebce4ca9ed37548947d07d4dc50e772f07401b9a416b6aa2f3e9cb5adcaf4'
  }

  /**
   *  One validator (and its nominators) has been slashed by the given amount.
   */
  get asV1020(): [Uint8Array, bigint] {
    assert(this.isV1020)
    return this._chain.decodeEvent(this.event)
  }
}

export class StakingSlashedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Staking.Slashed')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   *  One validator (and its nominators) has been slashed by the given amount.
   *  \[validator, amount\]
   */
  get isV9090(): boolean {
    return this._chain.getEventHash('Staking.Slashed') === '23bebce4ca9ed37548947d07d4dc50e772f07401b9a416b6aa2f3e9cb5adcaf4'
  }

  /**
   *  One validator (and its nominators) has been slashed by the given amount.
   *  \[validator, amount\]
   */
  get asV9090(): [Uint8Array, bigint] {
    assert(this.isV9090)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * One staker (and potentially its nominators) has been slashed by the given amount.
   */
  get isV9300(): boolean {
    return this._chain.getEventHash('Staking.Slashed') === '8043a273ae232adf290e1fbbd88711bdf078eb5beb2a947de455999b434e7896'
  }

  /**
   * One staker (and potentially its nominators) has been slashed by the given amount.
   */
  get asV9300(): {staker: Uint8Array, amount: bigint} {
    assert(this.isV9300)
    return this._chain.decodeEvent(this.event)
  }
}

export class StakingUnbondedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Staking.Unbonded')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   *  An account has unbonded this amount.
   */
  get isV1051(): boolean {
    return this._chain.getEventHash('Staking.Unbonded') === '23bebce4ca9ed37548947d07d4dc50e772f07401b9a416b6aa2f3e9cb5adcaf4'
  }

  /**
   *  An account has unbonded this amount.
   */
  get asV1051(): [Uint8Array, bigint] {
    assert(this.isV1051)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * An account has unbonded this amount.
   */
  get isV9300(): boolean {
    return this._chain.getEventHash('Staking.Unbonded') === '9623d141834cd425342a1ff7a2b2265acd552799bcd6a0df67eb08a661e2215d'
  }

  /**
   * An account has unbonded this amount.
   */
  get asV9300(): {stash: Uint8Array, amount: bigint} {
    assert(this.isV9300)
    return this._chain.decodeEvent(this.event)
  }
}

export class StakingWithdrawnEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Staking.Withdrawn')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   *  An account has called `withdraw_unbonded` and removed unbonding chunks worth `Balance`
   *  from the unlocking queue.
   */
  get isV1051(): boolean {
    return this._chain.getEventHash('Staking.Withdrawn') === '23bebce4ca9ed37548947d07d4dc50e772f07401b9a416b6aa2f3e9cb5adcaf4'
  }

  /**
   *  An account has called `withdraw_unbonded` and removed unbonding chunks worth `Balance`
   *  from the unlocking queue.
   */
  get asV1051(): [Uint8Array, bigint] {
    assert(this.isV1051)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * An account has called `withdraw_unbonded` and removed unbonding chunks worth `Balance`
   * from the unlocking queue.
   */
  get isV9300(): boolean {
    return this._chain.getEventHash('Staking.Withdrawn') === '9623d141834cd425342a1ff7a2b2265acd552799bcd6a0df67eb08a661e2215d'
  }

  /**
   * An account has called `withdraw_unbonded` and removed unbonding chunks worth `Balance`
   * from the unlocking queue.
   */
  get asV9300(): {stash: Uint8Array, amount: bigint} {
    assert(this.isV9300)
    return this._chain.decodeEvent(this.event)
  }
}
