import type {Result, Option} from './support'

export type MultiAddress = MultiAddress_Id | MultiAddress_Index | MultiAddress_Raw | MultiAddress_Address32 | MultiAddress_Address20

export interface MultiAddress_Id {
  __kind: 'Id'
  value: Uint8Array
}

export interface MultiAddress_Index {
  __kind: 'Index'
  value: null
}

export interface MultiAddress_Raw {
  __kind: 'Raw'
  value: Uint8Array
}

export interface MultiAddress_Address32 {
  __kind: 'Address32'
  value: Uint8Array
}

export interface MultiAddress_Address20 {
  __kind: 'Address20'
  value: Uint8Array
}

export type RewardDestination = RewardDestination_Staked | RewardDestination_Stash | RewardDestination_Controller | RewardDestination_Account | RewardDestination_None

export interface RewardDestination_Staked {
  __kind: 'Staked'
}

export interface RewardDestination_Stash {
  __kind: 'Stash'
}

export interface RewardDestination_Controller {
  __kind: 'Controller'
}

export interface RewardDestination_Account {
  __kind: 'Account'
  value: Uint8Array
}

export interface RewardDestination_None {
  __kind: 'None'
}

export type VersionedMultiLocation = VersionedMultiLocation_V0 | VersionedMultiLocation_V1

export interface VersionedMultiLocation_V0 {
  __kind: 'V0'
  value: V0MultiLocation
}

export interface VersionedMultiLocation_V1 {
  __kind: 'V1'
  value: V1MultiLocation
}

export type VersionedMultiAssets = VersionedMultiAssets_V0 | VersionedMultiAssets_V1

export interface VersionedMultiAssets_V0 {
  __kind: 'V0'
  value: V0MultiAsset[]
}

export interface VersionedMultiAssets_V1 {
  __kind: 'V1'
  value: V1MultiAsset[]
}

export type V0MultiLocation = V0MultiLocation_Null | V0MultiLocation_X1 | V0MultiLocation_X2 | V0MultiLocation_X3 | V0MultiLocation_X4 | V0MultiLocation_X5 | V0MultiLocation_X6 | V0MultiLocation_X7 | V0MultiLocation_X8

export interface V0MultiLocation_Null {
  __kind: 'Null'
}

export interface V0MultiLocation_X1 {
  __kind: 'X1'
  value: V0Junction
}

export interface V0MultiLocation_X2 {
  __kind: 'X2'
  value: [V0Junction, V0Junction]
}

export interface V0MultiLocation_X3 {
  __kind: 'X3'
  value: [V0Junction, V0Junction, V0Junction]
}

export interface V0MultiLocation_X4 {
  __kind: 'X4'
  value: [V0Junction, V0Junction, V0Junction, V0Junction]
}

export interface V0MultiLocation_X5 {
  __kind: 'X5'
  value: [V0Junction, V0Junction, V0Junction, V0Junction, V0Junction]
}

export interface V0MultiLocation_X6 {
  __kind: 'X6'
  value: [V0Junction, V0Junction, V0Junction, V0Junction, V0Junction, V0Junction]
}

export interface V0MultiLocation_X7 {
  __kind: 'X7'
  value: [V0Junction, V0Junction, V0Junction, V0Junction, V0Junction, V0Junction, V0Junction]
}

export interface V0MultiLocation_X8 {
  __kind: 'X8'
  value: [V0Junction, V0Junction, V0Junction, V0Junction, V0Junction, V0Junction, V0Junction, V0Junction]
}

export interface V1MultiLocation {
  parents: number
  interior: V1Junctions
}

export type V0MultiAsset = V0MultiAsset_None | V0MultiAsset_All | V0MultiAsset_AllFungible | V0MultiAsset_AllNonFungible | V0MultiAsset_AllAbstractFungible | V0MultiAsset_AllAbstractNonFungible | V0MultiAsset_AllConcreteFungible | V0MultiAsset_AllConcreteNonFungible | V0MultiAsset_AbstractFungible | V0MultiAsset_AbstractNonFungible | V0MultiAsset_ConcreteFungible | V0MultiAsset_ConcreteNonFungible

export interface V0MultiAsset_None {
  __kind: 'None'
}

export interface V0MultiAsset_All {
  __kind: 'All'
}

export interface V0MultiAsset_AllFungible {
  __kind: 'AllFungible'
}

export interface V0MultiAsset_AllNonFungible {
  __kind: 'AllNonFungible'
}

export interface V0MultiAsset_AllAbstractFungible {
  __kind: 'AllAbstractFungible'
  id: Uint8Array
}

export interface V0MultiAsset_AllAbstractNonFungible {
  __kind: 'AllAbstractNonFungible'
  class: Uint8Array
}

export interface V0MultiAsset_AllConcreteFungible {
  __kind: 'AllConcreteFungible'
  id: V0MultiLocation
}

export interface V0MultiAsset_AllConcreteNonFungible {
  __kind: 'AllConcreteNonFungible'
  class: V0MultiLocation
}

export interface V0MultiAsset_AbstractFungible {
  __kind: 'AbstractFungible'
  id: Uint8Array
  amount: bigint
}

export interface V0MultiAsset_AbstractNonFungible {
  __kind: 'AbstractNonFungible'
  class: Uint8Array
  instance: V1AssetInstance
}

export interface V0MultiAsset_ConcreteFungible {
  __kind: 'ConcreteFungible'
  id: V0MultiLocation
  amount: bigint
}

export interface V0MultiAsset_ConcreteNonFungible {
  __kind: 'ConcreteNonFungible'
  class: V0MultiLocation
  instance: V1AssetInstance
}

export interface V1MultiAsset {
  id: V1AssetId
  fun: V1Fungibility
}

export type V0Junction = V0Junction_Parent | V0Junction_Parachain | V0Junction_AccountId32 | V0Junction_AccountIndex64 | V0Junction_AccountKey20 | V0Junction_PalletInstance | V0Junction_GeneralIndex | V0Junction_GeneralKey | V0Junction_OnlyChild | V0Junction_Plurality

export interface V0Junction_Parent {
  __kind: 'Parent'
}

export interface V0Junction_Parachain {
  __kind: 'Parachain'
  value: number
}

export interface V0Junction_AccountId32 {
  __kind: 'AccountId32'
  network: V0NetworkId
  id: Uint8Array
}

export interface V0Junction_AccountIndex64 {
  __kind: 'AccountIndex64'
  network: V0NetworkId
  index: bigint
}

export interface V0Junction_AccountKey20 {
  __kind: 'AccountKey20'
  network: V0NetworkId
  key: Uint8Array
}

export interface V0Junction_PalletInstance {
  __kind: 'PalletInstance'
  value: number
}

export interface V0Junction_GeneralIndex {
  __kind: 'GeneralIndex'
  value: bigint
}

export interface V0Junction_GeneralKey {
  __kind: 'GeneralKey'
  value: Uint8Array
}

export interface V0Junction_OnlyChild {
  __kind: 'OnlyChild'
}

export interface V0Junction_Plurality {
  __kind: 'Plurality'
  id: V0BodyId
  part: V0BodyPart
}

export type V1Junctions = V1Junctions_Here | V1Junctions_X1 | V1Junctions_X2 | V1Junctions_X3 | V1Junctions_X4 | V1Junctions_X5 | V1Junctions_X6 | V1Junctions_X7 | V1Junctions_X8

export interface V1Junctions_Here {
  __kind: 'Here'
}

export interface V1Junctions_X1 {
  __kind: 'X1'
  value: V1Junction
}

export interface V1Junctions_X2 {
  __kind: 'X2'
  value: [V1Junction, V1Junction]
}

export interface V1Junctions_X3 {
  __kind: 'X3'
  value: [V1Junction, V1Junction, V1Junction]
}

export interface V1Junctions_X4 {
  __kind: 'X4'
  value: [V1Junction, V1Junction, V1Junction, V1Junction]
}

export interface V1Junctions_X5 {
  __kind: 'X5'
  value: [V1Junction, V1Junction, V1Junction, V1Junction, V1Junction]
}

export interface V1Junctions_X6 {
  __kind: 'X6'
  value: [V1Junction, V1Junction, V1Junction, V1Junction, V1Junction, V1Junction]
}

export interface V1Junctions_X7 {
  __kind: 'X7'
  value: [V1Junction, V1Junction, V1Junction, V1Junction, V1Junction, V1Junction, V1Junction]
}

export interface V1Junctions_X8 {
  __kind: 'X8'
  value: [V1Junction, V1Junction, V1Junction, V1Junction, V1Junction, V1Junction, V1Junction, V1Junction]
}

export type V1AssetInstance = V1AssetInstance_Undefined | V1AssetInstance_Index | V1AssetInstance_Array4 | V1AssetInstance_Array8 | V1AssetInstance_Array16 | V1AssetInstance_Array32 | V1AssetInstance_Blob

export interface V1AssetInstance_Undefined {
  __kind: 'Undefined'
}

export interface V1AssetInstance_Index {
  __kind: 'Index'
  value: bigint
}

export interface V1AssetInstance_Array4 {
  __kind: 'Array4'
  value: Uint8Array
}

export interface V1AssetInstance_Array8 {
  __kind: 'Array8'
  value: Uint8Array
}

export interface V1AssetInstance_Array16 {
  __kind: 'Array16'
  value: Uint8Array
}

export interface V1AssetInstance_Array32 {
  __kind: 'Array32'
  value: Uint8Array
}

export interface V1AssetInstance_Blob {
  __kind: 'Blob'
  value: Uint8Array
}

export type V1AssetId = V1AssetId_Concrete | V1AssetId_Abstract

export interface V1AssetId_Concrete {
  __kind: 'Concrete'
  value: V1MultiLocation
}

export interface V1AssetId_Abstract {
  __kind: 'Abstract'
  value: Uint8Array
}

export type V1Fungibility = V1Fungibility_Fungible | V1Fungibility_NonFungible

export interface V1Fungibility_Fungible {
  __kind: 'Fungible'
  value: bigint
}

export interface V1Fungibility_NonFungible {
  __kind: 'NonFungible'
  value: V1AssetInstance
}

export type V0NetworkId = V0NetworkId_Any | V0NetworkId_Named | V0NetworkId_Polkadot | V0NetworkId_Kusama

export interface V0NetworkId_Any {
  __kind: 'Any'
}

export interface V0NetworkId_Named {
  __kind: 'Named'
  value: Uint8Array
}

export interface V0NetworkId_Polkadot {
  __kind: 'Polkadot'
}

export interface V0NetworkId_Kusama {
  __kind: 'Kusama'
}

export type V0BodyId = V0BodyId_Unit | V0BodyId_Named | V0BodyId_Index | V0BodyId_Executive | V0BodyId_Technical | V0BodyId_Legislative | V0BodyId_Judicial

export interface V0BodyId_Unit {
  __kind: 'Unit'
}

export interface V0BodyId_Named {
  __kind: 'Named'
  value: Uint8Array
}

export interface V0BodyId_Index {
  __kind: 'Index'
  value: number
}

export interface V0BodyId_Executive {
  __kind: 'Executive'
}

export interface V0BodyId_Technical {
  __kind: 'Technical'
}

export interface V0BodyId_Legislative {
  __kind: 'Legislative'
}

export interface V0BodyId_Judicial {
  __kind: 'Judicial'
}

export type V0BodyPart = V0BodyPart_Voice | V0BodyPart_Members | V0BodyPart_Fraction | V0BodyPart_AtLeastProportion | V0BodyPart_MoreThanProportion

export interface V0BodyPart_Voice {
  __kind: 'Voice'
}

export interface V0BodyPart_Members {
  __kind: 'Members'
  count: number
}

export interface V0BodyPart_Fraction {
  __kind: 'Fraction'
  nom: number
  denom: number
}

export interface V0BodyPart_AtLeastProportion {
  __kind: 'AtLeastProportion'
  nom: number
  denom: number
}

export interface V0BodyPart_MoreThanProportion {
  __kind: 'MoreThanProportion'
  nom: number
  denom: number
}

export type V1Junction = V1Junction_Parachain | V1Junction_AccountId32 | V1Junction_AccountIndex64 | V1Junction_AccountKey20 | V1Junction_PalletInstance | V1Junction_GeneralIndex | V1Junction_GeneralKey | V1Junction_OnlyChild | V1Junction_Plurality

export interface V1Junction_Parachain {
  __kind: 'Parachain'
  value: number
}

export interface V1Junction_AccountId32 {
  __kind: 'AccountId32'
  network: V0NetworkId
  id: Uint8Array
}

export interface V1Junction_AccountIndex64 {
  __kind: 'AccountIndex64'
  network: V0NetworkId
  index: bigint
}

export interface V1Junction_AccountKey20 {
  __kind: 'AccountKey20'
  network: V0NetworkId
  key: Uint8Array
}

export interface V1Junction_PalletInstance {
  __kind: 'PalletInstance'
  value: number
}

export interface V1Junction_GeneralIndex {
  __kind: 'GeneralIndex'
  value: bigint
}

export interface V1Junction_GeneralKey {
  __kind: 'GeneralKey'
  value: Uint8Array
}

export interface V1Junction_OnlyChild {
  __kind: 'OnlyChild'
}

export interface V1Junction_Plurality {
  __kind: 'Plurality'
  id: V0BodyId
  part: V0BodyPart
}
