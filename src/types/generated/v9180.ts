import type {Result, Option} from './support'

export interface FundInfo {
  depositor: Uint8Array
  verifier: (MultiSigner | undefined)
  deposit: bigint
  raised: bigint
  end: number
  cap: bigint
  lastContribution: LastContribution
  firstPeriod: number
  lastPeriod: number
  fundIndex: number
}

export type MultiSigner = MultiSigner_Ed25519 | MultiSigner_Sr25519 | MultiSigner_Ecdsa

export interface MultiSigner_Ed25519 {
  __kind: 'Ed25519'
  value: Uint8Array
}

export interface MultiSigner_Sr25519 {
  __kind: 'Sr25519'
  value: Uint8Array
}

export interface MultiSigner_Ecdsa {
  __kind: 'Ecdsa'
  value: Uint8Array
}

export type LastContribution = LastContribution_Never | LastContribution_PreEnding | LastContribution_Ending

export interface LastContribution_Never {
  __kind: 'Never'
}

export interface LastContribution_PreEnding {
  __kind: 'PreEnding'
  value: number
}

export interface LastContribution_Ending {
  __kind: 'Ending'
  value: number
}
