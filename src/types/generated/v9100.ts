import type {Result, Option} from './support'

export type VersionedMultiLocation = VersionedMultiLocation_V0 | VersionedMultiLocation_V1 | VersionedMultiLocation_V2

export interface VersionedMultiLocation_V0 {
  __kind: 'V0'
  value: MultiLocationV0
}

export interface VersionedMultiLocation_V1 {
  __kind: 'V1'
  value: MultiLocationV1
}

export interface VersionedMultiLocation_V2 {
  __kind: 'V2'
  value: MultiLocationV2
}

export type VersionedMultiAssets = VersionedMultiAssets_V0 | VersionedMultiAssets_V1 | VersionedMultiAssets_V2

export interface VersionedMultiAssets_V0 {
  __kind: 'V0'
  value: MultiAssetV0[]
}

export interface VersionedMultiAssets_V1 {
  __kind: 'V1'
  value: MultiAssetV1[]
}

export interface VersionedMultiAssets_V2 {
  __kind: 'V2'
  value: MultiAssetV1[]
}

export type MultiLocationV0 = MultiLocationV0_Here | MultiLocationV0_X1 | MultiLocationV0_X2 | MultiLocationV0_X3 | MultiLocationV0_X4 | MultiLocationV0_X5 | MultiLocationV0_X6 | MultiLocationV0_X7 | MultiLocationV0_X8

export interface MultiLocationV0_Here {
  __kind: 'Here'
}

export interface MultiLocationV0_X1 {
  __kind: 'X1'
  value: JunctionV0
}

export interface MultiLocationV0_X2 {
  __kind: 'X2'
  value: [JunctionV0, JunctionV0]
}

export interface MultiLocationV0_X3 {
  __kind: 'X3'
  value: [JunctionV0, JunctionV0, JunctionV0]
}

export interface MultiLocationV0_X4 {
  __kind: 'X4'
  value: [JunctionV0, JunctionV0, JunctionV0, JunctionV0]
}

export interface MultiLocationV0_X5 {
  __kind: 'X5'
  value: [JunctionV0, JunctionV0, JunctionV0, JunctionV0, JunctionV0]
}

export interface MultiLocationV0_X6 {
  __kind: 'X6'
  value: [JunctionV0, JunctionV0, JunctionV0, JunctionV0, JunctionV0, JunctionV0]
}

export interface MultiLocationV0_X7 {
  __kind: 'X7'
  value: [JunctionV0, JunctionV0, JunctionV0, JunctionV0, JunctionV0, JunctionV0, JunctionV0]
}

export interface MultiLocationV0_X8 {
  __kind: 'X8'
  value: [JunctionV0, JunctionV0, JunctionV0, JunctionV0, JunctionV0, JunctionV0, JunctionV0, JunctionV0]
}

export interface MultiLocationV1 {
  parents: number
  interior: JunctionsV1
}

export interface MultiLocationV2 {
  parents: number
  interior: JunctionsV1
}

export type MultiAssetV0 = MultiAssetV0_None | MultiAssetV0_All | MultiAssetV0_AllFungible | MultiAssetV0_AllNonFungible | MultiAssetV0_AllAbstractFungible | MultiAssetV0_AllAbstractNonFungible | MultiAssetV0_AllConcreteFungible | MultiAssetV0_AllConcreteNonFungible | MultiAssetV0_AbstractFungible | MultiAssetV0_AbstractNonFungible | MultiAssetV0_ConcreteFungible | MultiAssetV0_ConcreteNonFungible

export interface MultiAssetV0_None {
  __kind: 'None'
}

export interface MultiAssetV0_All {
  __kind: 'All'
}

export interface MultiAssetV0_AllFungible {
  __kind: 'AllFungible'
}

export interface MultiAssetV0_AllNonFungible {
  __kind: 'AllNonFungible'
}

export interface MultiAssetV0_AllAbstractFungible {
  __kind: 'AllAbstractFungible'
  value: Uint8Array
}

export interface MultiAssetV0_AllAbstractNonFungible {
  __kind: 'AllAbstractNonFungible'
  value: Uint8Array
}

export interface MultiAssetV0_AllConcreteFungible {
  __kind: 'AllConcreteFungible'
  value: MultiLocationV0
}

export interface MultiAssetV0_AllConcreteNonFungible {
  __kind: 'AllConcreteNonFungible'
  value: MultiLocationV0
}

export interface MultiAssetV0_AbstractFungible {
  __kind: 'AbstractFungible'
  id: Uint8Array
  instance: bigint
}

export interface MultiAssetV0_AbstractNonFungible {
  __kind: 'AbstractNonFungible'
  class: Uint8Array
  instance: AssetInstanceV0
}

export interface MultiAssetV0_ConcreteFungible {
  __kind: 'ConcreteFungible'
  id: MultiLocationV0
  amount: bigint
}

export interface MultiAssetV0_ConcreteNonFungible {
  __kind: 'ConcreteNonFungible'
  class: MultiLocationV0
  instance: AssetInstanceV0
}

export interface MultiAssetV1 {
  id: XcmAssetId
  fungibility: FungibilityV1
}

export type JunctionV0 = JunctionV0_Parent | JunctionV0_Parachain | JunctionV0_AccountId32 | JunctionV0_AccountIndex64 | JunctionV0_AccountKey20 | JunctionV0_PalletInstance | JunctionV0_GeneralIndex | JunctionV0_GeneralKey | JunctionV0_OnlyChild | JunctionV0_Plurality

export interface JunctionV0_Parent {
  __kind: 'Parent'
}

export interface JunctionV0_Parachain {
  __kind: 'Parachain'
  value: number
}

export interface JunctionV0_AccountId32 {
  __kind: 'AccountId32'
  network: NetworkId
  id: Uint8Array
}

export interface JunctionV0_AccountIndex64 {
  __kind: 'AccountIndex64'
  network: NetworkId
  index: bigint
}

export interface JunctionV0_AccountKey20 {
  __kind: 'AccountKey20'
  network: NetworkId
  key: Uint8Array
}

export interface JunctionV0_PalletInstance {
  __kind: 'PalletInstance'
  value: number
}

export interface JunctionV0_GeneralIndex {
  __kind: 'GeneralIndex'
  value: bigint
}

export interface JunctionV0_GeneralKey {
  __kind: 'GeneralKey'
  value: Uint8Array
}

export interface JunctionV0_OnlyChild {
  __kind: 'OnlyChild'
}

export interface JunctionV0_Plurality {
  __kind: 'Plurality'
  id: BodyId
  part: BodyPart
}

export type JunctionsV1 = JunctionsV1_Here | JunctionsV1_X1 | JunctionsV1_X2 | JunctionsV1_X3 | JunctionsV1_X4 | JunctionsV1_X5 | JunctionsV1_X6 | JunctionsV1_X7 | JunctionsV1_X8

export interface JunctionsV1_Here {
  __kind: 'Here'
}

export interface JunctionsV1_X1 {
  __kind: 'X1'
  value: JunctionV1
}

export interface JunctionsV1_X2 {
  __kind: 'X2'
  value: [JunctionV1, JunctionV1]
}

export interface JunctionsV1_X3 {
  __kind: 'X3'
  value: [JunctionV1, JunctionV1, JunctionV1]
}

export interface JunctionsV1_X4 {
  __kind: 'X4'
  value: [JunctionV1, JunctionV1, JunctionV1, JunctionV1]
}

export interface JunctionsV1_X5 {
  __kind: 'X5'
  value: [JunctionV1, JunctionV1, JunctionV1, JunctionV1, JunctionV1]
}

export interface JunctionsV1_X6 {
  __kind: 'X6'
  value: [JunctionV1, JunctionV1, JunctionV1, JunctionV1, JunctionV1, JunctionV1]
}

export interface JunctionsV1_X7 {
  __kind: 'X7'
  value: [JunctionV1, JunctionV1, JunctionV1, JunctionV1, JunctionV1, JunctionV1, JunctionV1]
}

export interface JunctionsV1_X8 {
  __kind: 'X8'
  value: [JunctionV1, JunctionV1, JunctionV1, JunctionV1, JunctionV1, JunctionV1, JunctionV1, JunctionV1]
}

export type AssetInstanceV0 = AssetInstanceV0_Undefined | AssetInstanceV0_Index8 | AssetInstanceV0_Index16 | AssetInstanceV0_Index32 | AssetInstanceV0_Index64 | AssetInstanceV0_Index128 | AssetInstanceV0_Array4 | AssetInstanceV0_Array8 | AssetInstanceV0_Array16 | AssetInstanceV0_Array32 | AssetInstanceV0_Blob

export interface AssetInstanceV0_Undefined {
  __kind: 'Undefined'
}

export interface AssetInstanceV0_Index8 {
  __kind: 'Index8'
  value: number
}

export interface AssetInstanceV0_Index16 {
  __kind: 'Index16'
  value: number
}

export interface AssetInstanceV0_Index32 {
  __kind: 'Index32'
  value: number
}

export interface AssetInstanceV0_Index64 {
  __kind: 'Index64'
  value: bigint
}

export interface AssetInstanceV0_Index128 {
  __kind: 'Index128'
  value: bigint
}

export interface AssetInstanceV0_Array4 {
  __kind: 'Array4'
  value: Uint8Array
}

export interface AssetInstanceV0_Array8 {
  __kind: 'Array8'
  value: Uint8Array
}

export interface AssetInstanceV0_Array16 {
  __kind: 'Array16'
  value: Uint8Array
}

export interface AssetInstanceV0_Array32 {
  __kind: 'Array32'
  value: Uint8Array
}

export interface AssetInstanceV0_Blob {
  __kind: 'Blob'
  value: Uint8Array
}

export type XcmAssetId = XcmAssetId_Concrete | XcmAssetId_Abstract

export interface XcmAssetId_Concrete {
  __kind: 'Concrete'
  value: MultiLocation
}

export interface XcmAssetId_Abstract {
  __kind: 'Abstract'
  value: Uint8Array
}

export type FungibilityV1 = FungibilityV1_Fungible | FungibilityV1_NonFungible

export interface FungibilityV1_Fungible {
  __kind: 'Fungible'
  value: bigint
}

export interface FungibilityV1_NonFungible {
  __kind: 'NonFungible'
  value: AssetInstanceV1
}

export type NetworkId = NetworkId_Any | NetworkId_Named | NetworkId_Polkadot | NetworkId_Kusama

export interface NetworkId_Any {
  __kind: 'Any'
}

export interface NetworkId_Named {
  __kind: 'Named'
  value: Uint8Array
}

export interface NetworkId_Polkadot {
  __kind: 'Polkadot'
}

export interface NetworkId_Kusama {
  __kind: 'Kusama'
}

export type BodyId = BodyId_Unit | BodyId_Named | BodyId_Index | BodyId_Executive | BodyId_Technical | BodyId_Legislative | BodyId_Judicial

export interface BodyId_Unit {
  __kind: 'Unit'
}

export interface BodyId_Named {
  __kind: 'Named'
  value: Uint8Array
}

export interface BodyId_Index {
  __kind: 'Index'
  value: number
}

export interface BodyId_Executive {
  __kind: 'Executive'
}

export interface BodyId_Technical {
  __kind: 'Technical'
}

export interface BodyId_Legislative {
  __kind: 'Legislative'
}

export interface BodyId_Judicial {
  __kind: 'Judicial'
}

export type BodyPart = BodyPart_Voice | BodyPart_Members | BodyPart_Fraction | BodyPart_AtLeastProportion | BodyPart_MoreThanProportion

export interface BodyPart_Voice {
  __kind: 'Voice'
}

export interface BodyPart_Members {
  __kind: 'Members'
  value: number
}

export interface BodyPart_Fraction {
  __kind: 'Fraction'
  nom: number
  denom: number
}

export interface BodyPart_AtLeastProportion {
  __kind: 'AtLeastProportion'
  nom: number
  denom: number
}

export interface BodyPart_MoreThanProportion {
  __kind: 'MoreThanProportion'
  nom: number
  denom: number
}

export type JunctionV1 = JunctionV1_Parachain | JunctionV1_AccountId32 | JunctionV1_AccountIndex64 | JunctionV1_AccountKey20 | JunctionV1_PalletInstance | JunctionV1_GeneralIndex | JunctionV1_GeneralKey | JunctionV1_OnlyChild | JunctionV1_Plurality

export interface JunctionV1_Parachain {
  __kind: 'Parachain'
  value: number
}

export interface JunctionV1_AccountId32 {
  __kind: 'AccountId32'
  network: NetworkId
  id: Uint8Array
}

export interface JunctionV1_AccountIndex64 {
  __kind: 'AccountIndex64'
  network: NetworkId
  index: bigint
}

export interface JunctionV1_AccountKey20 {
  __kind: 'AccountKey20'
  network: NetworkId
  key: Uint8Array
}

export interface JunctionV1_PalletInstance {
  __kind: 'PalletInstance'
  value: number
}

export interface JunctionV1_GeneralIndex {
  __kind: 'GeneralIndex'
  value: bigint
}

export interface JunctionV1_GeneralKey {
  __kind: 'GeneralKey'
  value: Uint8Array
}

export interface JunctionV1_OnlyChild {
  __kind: 'OnlyChild'
}

export interface JunctionV1_Plurality {
  __kind: 'Plurality'
  id: BodyId
  part: BodyPart
}

export interface MultiLocation {
  parents: number
  interior: JunctionsV1
}

export type AssetInstanceV1 = AssetInstanceV1_Undefined | AssetInstanceV1_Index | AssetInstanceV1_Array4 | AssetInstanceV1_Array8 | AssetInstanceV1_Array16 | AssetInstanceV1_Array32 | AssetInstanceV1_Blob

export interface AssetInstanceV1_Undefined {
  __kind: 'Undefined'
}

export interface AssetInstanceV1_Index {
  __kind: 'Index'
  value: bigint
}

export interface AssetInstanceV1_Array4 {
  __kind: 'Array4'
  value: Uint8Array
}

export interface AssetInstanceV1_Array8 {
  __kind: 'Array8'
  value: Uint8Array
}

export interface AssetInstanceV1_Array16 {
  __kind: 'Array16'
  value: Uint8Array
}

export interface AssetInstanceV1_Array32 {
  __kind: 'Array32'
  value: Uint8Array
}

export interface AssetInstanceV1_Blob {
  __kind: 'Blob'
  value: Uint8Array
}
