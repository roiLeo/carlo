import assert from 'assert'
import {Chain, ChainContext, CallContext, Call, Result, Option} from './support'
import * as v1020 from './v1020'
import * as v1050 from './v1050'
import * as v2028 from './v2028'
import * as v9010 from './v9010'
import * as v9030 from './v9030'
import * as v9050 from './v9050'
import * as v9100 from './v9100'
import * as v9111 from './v9111'

export class BalancesForceTransferCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Balances.force_transfer')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   *  Exactly as `transfer`, except the origin must be root and the source account may be
   *  specified.
   */
  get isV1020(): boolean {
    return this._chain.getCallHash('Balances.force_transfer') === 'df4a214d4dde3e82d3b36a6bb537e569f58b42cd75a9ad78b1b909171e93b042'
  }

  /**
   *  Exactly as `transfer`, except the origin must be root and the source account may be
   *  specified.
   */
  get asV1020(): {source: v1020.LookupSource, dest: v1020.LookupSource, value: bigint} {
    assert(this.isV1020)
    return this._chain.decodeCall(this.call)
  }

  /**
   *  Exactly as `transfer`, except the origin must be root and the source account may be
   *  specified.
   */
  get isV1050(): boolean {
    return this._chain.getCallHash('Balances.force_transfer') === '2fe8348cf811b833de74f02f6eeab668dbfad8a5d53274dd89837666ed3eb6fe'
  }

  /**
   *  Exactly as `transfer`, except the origin must be root and the source account may be
   *  specified.
   */
  get asV1050(): {source: Uint8Array, dest: Uint8Array, value: bigint} {
    assert(this.isV1050)
    return this._chain.decodeCall(this.call)
  }

  /**
   *  Exactly as `transfer`, except the origin must be root and the source account may be
   *  specified.
   *  # <weight>
   *  - Same as transfer, but additional read and write because the source account is
   *    not assumed to be in the overlay.
   *  # </weight>
   */
  get isV2028(): boolean {
    return this._chain.getCallHash('Balances.force_transfer') === '906df11f4f65ebd03a2b87ba248e1fba11c3a0bca42c892bee828bac3ec80348'
  }

  /**
   *  Exactly as `transfer`, except the origin must be root and the source account may be
   *  specified.
   *  # <weight>
   *  - Same as transfer, but additional read and write because the source account is
   *    not assumed to be in the overlay.
   *  # </weight>
   */
  get asV2028(): {source: v2028.LookupSource, dest: v2028.LookupSource, value: bigint} {
    assert(this.isV2028)
    return this._chain.decodeCall(this.call)
  }

  /**
   * Exactly as `transfer`, except the origin must be root and the source account may be
   * specified.
   * # <weight>
   * - Same as transfer, but additional read and write because the source account is not
   *   assumed to be in the overlay.
   * # </weight>
   */
  get isV9111(): boolean {
    return this._chain.getCallHash('Balances.force_transfer') === 'e5944fbe8224a17fe49f9c1d1d01efaf87fb1778fd39618512af54c9ba6f9dff'
  }

  /**
   * Exactly as `transfer`, except the origin must be root and the source account may be
   * specified.
   * # <weight>
   * - Same as transfer, but additional read and write because the source account is not
   *   assumed to be in the overlay.
   * # </weight>
   */
  get asV9111(): {source: v9111.MultiAddress, dest: v9111.MultiAddress, value: bigint} {
    assert(this.isV9111)
    return this._chain.decodeCall(this.call)
  }
}

export class BalancesTransferCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Balances.transfer')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   *  Transfer some liquid free balance to another account.
   * 
   *  `transfer` will set the `FreeBalance` of the sender and receiver.
   *  It will decrease the total issuance of the system by the `TransferFee`.
   *  If the sender's account is below the existential deposit as a result
   *  of the transfer, the account will be reaped.
   * 
   *  The dispatch origin for this call must be `Signed` by the transactor.
   * 
   *  # <weight>
   *  - Dependent on arguments but not critical, given proper implementations for
   *    input config types. See related functions below.
   *  - It contains a limited number of reads and writes internally and no complex computation.
   * 
   *  Related functions:
   * 
   *    - `ensure_can_withdraw` is always called internally but has a bounded complexity.
   *    - Transferring balances to accounts that did not exist before will cause
   *       `T::OnNewAccount::on_new_account` to be called.
   *    - Removing enough funds from an account will trigger
   *      `T::DustRemoval::on_unbalanced` and `T::OnFreeBalanceZero::on_free_balance_zero`.
   *    - `transfer_keep_alive` works the same way as `transfer`, but has an additional
   *      check that the transfer will not kill the origin account.
   * 
   *  # </weight>
   */
  get isV1020(): boolean {
    return this._chain.getCallHash('Balances.transfer') === '5a96e49eaf0745110a2342c53e5619233745028a575c67865c4ad4921e77634b'
  }

  /**
   *  Transfer some liquid free balance to another account.
   * 
   *  `transfer` will set the `FreeBalance` of the sender and receiver.
   *  It will decrease the total issuance of the system by the `TransferFee`.
   *  If the sender's account is below the existential deposit as a result
   *  of the transfer, the account will be reaped.
   * 
   *  The dispatch origin for this call must be `Signed` by the transactor.
   * 
   *  # <weight>
   *  - Dependent on arguments but not critical, given proper implementations for
   *    input config types. See related functions below.
   *  - It contains a limited number of reads and writes internally and no complex computation.
   * 
   *  Related functions:
   * 
   *    - `ensure_can_withdraw` is always called internally but has a bounded complexity.
   *    - Transferring balances to accounts that did not exist before will cause
   *       `T::OnNewAccount::on_new_account` to be called.
   *    - Removing enough funds from an account will trigger
   *      `T::DustRemoval::on_unbalanced` and `T::OnFreeBalanceZero::on_free_balance_zero`.
   *    - `transfer_keep_alive` works the same way as `transfer`, but has an additional
   *      check that the transfer will not kill the origin account.
   * 
   *  # </weight>
   */
  get asV1020(): {dest: v1020.LookupSource, value: bigint} {
    assert(this.isV1020)
    return this._chain.decodeCall(this.call)
  }

  /**
   *  Transfer some liquid free balance to another account.
   * 
   *  `transfer` will set the `FreeBalance` of the sender and receiver.
   *  It will decrease the total issuance of the system by the `TransferFee`.
   *  If the sender's account is below the existential deposit as a result
   *  of the transfer, the account will be reaped.
   * 
   *  The dispatch origin for this call must be `Signed` by the transactor.
   * 
   *  # <weight>
   *  - Dependent on arguments but not critical, given proper implementations for
   *    input config types. See related functions below.
   *  - It contains a limited number of reads and writes internally and no complex computation.
   * 
   *  Related functions:
   * 
   *    - `ensure_can_withdraw` is always called internally but has a bounded complexity.
   *    - Transferring balances to accounts that did not exist before will cause
   *       `T::OnNewAccount::on_new_account` to be called.
   *    - Removing enough funds from an account will trigger `T::DustRemoval::on_unbalanced`.
   *    - `transfer_keep_alive` works the same way as `transfer`, but has an additional
   *      check that the transfer will not kill the origin account.
   * 
   *  # </weight>
   */
  get isV1050(): boolean {
    return this._chain.getCallHash('Balances.transfer') === 'cf5bb376709277883598390b3462e93b0f3c383df391c0649728c965e8da82fd'
  }

  /**
   *  Transfer some liquid free balance to another account.
   * 
   *  `transfer` will set the `FreeBalance` of the sender and receiver.
   *  It will decrease the total issuance of the system by the `TransferFee`.
   *  If the sender's account is below the existential deposit as a result
   *  of the transfer, the account will be reaped.
   * 
   *  The dispatch origin for this call must be `Signed` by the transactor.
   * 
   *  # <weight>
   *  - Dependent on arguments but not critical, given proper implementations for
   *    input config types. See related functions below.
   *  - It contains a limited number of reads and writes internally and no complex computation.
   * 
   *  Related functions:
   * 
   *    - `ensure_can_withdraw` is always called internally but has a bounded complexity.
   *    - Transferring balances to accounts that did not exist before will cause
   *       `T::OnNewAccount::on_new_account` to be called.
   *    - Removing enough funds from an account will trigger `T::DustRemoval::on_unbalanced`.
   *    - `transfer_keep_alive` works the same way as `transfer`, but has an additional
   *      check that the transfer will not kill the origin account.
   * 
   *  # </weight>
   */
  get asV1050(): {dest: Uint8Array, value: bigint} {
    assert(this.isV1050)
    return this._chain.decodeCall(this.call)
  }

  /**
   *  Transfer some liquid free balance to another account.
   * 
   *  `transfer` will set the `FreeBalance` of the sender and receiver.
   *  It will decrease the total issuance of the system by the `TransferFee`.
   *  If the sender's account is below the existential deposit as a result
   *  of the transfer, the account will be reaped.
   * 
   *  The dispatch origin for this call must be `Signed` by the transactor.
   * 
   *  # <weight>
   *  - Dependent on arguments but not critical, given proper implementations for
   *    input config types. See related functions below.
   *  - It contains a limited number of reads and writes internally and no complex computation.
   * 
   *  Related functions:
   * 
   *    - `ensure_can_withdraw` is always called internally but has a bounded complexity.
   *    - Transferring balances to accounts that did not exist before will cause
   *       `T::OnNewAccount::on_new_account` to be called.
   *    - Removing enough funds from an account will trigger `T::DustRemoval::on_unbalanced`.
   *    - `transfer_keep_alive` works the same way as `transfer`, but has an additional
   *      check that the transfer will not kill the origin account.
   *  ---------------------------------
   *  - Base Weight: 73.64 µs, worst case scenario (account created, account removed)
   *  - DB Weight: 1 Read and 1 Write to destination account
   *  - Origin account is already in memory, so no DB operations for them.
   *  # </weight>
   */
  get isV2028(): boolean {
    return this._chain.getCallHash('Balances.transfer') === 'c3f0f475940fc4bef49b298f76ba345680f20fc48d5899b4678314a07e2ce090'
  }

  /**
   *  Transfer some liquid free balance to another account.
   * 
   *  `transfer` will set the `FreeBalance` of the sender and receiver.
   *  It will decrease the total issuance of the system by the `TransferFee`.
   *  If the sender's account is below the existential deposit as a result
   *  of the transfer, the account will be reaped.
   * 
   *  The dispatch origin for this call must be `Signed` by the transactor.
   * 
   *  # <weight>
   *  - Dependent on arguments but not critical, given proper implementations for
   *    input config types. See related functions below.
   *  - It contains a limited number of reads and writes internally and no complex computation.
   * 
   *  Related functions:
   * 
   *    - `ensure_can_withdraw` is always called internally but has a bounded complexity.
   *    - Transferring balances to accounts that did not exist before will cause
   *       `T::OnNewAccount::on_new_account` to be called.
   *    - Removing enough funds from an account will trigger `T::DustRemoval::on_unbalanced`.
   *    - `transfer_keep_alive` works the same way as `transfer`, but has an additional
   *      check that the transfer will not kill the origin account.
   *  ---------------------------------
   *  - Base Weight: 73.64 µs, worst case scenario (account created, account removed)
   *  - DB Weight: 1 Read and 1 Write to destination account
   *  - Origin account is already in memory, so no DB operations for them.
   *  # </weight>
   */
  get asV2028(): {dest: v2028.LookupSource, value: bigint} {
    assert(this.isV2028)
    return this._chain.decodeCall(this.call)
  }

  /**
   * Transfer some liquid free balance to another account.
   * 
   * `transfer` will set the `FreeBalance` of the sender and receiver.
   * It will decrease the total issuance of the system by the `TransferFee`.
   * If the sender's account is below the existential deposit as a result
   * of the transfer, the account will be reaped.
   * 
   * The dispatch origin for this call must be `Signed` by the transactor.
   * 
   * # <weight>
   * - Dependent on arguments but not critical, given proper implementations for input config
   *   types. See related functions below.
   * - It contains a limited number of reads and writes internally and no complex
   *   computation.
   * 
   * Related functions:
   * 
   *   - `ensure_can_withdraw` is always called internally but has a bounded complexity.
   *   - Transferring balances to accounts that did not exist before will cause
   *     `T::OnNewAccount::on_new_account` to be called.
   *   - Removing enough funds from an account will trigger `T::DustRemoval::on_unbalanced`.
   *   - `transfer_keep_alive` works the same way as `transfer`, but has an additional check
   *     that the transfer will not kill the origin account.
   * ---------------------------------
   * - Base Weight: 73.64 µs, worst case scenario (account created, account removed)
   * - DB Weight: 1 Read and 1 Write to destination account
   * - Origin account is already in memory, so no DB operations for them.
   * # </weight>
   */
  get isV9111(): boolean {
    return this._chain.getCallHash('Balances.transfer') === 'fc85bea9d0d171982f66e8a55667d58dc9a1612bcafe84309942bf47e23e3094'
  }

  /**
   * Transfer some liquid free balance to another account.
   * 
   * `transfer` will set the `FreeBalance` of the sender and receiver.
   * It will decrease the total issuance of the system by the `TransferFee`.
   * If the sender's account is below the existential deposit as a result
   * of the transfer, the account will be reaped.
   * 
   * The dispatch origin for this call must be `Signed` by the transactor.
   * 
   * # <weight>
   * - Dependent on arguments but not critical, given proper implementations for input config
   *   types. See related functions below.
   * - It contains a limited number of reads and writes internally and no complex
   *   computation.
   * 
   * Related functions:
   * 
   *   - `ensure_can_withdraw` is always called internally but has a bounded complexity.
   *   - Transferring balances to accounts that did not exist before will cause
   *     `T::OnNewAccount::on_new_account` to be called.
   *   - Removing enough funds from an account will trigger `T::DustRemoval::on_unbalanced`.
   *   - `transfer_keep_alive` works the same way as `transfer`, but has an additional check
   *     that the transfer will not kill the origin account.
   * ---------------------------------
   * - Base Weight: 73.64 µs, worst case scenario (account created, account removed)
   * - DB Weight: 1 Read and 1 Write to destination account
   * - Origin account is already in memory, so no DB operations for them.
   * # </weight>
   */
  get asV9111(): {dest: v9111.MultiAddress, value: bigint} {
    assert(this.isV9111)
    return this._chain.decodeCall(this.call)
  }
}

export class BalancesTransferAllCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Balances.transfer_all')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   *  Transfer the entire transferable balance from the caller account.
   * 
   *  NOTE: This function only attempts to transfer _transferable_ balances. This means that
   *  any locked, reserved, or existential deposits (when `keep_alive` is `true`), will not be
   *  transferred by this function. To ensure that this function results in a killed account,
   *  you might need to prepare the account by removing any reference counters, storage
   *  deposits, etc...
   * 
   *  The dispatch origin of this call must be Signed.
   * 
   *  - `dest`: The recipient of the transfer.
   *  - `keep_alive`: A boolean to determine if the `transfer_all` operation should send all
   *    of the funds the account has, causing the sender account to be killed (false), or
   *    transfer everything except at least the existential deposit, which will guarantee to
   *    keep the sender account alive (true).
   *    # <weight>
   *  - O(1). Just like transfer, but reading the user's transferable balance first.
   *    #</weight>
   */
  get isV9050(): boolean {
    return this._chain.getCallHash('Balances.transfer_all') === '56952003e07947f758a9928d8462037abffea6a7fa991c0d3451f5c47d45f254'
  }

  /**
   *  Transfer the entire transferable balance from the caller account.
   * 
   *  NOTE: This function only attempts to transfer _transferable_ balances. This means that
   *  any locked, reserved, or existential deposits (when `keep_alive` is `true`), will not be
   *  transferred by this function. To ensure that this function results in a killed account,
   *  you might need to prepare the account by removing any reference counters, storage
   *  deposits, etc...
   * 
   *  The dispatch origin of this call must be Signed.
   * 
   *  - `dest`: The recipient of the transfer.
   *  - `keep_alive`: A boolean to determine if the `transfer_all` operation should send all
   *    of the funds the account has, causing the sender account to be killed (false), or
   *    transfer everything except at least the existential deposit, which will guarantee to
   *    keep the sender account alive (true).
   *    # <weight>
   *  - O(1). Just like transfer, but reading the user's transferable balance first.
   *    #</weight>
   */
  get asV9050(): {dest: v9050.LookupSource, keepAlive: boolean} {
    assert(this.isV9050)
    return this._chain.decodeCall(this.call)
  }

  /**
   * Transfer the entire transferable balance from the caller account.
   * 
   * NOTE: This function only attempts to transfer _transferable_ balances. This means that
   * any locked, reserved, or existential deposits (when `keep_alive` is `true`), will not be
   * transferred by this function. To ensure that this function results in a killed account,
   * you might need to prepare the account by removing any reference counters, storage
   * deposits, etc...
   * 
   * The dispatch origin of this call must be Signed.
   * 
   * - `dest`: The recipient of the transfer.
   * - `keep_alive`: A boolean to determine if the `transfer_all` operation should send all
   *   of the funds the account has, causing the sender account to be killed (false), or
   *   transfer everything except at least the existential deposit, which will guarantee to
   *   keep the sender account alive (true). # <weight>
   * - O(1). Just like transfer, but reading the user's transferable balance first.
   *   #</weight>
   */
  get isV9111(): boolean {
    return this._chain.getCallHash('Balances.transfer_all') === '9c94c2ca9979f6551af6e123fb6b6ba14d026f862f9a023706f8f88c556b355f'
  }

  /**
   * Transfer the entire transferable balance from the caller account.
   * 
   * NOTE: This function only attempts to transfer _transferable_ balances. This means that
   * any locked, reserved, or existential deposits (when `keep_alive` is `true`), will not be
   * transferred by this function. To ensure that this function results in a killed account,
   * you might need to prepare the account by removing any reference counters, storage
   * deposits, etc...
   * 
   * The dispatch origin of this call must be Signed.
   * 
   * - `dest`: The recipient of the transfer.
   * - `keep_alive`: A boolean to determine if the `transfer_all` operation should send all
   *   of the funds the account has, causing the sender account to be killed (false), or
   *   transfer everything except at least the existential deposit, which will guarantee to
   *   keep the sender account alive (true). # <weight>
   * - O(1). Just like transfer, but reading the user's transferable balance first.
   *   #</weight>
   */
  get asV9111(): {dest: v9111.MultiAddress, keepAlive: boolean} {
    assert(this.isV9111)
    return this._chain.decodeCall(this.call)
  }
}

export class BalancesTransferKeepAliveCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Balances.transfer_keep_alive')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   *  Same as the [`transfer`] call, but with a check that the transfer will not kill the
   *  origin account.
   * 
   *  99% of the time you want [`transfer`] instead.
   * 
   *  [`transfer`]: struct.Module.html#method.transfer
   */
  get isV1020(): boolean {
    return this._chain.getCallHash('Balances.transfer_keep_alive') === '5a96e49eaf0745110a2342c53e5619233745028a575c67865c4ad4921e77634b'
  }

  /**
   *  Same as the [`transfer`] call, but with a check that the transfer will not kill the
   *  origin account.
   * 
   *  99% of the time you want [`transfer`] instead.
   * 
   *  [`transfer`]: struct.Module.html#method.transfer
   */
  get asV1020(): {dest: v1020.LookupSource, value: bigint} {
    assert(this.isV1020)
    return this._chain.decodeCall(this.call)
  }

  /**
   *  Same as the [`transfer`] call, but with a check that the transfer will not kill the
   *  origin account.
   * 
   *  99% of the time you want [`transfer`] instead.
   * 
   *  [`transfer`]: struct.Module.html#method.transfer
   */
  get isV1050(): boolean {
    return this._chain.getCallHash('Balances.transfer_keep_alive') === 'cf5bb376709277883598390b3462e93b0f3c383df391c0649728c965e8da82fd'
  }

  /**
   *  Same as the [`transfer`] call, but with a check that the transfer will not kill the
   *  origin account.
   * 
   *  99% of the time you want [`transfer`] instead.
   * 
   *  [`transfer`]: struct.Module.html#method.transfer
   */
  get asV1050(): {dest: Uint8Array, value: bigint} {
    assert(this.isV1050)
    return this._chain.decodeCall(this.call)
  }

  /**
   *  Same as the [`transfer`] call, but with a check that the transfer will not kill the
   *  origin account.
   * 
   *  99% of the time you want [`transfer`] instead.
   * 
   *  [`transfer`]: struct.Module.html#method.transfer
   *  # <weight>
   *  - Cheaper than transfer because account cannot be killed.
   *  - Base Weight: 51.4 µs
   *  - DB Weight: 1 Read and 1 Write to dest (sender is in overlay already)
   *  #</weight>
   */
  get isV2028(): boolean {
    return this._chain.getCallHash('Balances.transfer_keep_alive') === 'c3f0f475940fc4bef49b298f76ba345680f20fc48d5899b4678314a07e2ce090'
  }

  /**
   *  Same as the [`transfer`] call, but with a check that the transfer will not kill the
   *  origin account.
   * 
   *  99% of the time you want [`transfer`] instead.
   * 
   *  [`transfer`]: struct.Module.html#method.transfer
   *  # <weight>
   *  - Cheaper than transfer because account cannot be killed.
   *  - Base Weight: 51.4 µs
   *  - DB Weight: 1 Read and 1 Write to dest (sender is in overlay already)
   *  #</weight>
   */
  get asV2028(): {dest: v2028.LookupSource, value: bigint} {
    assert(this.isV2028)
    return this._chain.decodeCall(this.call)
  }

  /**
   * Same as the [`transfer`] call, but with a check that the transfer will not kill the
   * origin account.
   * 
   * 99% of the time you want [`transfer`] instead.
   * 
   * [`transfer`]: struct.Pallet.html#method.transfer
   * # <weight>
   * - Cheaper than transfer because account cannot be killed.
   * - Base Weight: 51.4 µs
   * - DB Weight: 1 Read and 1 Write to dest (sender is in overlay already)
   * #</weight>
   */
  get isV9111(): boolean {
    return this._chain.getCallHash('Balances.transfer_keep_alive') === 'fc85bea9d0d171982f66e8a55667d58dc9a1612bcafe84309942bf47e23e3094'
  }

  /**
   * Same as the [`transfer`] call, but with a check that the transfer will not kill the
   * origin account.
   * 
   * 99% of the time you want [`transfer`] instead.
   * 
   * [`transfer`]: struct.Pallet.html#method.transfer
   * # <weight>
   * - Cheaper than transfer because account cannot be killed.
   * - Base Weight: 51.4 µs
   * - DB Weight: 1 Read and 1 Write to dest (sender is in overlay already)
   * #</weight>
   */
  get asV9111(): {dest: v9111.MultiAddress, value: bigint} {
    assert(this.isV9111)
    return this._chain.decodeCall(this.call)
  }
}

export class CrowdloanContributeCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Crowdloan.contribute')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   *  Contribute to a crowd sale. This will transfer some balance over to fund a parachain
   *  slot. It will be withdrawable when the crowdloan has ended and the funds are unused.
   */
  get isV9010(): boolean {
    return this._chain.getCallHash('Crowdloan.contribute') === 'c85a49d78a97667f6d8d7cdda206ad3ba38bd873ab2e82a42135a31c48152a6c'
  }

  /**
   *  Contribute to a crowd sale. This will transfer some balance over to fund a parachain
   *  slot. It will be withdrawable when the crowdloan has ended and the funds are unused.
   */
  get asV9010(): {index: number, value: bigint, signature: (v9010.MultiSignature | undefined)} {
    assert(this.isV9010)
    return this._chain.decodeCall(this.call)
  }
}

export class CrowdloanCreateCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Crowdloan.create')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   *  Create a new crowdloaning campaign for a parachain slot with the given lease period range.
   * 
   *  This applies a lock to your parachain configuration, ensuring that it cannot be changed
   *  by the parachain manager.
   */
  get isV9010(): boolean {
    return this._chain.getCallHash('Crowdloan.create') === '9d0529ac9fb92b6a7eca157299243acd0d2eb82a352509475556c79f78f47aa3'
  }

  /**
   *  Create a new crowdloaning campaign for a parachain slot with the given lease period range.
   * 
   *  This applies a lock to your parachain configuration, ensuring that it cannot be changed
   *  by the parachain manager.
   */
  get asV9010(): {index: number, cap: bigint, firstPeriod: number, lastPeriod: number, end: number, verifier: (v9010.MultiSigner | undefined)} {
    assert(this.isV9010)
    return this._chain.decodeCall(this.call)
  }
}

export class StakingBondCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Staking.bond')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   *  Take the origin account as a stash and lock up `value` of its balance. `controller` will
   *  be the account that controls it.
   * 
   *  `value` must be more than the `minimum_balance` specified by `T::Currency`.
   * 
   *  The dispatch origin for this call must be _Signed_ by the stash account.
   * 
   *  # <weight>
   *  - Independent of the arguments. Moderate complexity.
   *  - O(1).
   *  - Three extra DB entries.
   * 
   *  NOTE: Two of the storage writes (`Self::bonded`, `Self::payee`) are _never_ cleaned unless
   *  the `origin` falls below _existential deposit_ and gets removed as dust.
   *  # </weight>
   */
  get isV1020(): boolean {
    return this._chain.getCallHash('Staking.bond') === '77a89e4c12792f968efd83b6a9d740690602a445b35884d8ae655bdc1f3480f7'
  }

  /**
   *  Take the origin account as a stash and lock up `value` of its balance. `controller` will
   *  be the account that controls it.
   * 
   *  `value` must be more than the `minimum_balance` specified by `T::Currency`.
   * 
   *  The dispatch origin for this call must be _Signed_ by the stash account.
   * 
   *  # <weight>
   *  - Independent of the arguments. Moderate complexity.
   *  - O(1).
   *  - Three extra DB entries.
   * 
   *  NOTE: Two of the storage writes (`Self::bonded`, `Self::payee`) are _never_ cleaned unless
   *  the `origin` falls below _existential deposit_ and gets removed as dust.
   *  # </weight>
   */
  get asV1020(): {controller: v1020.LookupSource, value: bigint, payee: v1020.RewardDestination} {
    assert(this.isV1020)
    return this._chain.decodeCall(this.call)
  }

  /**
   *  Take the origin account as a stash and lock up `value` of its balance. `controller` will
   *  be the account that controls it.
   * 
   *  `value` must be more than the `minimum_balance` specified by `T::Currency`.
   * 
   *  The dispatch origin for this call must be _Signed_ by the stash account.
   * 
   *  # <weight>
   *  - Independent of the arguments. Moderate complexity.
   *  - O(1).
   *  - Three extra DB entries.
   * 
   *  NOTE: Two of the storage writes (`Self::bonded`, `Self::payee`) are _never_ cleaned unless
   *  the `origin` falls below _existential deposit_ and gets removed as dust.
   *  # </weight>
   */
  get isV1050(): boolean {
    return this._chain.getCallHash('Staking.bond') === 'bb948688bed1a70b8b0ff155f0a4555536a3bab1f35f7432580a502b100ae8e4'
  }

  /**
   *  Take the origin account as a stash and lock up `value` of its balance. `controller` will
   *  be the account that controls it.
   * 
   *  `value` must be more than the `minimum_balance` specified by `T::Currency`.
   * 
   *  The dispatch origin for this call must be _Signed_ by the stash account.
   * 
   *  # <weight>
   *  - Independent of the arguments. Moderate complexity.
   *  - O(1).
   *  - Three extra DB entries.
   * 
   *  NOTE: Two of the storage writes (`Self::bonded`, `Self::payee`) are _never_ cleaned unless
   *  the `origin` falls below _existential deposit_ and gets removed as dust.
   *  # </weight>
   */
  get asV1050(): {controller: Uint8Array, value: bigint, payee: v1050.RewardDestination} {
    assert(this.isV1050)
    return this._chain.decodeCall(this.call)
  }

  /**
   *  Take the origin account as a stash and lock up `value` of its balance. `controller` will
   *  be the account that controls it.
   * 
   *  `value` must be more than the `minimum_balance` specified by `T::Currency`.
   * 
   *  The dispatch origin for this call must be _Signed_ by the stash account.
   * 
   *  Emits `Bonded`.
   * 
   *  # <weight>
   *  - Independent of the arguments. Moderate complexity.
   *  - O(1).
   *  - Three extra DB entries.
   * 
   *  NOTE: Two of the storage writes (`Self::bonded`, `Self::payee`) are _never_ cleaned
   *  unless the `origin` falls below _existential deposit_ and gets removed as dust.
   *  ------------------
   *  Weight: O(1)
   *  DB Weight:
   *  - Read: Bonded, Ledger, [Origin Account], Current Era, History Depth, Locks
   *  - Write: Bonded, Payee, [Origin Account], Locks, Ledger
   *  # </weight>
   */
  get isV2028(): boolean {
    return this._chain.getCallHash('Staking.bond') === '336aace4bca839311d4cecb842a12241ffdc1cb7c84e81b2b6ab6a2b818777f0'
  }

  /**
   *  Take the origin account as a stash and lock up `value` of its balance. `controller` will
   *  be the account that controls it.
   * 
   *  `value` must be more than the `minimum_balance` specified by `T::Currency`.
   * 
   *  The dispatch origin for this call must be _Signed_ by the stash account.
   * 
   *  Emits `Bonded`.
   * 
   *  # <weight>
   *  - Independent of the arguments. Moderate complexity.
   *  - O(1).
   *  - Three extra DB entries.
   * 
   *  NOTE: Two of the storage writes (`Self::bonded`, `Self::payee`) are _never_ cleaned
   *  unless the `origin` falls below _existential deposit_ and gets removed as dust.
   *  ------------------
   *  Weight: O(1)
   *  DB Weight:
   *  - Read: Bonded, Ledger, [Origin Account], Current Era, History Depth, Locks
   *  - Write: Bonded, Payee, [Origin Account], Locks, Ledger
   *  # </weight>
   */
  get asV2028(): {controller: v2028.LookupSource, value: bigint, payee: v2028.RewardDestination} {
    assert(this.isV2028)
    return this._chain.decodeCall(this.call)
  }

  /**
   * Take the origin account as a stash and lock up `value` of its balance. `controller` will
   * be the account that controls it.
   * 
   * `value` must be more than the `minimum_balance` specified by `T::Currency`.
   * 
   * The dispatch origin for this call must be _Signed_ by the stash account.
   * 
   * Emits `Bonded`.
   * # <weight>
   * - Independent of the arguments. Moderate complexity.
   * - O(1).
   * - Three extra DB entries.
   * 
   * NOTE: Two of the storage writes (`Self::bonded`, `Self::payee`) are _never_ cleaned
   * unless the `origin` falls below _existential deposit_ and gets removed as dust.
   * ------------------
   * # </weight>
   */
  get isV9111(): boolean {
    return this._chain.getCallHash('Staking.bond') === 'c0b607a5cbdc40ee9aed26b3c86cfe3159aeccd5ac4e9005210dd39d0317ba48'
  }

  /**
   * Take the origin account as a stash and lock up `value` of its balance. `controller` will
   * be the account that controls it.
   * 
   * `value` must be more than the `minimum_balance` specified by `T::Currency`.
   * 
   * The dispatch origin for this call must be _Signed_ by the stash account.
   * 
   * Emits `Bonded`.
   * # <weight>
   * - Independent of the arguments. Moderate complexity.
   * - O(1).
   * - Three extra DB entries.
   * 
   * NOTE: Two of the storage writes (`Self::bonded`, `Self::payee`) are _never_ cleaned
   * unless the `origin` falls below _existential deposit_ and gets removed as dust.
   * ------------------
   * # </weight>
   */
  get asV9111(): {controller: v9111.MultiAddress, value: bigint, payee: v9111.RewardDestination} {
    assert(this.isV9111)
    return this._chain.decodeCall(this.call)
  }
}

export class StakingBondExtraCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Staking.bond_extra')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   *  Add some extra amount that have appeared in the stash `free_balance` into the balance up
   *  for staking.
   * 
   *  Use this if there are additional funds in your stash account that you wish to bond.
   *  Unlike [`bond`] or [`unbond`] this function does not impose any limitation on the amount
   *  that can be added.
   * 
   *  The dispatch origin for this call must be _Signed_ by the stash, not the controller.
   * 
   *  # <weight>
   *  - Independent of the arguments. Insignificant complexity.
   *  - O(1).
   *  - One DB entry.
   *  # </weight>
   */
  get isV1020(): boolean {
    return this._chain.getCallHash('Staking.bond_extra') === 'f92c56c980d6a55c468653fc3149548edcf2481e5da53835a201cafa7dc02fd8'
  }

  /**
   *  Add some extra amount that have appeared in the stash `free_balance` into the balance up
   *  for staking.
   * 
   *  Use this if there are additional funds in your stash account that you wish to bond.
   *  Unlike [`bond`] or [`unbond`] this function does not impose any limitation on the amount
   *  that can be added.
   * 
   *  The dispatch origin for this call must be _Signed_ by the stash, not the controller.
   * 
   *  # <weight>
   *  - Independent of the arguments. Insignificant complexity.
   *  - O(1).
   *  - One DB entry.
   *  # </weight>
   */
  get asV1020(): {maxAdditional: bigint} {
    assert(this.isV1020)
    return this._chain.decodeCall(this.call)
  }
}

export class StakingChillCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Staking.chill')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   *  Declare no desire to either validate or nominate.
   * 
   *  Effects will be felt at the beginning of the next era.
   * 
   *  The dispatch origin for this call must be _Signed_ by the controller, not the stash.
   * 
   *  # <weight>
   *  - Independent of the arguments. Insignificant complexity.
   *  - Contains one read.
   *  - Writes are limited to the `origin` account key.
   *  # </weight>
   */
  get isV1020(): boolean {
    return this._chain.getCallHash('Staking.chill') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
  }

  /**
   *  Declare no desire to either validate or nominate.
   * 
   *  Effects will be felt at the beginning of the next era.
   * 
   *  The dispatch origin for this call must be _Signed_ by the controller, not the stash.
   * 
   *  # <weight>
   *  - Independent of the arguments. Insignificant complexity.
   *  - Contains one read.
   *  - Writes are limited to the `origin` account key.
   *  # </weight>
   */
  get asV1020(): null {
    assert(this.isV1020)
    return this._chain.decodeCall(this.call)
  }
}

export class StakingKickCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Staking.kick')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   *  Remove the given nominations from the calling validator.
   * 
   *  Effects will be felt at the beginning of the next era.
   * 
   *  The dispatch origin for this call must be _Signed_ by the controller, not the stash.
   *  And, it can be only called when [`EraElectionStatus`] is `Closed`. The controller
   *  account should represent a validator.
   * 
   *  - `who`: A list of nominator stash accounts who are nominating this validator which
   *    should no longer be nominating this validator.
   * 
   *  Note: Making this call only makes sense if you first set the validator preferences to
   *  block any further nominations.
   */
  get isV2028(): boolean {
    return this._chain.getCallHash('Staking.kick') === '760f2d470d3cb5efbef130b8d79a202238d983a6680d5e2d4eee31ad48834e9f'
  }

  /**
   *  Remove the given nominations from the calling validator.
   * 
   *  Effects will be felt at the beginning of the next era.
   * 
   *  The dispatch origin for this call must be _Signed_ by the controller, not the stash.
   *  And, it can be only called when [`EraElectionStatus`] is `Closed`. The controller
   *  account should represent a validator.
   * 
   *  - `who`: A list of nominator stash accounts who are nominating this validator which
   *    should no longer be nominating this validator.
   * 
   *  Note: Making this call only makes sense if you first set the validator preferences to
   *  block any further nominations.
   */
  get asV2028(): {who: v2028.LookupSource[]} {
    assert(this.isV2028)
    return this._chain.decodeCall(this.call)
  }

  /**
   * Remove the given nominations from the calling validator.
   * 
   * Effects will be felt at the beginning of the next era.
   * 
   * The dispatch origin for this call must be _Signed_ by the controller, not the stash.
   * 
   * - `who`: A list of nominator stash accounts who are nominating this validator which
   *   should no longer be nominating this validator.
   * 
   * Note: Making this call only makes sense if you first set the validator preferences to
   * block any further nominations.
   */
  get isV9111(): boolean {
    return this._chain.getCallHash('Staking.kick') === 'e538d9391f8376022db5c010fa7390c92954267b2d5ebc13e621f87adebe57b9'
  }

  /**
   * Remove the given nominations from the calling validator.
   * 
   * Effects will be felt at the beginning of the next era.
   * 
   * The dispatch origin for this call must be _Signed_ by the controller, not the stash.
   * 
   * - `who`: A list of nominator stash accounts who are nominating this validator which
   *   should no longer be nominating this validator.
   * 
   * Note: Making this call only makes sense if you first set the validator preferences to
   * block any further nominations.
   */
  get asV9111(): {who: v9111.MultiAddress[]} {
    assert(this.isV9111)
    return this._chain.decodeCall(this.call)
  }
}

export class StakingNominateCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Staking.nominate')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   *  Declare the desire to nominate `targets` for the origin controller.
   * 
   *  Effects will be felt at the beginning of the next era.
   * 
   *  The dispatch origin for this call must be _Signed_ by the controller, not the stash.
   * 
   *  # <weight>
   *  - The transaction's complexity is proportional to the size of `targets`,
   *  which is capped at `MAX_NOMINATIONS`.
   *  - Both the reads and writes follow a similar pattern.
   *  # </weight>
   */
  get isV1020(): boolean {
    return this._chain.getCallHash('Staking.nominate') === 'ef0d9859df5914c3ac406eb6255e894f22bdc249ab0f7f82c6f01029112924b1'
  }

  /**
   *  Declare the desire to nominate `targets` for the origin controller.
   * 
   *  Effects will be felt at the beginning of the next era.
   * 
   *  The dispatch origin for this call must be _Signed_ by the controller, not the stash.
   * 
   *  # <weight>
   *  - The transaction's complexity is proportional to the size of `targets`,
   *  which is capped at `MAX_NOMINATIONS`.
   *  - Both the reads and writes follow a similar pattern.
   *  # </weight>
   */
  get asV1020(): {targets: v1020.LookupSource[]} {
    assert(this.isV1020)
    return this._chain.decodeCall(this.call)
  }

  /**
   *  Declare the desire to nominate `targets` for the origin controller.
   * 
   *  Effects will be felt at the beginning of the next era.
   * 
   *  The dispatch origin for this call must be _Signed_ by the controller, not the stash.
   * 
   *  # <weight>
   *  - The transaction's complexity is proportional to the size of `targets`,
   *  which is capped at `MAX_NOMINATIONS`.
   *  - Both the reads and writes follow a similar pattern.
   *  # </weight>
   */
  get isV1050(): boolean {
    return this._chain.getCallHash('Staking.nominate') === '730fc5a4090c1c566ea6d11126ba7258c98a461b0c6bfca8bf9e17e42f8801de'
  }

  /**
   *  Declare the desire to nominate `targets` for the origin controller.
   * 
   *  Effects will be felt at the beginning of the next era.
   * 
   *  The dispatch origin for this call must be _Signed_ by the controller, not the stash.
   * 
   *  # <weight>
   *  - The transaction's complexity is proportional to the size of `targets`,
   *  which is capped at `MAX_NOMINATIONS`.
   *  - Both the reads and writes follow a similar pattern.
   *  # </weight>
   */
  get asV1050(): {targets: Uint8Array[]} {
    assert(this.isV1050)
    return this._chain.decodeCall(this.call)
  }

  /**
   *  Declare the desire to nominate `targets` for the origin controller.
   * 
   *  Effects will be felt at the beginning of the next era. This can only be called when
   *  [`EraElectionStatus`] is `Closed`.
   * 
   *  The dispatch origin for this call must be _Signed_ by the controller, not the stash.
   *  And, it can be only called when [`EraElectionStatus`] is `Closed`.
   * 
   *  # <weight>
   *  - The transaction's complexity is proportional to the size of `targets` (N)
   *  which is capped at CompactAssignments::LIMIT (MAX_NOMINATIONS).
   *  - Both the reads and writes follow a similar pattern.
   *  ---------
   *  Weight: O(N)
   *  where N is the number of targets
   *  DB Weight:
   *  - Reads: Era Election Status, Ledger, Current Era
   *  - Writes: Validators, Nominators
   *  # </weight>
   */
  get isV2028(): boolean {
    return this._chain.getCallHash('Staking.nominate') === 'a653cde167810e73479047a5ef0738fdd0dc4e9afa5b310a19c8335e4378f706'
  }

  /**
   *  Declare the desire to nominate `targets` for the origin controller.
   * 
   *  Effects will be felt at the beginning of the next era. This can only be called when
   *  [`EraElectionStatus`] is `Closed`.
   * 
   *  The dispatch origin for this call must be _Signed_ by the controller, not the stash.
   *  And, it can be only called when [`EraElectionStatus`] is `Closed`.
   * 
   *  # <weight>
   *  - The transaction's complexity is proportional to the size of `targets` (N)
   *  which is capped at CompactAssignments::LIMIT (MAX_NOMINATIONS).
   *  - Both the reads and writes follow a similar pattern.
   *  ---------
   *  Weight: O(N)
   *  where N is the number of targets
   *  DB Weight:
   *  - Reads: Era Election Status, Ledger, Current Era
   *  - Writes: Validators, Nominators
   *  # </weight>
   */
  get asV2028(): {targets: v2028.LookupSource[]} {
    assert(this.isV2028)
    return this._chain.decodeCall(this.call)
  }

  /**
   * Declare the desire to nominate `targets` for the origin controller.
   * 
   * Effects will be felt at the beginning of the next era.
   * 
   * The dispatch origin for this call must be _Signed_ by the controller, not the stash.
   * 
   * # <weight>
   * - The transaction's complexity is proportional to the size of `targets` (N)
   * which is capped at CompactAssignments::LIMIT (MAX_NOMINATIONS).
   * - Both the reads and writes follow a similar pattern.
   * # </weight>
   */
  get isV9111(): boolean {
    return this._chain.getCallHash('Staking.nominate') === '4b7eca27044655bd9da5cc614a4bf774babc00decbed9ca59d95298b300d72de'
  }

  /**
   * Declare the desire to nominate `targets` for the origin controller.
   * 
   * Effects will be felt at the beginning of the next era.
   * 
   * The dispatch origin for this call must be _Signed_ by the controller, not the stash.
   * 
   * # <weight>
   * - The transaction's complexity is proportional to the size of `targets` (N)
   * which is capped at CompactAssignments::LIMIT (MAX_NOMINATIONS).
   * - Both the reads and writes follow a similar pattern.
   * # </weight>
   */
  get asV9111(): {targets: v9111.MultiAddress[]} {
    assert(this.isV9111)
    return this._chain.decodeCall(this.call)
  }
}

export class StakingPayoutStakersCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Staking.payout_stakers')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   *  Pay out all the stakers behind a single validator for a single era.
   * 
   *  - `validator_stash` is the stash account of the validator. Their nominators, up to
   *    `T::MaxNominatorRewardedPerValidator`, will also receive their rewards.
   *  - `era` may be any era between `[current_era - history_depth; current_era]`.
   * 
   *  The origin of this call must be _Signed_. Any account can call this function, even if
   *  it is not one of the stakers.
   * 
   *  This can only be called when [`EraElectionStatus`] is `Closed`.
   * 
   *  # <weight>
   *  - Time complexity: at most O(MaxNominatorRewardedPerValidator).
   *  - Contains a limited number of reads and writes.
   *  # </weight>
   */
  get isV1058(): boolean {
    return this._chain.getCallHash('Staking.payout_stakers') === '1a09dc413ed4b8ce5cbcdc282b798636ca24268cca001e43fc92d892de3b6a5f'
  }

  /**
   *  Pay out all the stakers behind a single validator for a single era.
   * 
   *  - `validator_stash` is the stash account of the validator. Their nominators, up to
   *    `T::MaxNominatorRewardedPerValidator`, will also receive their rewards.
   *  - `era` may be any era between `[current_era - history_depth; current_era]`.
   * 
   *  The origin of this call must be _Signed_. Any account can call this function, even if
   *  it is not one of the stakers.
   * 
   *  This can only be called when [`EraElectionStatus`] is `Closed`.
   * 
   *  # <weight>
   *  - Time complexity: at most O(MaxNominatorRewardedPerValidator).
   *  - Contains a limited number of reads and writes.
   *  # </weight>
   */
  get asV1058(): {validatorStash: Uint8Array, era: number} {
    assert(this.isV1058)
    return this._chain.decodeCall(this.call)
  }
}

export class StakingSetControllerCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Staking.set_controller')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   *  (Re-)set the controller of a stash.
   * 
   *  Effects will be felt at the beginning of the next era.
   * 
   *  The dispatch origin for this call must be _Signed_ by the stash, not the controller.
   * 
   *  # <weight>
   *  - Independent of the arguments. Insignificant complexity.
   *  - Contains a limited number of reads.
   *  - Writes are limited to the `origin` account key.
   *  # </weight>
   */
  get isV1020(): boolean {
    return this._chain.getCallHash('Staking.set_controller') === 'ea495be34eb0363f94ad384fd20004dfec26ca760dc2776b92541482a1719f1b'
  }

  /**
   *  (Re-)set the controller of a stash.
   * 
   *  Effects will be felt at the beginning of the next era.
   * 
   *  The dispatch origin for this call must be _Signed_ by the stash, not the controller.
   * 
   *  # <weight>
   *  - Independent of the arguments. Insignificant complexity.
   *  - Contains a limited number of reads.
   *  - Writes are limited to the `origin` account key.
   *  # </weight>
   */
  get asV1020(): {controller: v1020.LookupSource} {
    assert(this.isV1020)
    return this._chain.decodeCall(this.call)
  }

  /**
   *  (Re-)set the controller of a stash.
   * 
   *  Effects will be felt at the beginning of the next era.
   * 
   *  The dispatch origin for this call must be _Signed_ by the stash, not the controller.
   * 
   *  # <weight>
   *  - Independent of the arguments. Insignificant complexity.
   *  - Contains a limited number of reads.
   *  - Writes are limited to the `origin` account key.
   *  # </weight>
   */
  get isV1050(): boolean {
    return this._chain.getCallHash('Staking.set_controller') === 'bbdd03dc244a9d87deceeb91d015d7ef52746b99580b1474586c8699a77574e1'
  }

  /**
   *  (Re-)set the controller of a stash.
   * 
   *  Effects will be felt at the beginning of the next era.
   * 
   *  The dispatch origin for this call must be _Signed_ by the stash, not the controller.
   * 
   *  # <weight>
   *  - Independent of the arguments. Insignificant complexity.
   *  - Contains a limited number of reads.
   *  - Writes are limited to the `origin` account key.
   *  # </weight>
   */
  get asV1050(): {controller: Uint8Array} {
    assert(this.isV1050)
    return this._chain.decodeCall(this.call)
  }

  /**
   *  (Re-)set the controller of a stash.
   * 
   *  Effects will be felt at the beginning of the next era.
   * 
   *  The dispatch origin for this call must be _Signed_ by the stash, not the controller.
   * 
   *  # <weight>
   *  - Independent of the arguments. Insignificant complexity.
   *  - Contains a limited number of reads.
   *  - Writes are limited to the `origin` account key.
   *  ----------
   *  Weight: O(1)
   *  DB Weight:
   *  - Read: Bonded, Ledger New Controller, Ledger Old Controller
   *  - Write: Bonded, Ledger New Controller, Ledger Old Controller
   *  # </weight>
   */
  get isV2028(): boolean {
    return this._chain.getCallHash('Staking.set_controller') === '61b4041aa7366e679d366d2062deb643451b64015c330746395765e6865e5af2'
  }

  /**
   *  (Re-)set the controller of a stash.
   * 
   *  Effects will be felt at the beginning of the next era.
   * 
   *  The dispatch origin for this call must be _Signed_ by the stash, not the controller.
   * 
   *  # <weight>
   *  - Independent of the arguments. Insignificant complexity.
   *  - Contains a limited number of reads.
   *  - Writes are limited to the `origin` account key.
   *  ----------
   *  Weight: O(1)
   *  DB Weight:
   *  - Read: Bonded, Ledger New Controller, Ledger Old Controller
   *  - Write: Bonded, Ledger New Controller, Ledger Old Controller
   *  # </weight>
   */
  get asV2028(): {controller: v2028.LookupSource} {
    assert(this.isV2028)
    return this._chain.decodeCall(this.call)
  }

  /**
   * (Re-)set the controller of a stash.
   * 
   * Effects will be felt at the beginning of the next era.
   * 
   * The dispatch origin for this call must be _Signed_ by the stash, not the controller.
   * 
   * # <weight>
   * - Independent of the arguments. Insignificant complexity.
   * - Contains a limited number of reads.
   * - Writes are limited to the `origin` account key.
   * ----------
   * Weight: O(1)
   * DB Weight:
   * - Read: Bonded, Ledger New Controller, Ledger Old Controller
   * - Write: Bonded, Ledger New Controller, Ledger Old Controller
   * # </weight>
   */
  get isV9111(): boolean {
    return this._chain.getCallHash('Staking.set_controller') === '81dc3a18eb19c7f258654686fb92e5bf48185191f2c59179a5b4626965fc66cd'
  }

  /**
   * (Re-)set the controller of a stash.
   * 
   * Effects will be felt at the beginning of the next era.
   * 
   * The dispatch origin for this call must be _Signed_ by the stash, not the controller.
   * 
   * # <weight>
   * - Independent of the arguments. Insignificant complexity.
   * - Contains a limited number of reads.
   * - Writes are limited to the `origin` account key.
   * ----------
   * Weight: O(1)
   * DB Weight:
   * - Read: Bonded, Ledger New Controller, Ledger Old Controller
   * - Write: Bonded, Ledger New Controller, Ledger Old Controller
   * # </weight>
   */
  get asV9111(): {controller: v9111.MultiAddress} {
    assert(this.isV9111)
    return this._chain.decodeCall(this.call)
  }
}

export class StakingSetPayeeCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Staking.set_payee')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   *  (Re-)set the payment target for a controller.
   * 
   *  Effects will be felt at the beginning of the next era.
   * 
   *  The dispatch origin for this call must be _Signed_ by the controller, not the stash.
   * 
   *  # <weight>
   *  - Independent of the arguments. Insignificant complexity.
   *  - Contains a limited number of reads.
   *  - Writes are limited to the `origin` account key.
   *  # </weight>
   */
  get isV1020(): boolean {
    return this._chain.getCallHash('Staking.set_payee') === 'e882138b8d0371da862d058ac00f1def3ca0f71ab72eda3fbfb7d75b5fa16515'
  }

  /**
   *  (Re-)set the payment target for a controller.
   * 
   *  Effects will be felt at the beginning of the next era.
   * 
   *  The dispatch origin for this call must be _Signed_ by the controller, not the stash.
   * 
   *  # <weight>
   *  - Independent of the arguments. Insignificant complexity.
   *  - Contains a limited number of reads.
   *  - Writes are limited to the `origin` account key.
   *  # </weight>
   */
  get asV1020(): {payee: v1020.RewardDestination} {
    assert(this.isV1020)
    return this._chain.decodeCall(this.call)
  }
}

export class StakingUnbondCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Staking.unbond')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   *  Schedule a portion of the stash to be unlocked ready for transfer out after the bond
   *  period ends. If this leaves an amount actively bonded less than
   *  T::Currency::minimum_balance(), then it is increased to the full amount.
   * 
   *  Once the unlock period is done, you can call `withdraw_unbonded` to actually move
   *  the funds out of management ready for transfer.
   * 
   *  No more than a limited number of unlocking chunks (see `MAX_UNLOCKING_CHUNKS`)
   *  can co-exists at the same time. In that case, [`Call::withdraw_unbonded`] need
   *  to be called first to remove some of the chunks (if possible).
   * 
   *  The dispatch origin for this call must be _Signed_ by the controller, not the stash.
   * 
   *  See also [`Call::withdraw_unbonded`].
   * 
   *  # <weight>
   *  - Independent of the arguments. Limited but potentially exploitable complexity.
   *  - Contains a limited number of reads.
   *  - Each call (requires the remainder of the bonded balance to be above `minimum_balance`)
   *    will cause a new entry to be inserted into a vector (`Ledger.unlocking`) kept in storage.
   *    The only way to clean the aforementioned storage item is also user-controlled via `withdraw_unbonded`.
   *  - One DB entry.
   *  </weight>
   */
  get isV1020(): boolean {
    return this._chain.getCallHash('Staking.unbond') === 'd13cb91c3f61510beece366e7f7c2d0705f01d70f9bc28721d2437cd210a3372'
  }

  /**
   *  Schedule a portion of the stash to be unlocked ready for transfer out after the bond
   *  period ends. If this leaves an amount actively bonded less than
   *  T::Currency::minimum_balance(), then it is increased to the full amount.
   * 
   *  Once the unlock period is done, you can call `withdraw_unbonded` to actually move
   *  the funds out of management ready for transfer.
   * 
   *  No more than a limited number of unlocking chunks (see `MAX_UNLOCKING_CHUNKS`)
   *  can co-exists at the same time. In that case, [`Call::withdraw_unbonded`] need
   *  to be called first to remove some of the chunks (if possible).
   * 
   *  The dispatch origin for this call must be _Signed_ by the controller, not the stash.
   * 
   *  See also [`Call::withdraw_unbonded`].
   * 
   *  # <weight>
   *  - Independent of the arguments. Limited but potentially exploitable complexity.
   *  - Contains a limited number of reads.
   *  - Each call (requires the remainder of the bonded balance to be above `minimum_balance`)
   *    will cause a new entry to be inserted into a vector (`Ledger.unlocking`) kept in storage.
   *    The only way to clean the aforementioned storage item is also user-controlled via `withdraw_unbonded`.
   *  - One DB entry.
   *  </weight>
   */
  get asV1020(): {value: bigint} {
    assert(this.isV1020)
    return this._chain.decodeCall(this.call)
  }
}

export class StakingValidateCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Staking.validate')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   *  Declare the desire to validate for the origin controller.
   * 
   *  Effects will be felt at the beginning of the next era.
   * 
   *  The dispatch origin for this call must be _Signed_ by the controller, not the stash.
   * 
   *  # <weight>
   *  - Independent of the arguments. Insignificant complexity.
   *  - Contains a limited number of reads.
   *  - Writes are limited to the `origin` account key.
   *  # </weight>
   */
  get isV1020(): boolean {
    return this._chain.getCallHash('Staking.validate') === 'a03cfe73ae98f87de904386556fc6e78943abbd5d595884756c4155f8694e080'
  }

  /**
   *  Declare the desire to validate for the origin controller.
   * 
   *  Effects will be felt at the beginning of the next era.
   * 
   *  The dispatch origin for this call must be _Signed_ by the controller, not the stash.
   * 
   *  # <weight>
   *  - Independent of the arguments. Insignificant complexity.
   *  - Contains a limited number of reads.
   *  - Writes are limited to the `origin` account key.
   *  # </weight>
   */
  get asV1020(): {prefs: v1020.ValidatorPrefs} {
    assert(this.isV1020)
    return this._chain.decodeCall(this.call)
  }

  /**
   *  Declare the desire to validate for the origin controller.
   * 
   *  Effects will be felt at the beginning of the next era.
   * 
   *  The dispatch origin for this call must be _Signed_ by the controller, not the stash.
   *  And, it can be only called when [`EraElectionStatus`] is `Closed`.
   * 
   *  # <weight>
   *  - Independent of the arguments. Insignificant complexity.
   *  - Contains a limited number of reads.
   *  - Writes are limited to the `origin` account key.
   *  -----------
   *  Weight: O(1)
   *  DB Weight:
   *  - Read: Era Election Status, Ledger
   *  - Write: Nominators, Validators
   *  # </weight>
   */
  get isV2028(): boolean {
    return this._chain.getCallHash('Staking.validate') === '2a662df491d449985438edd4d2e6899fd06beebbaa59e759713811ade38308bf'
  }

  /**
   *  Declare the desire to validate for the origin controller.
   * 
   *  Effects will be felt at the beginning of the next era.
   * 
   *  The dispatch origin for this call must be _Signed_ by the controller, not the stash.
   *  And, it can be only called when [`EraElectionStatus`] is `Closed`.
   * 
   *  # <weight>
   *  - Independent of the arguments. Insignificant complexity.
   *  - Contains a limited number of reads.
   *  - Writes are limited to the `origin` account key.
   *  -----------
   *  Weight: O(1)
   *  DB Weight:
   *  - Read: Era Election Status, Ledger
   *  - Write: Nominators, Validators
   *  # </weight>
   */
  get asV2028(): {prefs: v2028.ValidatorPrefs} {
    assert(this.isV2028)
    return this._chain.decodeCall(this.call)
  }
}

export class SystemRemarkCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'System.remark')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   *  Make some on-chain remark.
   */
  get isV1020(): boolean {
    return this._chain.getCallHash('System.remark') === 'f4e9b5b7572eeae92978087ece9b4f57cb5cab4f16baf5625bb9ec4a432bad63'
  }

  /**
   *  Make some on-chain remark.
   */
  get asV1020(): {remark: Uint8Array} {
    assert(this.isV1020)
    return this._chain.decodeCall(this.call)
  }
}

export class XcmPalletReserveTransferAssetsCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'XcmPallet.reserve_transfer_assets')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   *  Transfer some assets from the local chain to the sovereign account of a destination chain and forward
   *  a notification XCM.
   * 
   *  - `origin`: Must be capable of withdrawing the `assets` and executing XCM.
   *  - `dest`: Destination context for the assets. Will typically be `X2(Parent, Parachain(..))` to send
   *    from parachain to parachain, or `X1(Parachain(..))` to send from relay to parachain.
   *  - `beneficiary`: A beneficiary location for the assets in the context of `dest`. Will generally be
   *    an `AccountId32` value.
   *  - `assets`: The assets to be withdrawn. This should include the assets used to pay the fee on the
   *    `dest` side.
   *  - `dest_weight`: Equal to the total weight on `dest` of the XCM message
   *    `ReserveAssetDeposit { assets, effects: [ BuyExecution{..}, DepositAsset{..} ] }`.
   */
  get isV9030(): boolean {
    return this._chain.getCallHash('XcmPallet.reserve_transfer_assets') === '3c069703413ed53ed30061e5da3bc55ab8fa9032fc014ba18afc7afe32930ebd'
  }

  /**
   *  Transfer some assets from the local chain to the sovereign account of a destination chain and forward
   *  a notification XCM.
   * 
   *  - `origin`: Must be capable of withdrawing the `assets` and executing XCM.
   *  - `dest`: Destination context for the assets. Will typically be `X2(Parent, Parachain(..))` to send
   *    from parachain to parachain, or `X1(Parachain(..))` to send from relay to parachain.
   *  - `beneficiary`: A beneficiary location for the assets in the context of `dest`. Will generally be
   *    an `AccountId32` value.
   *  - `assets`: The assets to be withdrawn. This should include the assets used to pay the fee on the
   *    `dest` side.
   *  - `dest_weight`: Equal to the total weight on `dest` of the XCM message
   *    `ReserveAssetDeposit { assets, effects: [ BuyExecution{..}, DepositAsset{..} ] }`.
   */
  get asV9030(): {dest: v9030.MultiLocation, beneficiary: v9030.MultiLocation, assets: v9030.MultiAsset[], destWeight: bigint} {
    assert(this.isV9030)
    return this._chain.decodeCall(this.call)
  }

  /**
   *  Transfer some assets from the local chain to the sovereign account of a destination chain and forward
   *  a notification XCM.
   * 
   *  Fee payment on the destination side is made from the first asset listed in the `assets` vector.
   * 
   *  - `origin`: Must be capable of withdrawing the `assets` and executing XCM.
   *  - `dest`: Destination context for the assets. Will typically be `X2(Parent, Parachain(..))` to send
   *    from parachain to parachain, or `X1(Parachain(..))` to send from relay to parachain.
   *  - `beneficiary`: A beneficiary location for the assets in the context of `dest`. Will generally be
   *    an `AccountId32` value.
   *  - `assets`: The assets to be withdrawn. This should include the assets used to pay the fee on the
   *    `dest` side.
   *  - `dest_weight`: Equal to the total weight on `dest` of the XCM message
   *    `ReserveAssetDeposited { assets, effects: [ BuyExecution{..}, DepositAsset{..} ] }`.
   */
  get isV9100(): boolean {
    return this._chain.getCallHash('XcmPallet.reserve_transfer_assets') === 'c4558a18f0400069c14aaa3575bad0bb84b99ac94f206e8ab02890276f174ff4'
  }

  /**
   *  Transfer some assets from the local chain to the sovereign account of a destination chain and forward
   *  a notification XCM.
   * 
   *  Fee payment on the destination side is made from the first asset listed in the `assets` vector.
   * 
   *  - `origin`: Must be capable of withdrawing the `assets` and executing XCM.
   *  - `dest`: Destination context for the assets. Will typically be `X2(Parent, Parachain(..))` to send
   *    from parachain to parachain, or `X1(Parachain(..))` to send from relay to parachain.
   *  - `beneficiary`: A beneficiary location for the assets in the context of `dest`. Will generally be
   *    an `AccountId32` value.
   *  - `assets`: The assets to be withdrawn. This should include the assets used to pay the fee on the
   *    `dest` side.
   *  - `dest_weight`: Equal to the total weight on `dest` of the XCM message
   *    `ReserveAssetDeposited { assets, effects: [ BuyExecution{..}, DepositAsset{..} ] }`.
   */
  get asV9100(): {dest: v9100.VersionedMultiLocation, beneficiary: v9100.VersionedMultiLocation, assets: v9100.VersionedMultiAssets, feeAssetItem: number, destWeight: bigint} {
    assert(this.isV9100)
    return this._chain.decodeCall(this.call)
  }

  /**
   * Transfer some assets from the local chain to the sovereign account of a destination chain and forward
   * a notification XCM.
   * 
   * Fee payment on the destination side is made from the first asset listed in the `assets` vector.
   * 
   * - `origin`: Must be capable of withdrawing the `assets` and executing XCM.
   * - `dest`: Destination context for the assets. Will typically be `X2(Parent, Parachain(..))` to send
   *   from parachain to parachain, or `X1(Parachain(..))` to send from relay to parachain.
   * - `beneficiary`: A beneficiary location for the assets in the context of `dest`. Will generally be
   *   an `AccountId32` value.
   * - `assets`: The assets to be withdrawn. This should include the assets used to pay the fee on the
   *   `dest` side.
   * - `fee_asset_item`: The index into `assets` of the item which should be used to pay
   *   fees.
   */
  get isV9111(): boolean {
    return this._chain.getCallHash('XcmPallet.reserve_transfer_assets') === '123b8170fa49ede01f38623e457f4e4d417c90cff5b93ced45a9eb8fe8e6ca2e'
  }

  /**
   * Transfer some assets from the local chain to the sovereign account of a destination chain and forward
   * a notification XCM.
   * 
   * Fee payment on the destination side is made from the first asset listed in the `assets` vector.
   * 
   * - `origin`: Must be capable of withdrawing the `assets` and executing XCM.
   * - `dest`: Destination context for the assets. Will typically be `X2(Parent, Parachain(..))` to send
   *   from parachain to parachain, or `X1(Parachain(..))` to send from relay to parachain.
   * - `beneficiary`: A beneficiary location for the assets in the context of `dest`. Will generally be
   *   an `AccountId32` value.
   * - `assets`: The assets to be withdrawn. This should include the assets used to pay the fee on the
   *   `dest` side.
   * - `fee_asset_item`: The index into `assets` of the item which should be used to pay
   *   fees.
   */
  get asV9111(): {dest: v9111.VersionedMultiLocation, beneficiary: v9111.VersionedMultiLocation, assets: v9111.VersionedMultiAssets, feeAssetItem: number} {
    assert(this.isV9111)
    return this._chain.decodeCall(this.call)
  }
}

export class XcmPalletTeleportAssetsCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'XcmPallet.teleport_assets')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   *  Teleport some assets from the local chain to some destination chain.
   * 
   *  - `origin`: Must be capable of withdrawing the `assets` and executing XCM.
   *  - `dest`: Destination context for the assets. Will typically be `X2(Parent, Parachain(..))` to send
   *    from parachain to parachain, or `X1(Parachain(..))` to send from relay to parachain.
   *  - `beneficiary`: A beneficiary location for the assets in the context of `dest`. Will generally be
   *    an `AccountId32` value.
   *  - `assets`: The assets to be withdrawn. This should include the assets used to pay the fee on the
   *    `dest` side.
   *  - `dest_weight`: Equal to the total weight on `dest` of the XCM message
   *    `Teleport { assets, effects: [ BuyExecution{..}, DepositAsset{..} ] }`.
   */
  get isV9010(): boolean {
    return this._chain.getCallHash('XcmPallet.teleport_assets') === '3c069703413ed53ed30061e5da3bc55ab8fa9032fc014ba18afc7afe32930ebd'
  }

  /**
   *  Teleport some assets from the local chain to some destination chain.
   * 
   *  - `origin`: Must be capable of withdrawing the `assets` and executing XCM.
   *  - `dest`: Destination context for the assets. Will typically be `X2(Parent, Parachain(..))` to send
   *    from parachain to parachain, or `X1(Parachain(..))` to send from relay to parachain.
   *  - `beneficiary`: A beneficiary location for the assets in the context of `dest`. Will generally be
   *    an `AccountId32` value.
   *  - `assets`: The assets to be withdrawn. This should include the assets used to pay the fee on the
   *    `dest` side.
   *  - `dest_weight`: Equal to the total weight on `dest` of the XCM message
   *    `Teleport { assets, effects: [ BuyExecution{..}, DepositAsset{..} ] }`.
   */
  get asV9010(): {dest: v9010.MultiLocation, beneficiary: v9010.MultiLocation, assets: v9010.MultiAsset[], destWeight: bigint} {
    assert(this.isV9010)
    return this._chain.decodeCall(this.call)
  }

  /**
   *  Teleport some assets from the local chain to some destination chain.
   * 
   *  Fee payment on the destination side is made from the first asset listed in the `assets` vector.
   * 
   *  - `origin`: Must be capable of withdrawing the `assets` and executing XCM.
   *  - `dest`: Destination context for the assets. Will typically be `X2(Parent, Parachain(..))` to send
   *    from parachain to parachain, or `X1(Parachain(..))` to send from relay to parachain.
   *  - `beneficiary`: A beneficiary location for the assets in the context of `dest`. Will generally be
   *    an `AccountId32` value.
   *  - `assets`: The assets to be withdrawn. The first item should be the currency used to to pay the fee on the
   *    `dest` side. May not be empty.
   *  - `dest_weight`: Equal to the total weight on `dest` of the XCM message
   *    `Teleport { assets, effects: [ BuyExecution{..}, DepositAsset{..} ] }`.
   */
  get isV9100(): boolean {
    return this._chain.getCallHash('XcmPallet.teleport_assets') === 'c4558a18f0400069c14aaa3575bad0bb84b99ac94f206e8ab02890276f174ff4'
  }

  /**
   *  Teleport some assets from the local chain to some destination chain.
   * 
   *  Fee payment on the destination side is made from the first asset listed in the `assets` vector.
   * 
   *  - `origin`: Must be capable of withdrawing the `assets` and executing XCM.
   *  - `dest`: Destination context for the assets. Will typically be `X2(Parent, Parachain(..))` to send
   *    from parachain to parachain, or `X1(Parachain(..))` to send from relay to parachain.
   *  - `beneficiary`: A beneficiary location for the assets in the context of `dest`. Will generally be
   *    an `AccountId32` value.
   *  - `assets`: The assets to be withdrawn. The first item should be the currency used to to pay the fee on the
   *    `dest` side. May not be empty.
   *  - `dest_weight`: Equal to the total weight on `dest` of the XCM message
   *    `Teleport { assets, effects: [ BuyExecution{..}, DepositAsset{..} ] }`.
   */
  get asV9100(): {dest: v9100.VersionedMultiLocation, beneficiary: v9100.VersionedMultiLocation, assets: v9100.VersionedMultiAssets, feeAssetItem: number, destWeight: bigint} {
    assert(this.isV9100)
    return this._chain.decodeCall(this.call)
  }

  /**
   * Teleport some assets from the local chain to some destination chain.
   * 
   * Fee payment on the destination side is made from the first asset listed in the `assets` vector.
   * 
   * - `origin`: Must be capable of withdrawing the `assets` and executing XCM.
   * - `dest`: Destination context for the assets. Will typically be `X2(Parent, Parachain(..))` to send
   *   from parachain to parachain, or `X1(Parachain(..))` to send from relay to parachain.
   * - `beneficiary`: A beneficiary location for the assets in the context of `dest`. Will generally be
   *   an `AccountId32` value.
   * - `assets`: The assets to be withdrawn. The first item should be the currency used to to pay the fee on the
   *   `dest` side. May not be empty.
   * - `dest_weight`: Equal to the total weight on `dest` of the XCM message
   *   `Teleport { assets, effects: [ BuyExecution{..}, DepositAsset{..} ] }`.
   */
  get isV9111(): boolean {
    return this._chain.getCallHash('XcmPallet.teleport_assets') === '123b8170fa49ede01f38623e457f4e4d417c90cff5b93ced45a9eb8fe8e6ca2e'
  }

  /**
   * Teleport some assets from the local chain to some destination chain.
   * 
   * Fee payment on the destination side is made from the first asset listed in the `assets` vector.
   * 
   * - `origin`: Must be capable of withdrawing the `assets` and executing XCM.
   * - `dest`: Destination context for the assets. Will typically be `X2(Parent, Parachain(..))` to send
   *   from parachain to parachain, or `X1(Parachain(..))` to send from relay to parachain.
   * - `beneficiary`: A beneficiary location for the assets in the context of `dest`. Will generally be
   *   an `AccountId32` value.
   * - `assets`: The assets to be withdrawn. The first item should be the currency used to to pay the fee on the
   *   `dest` side. May not be empty.
   * - `dest_weight`: Equal to the total weight on `dest` of the XCM message
   *   `Teleport { assets, effects: [ BuyExecution{..}, DepositAsset{..} ] }`.
   */
  get asV9111(): {dest: v9111.VersionedMultiLocation, beneficiary: v9111.VersionedMultiLocation, assets: v9111.VersionedMultiAssets, feeAssetItem: number} {
    assert(this.isV9111)
    return this._chain.decodeCall(this.call)
  }
}
