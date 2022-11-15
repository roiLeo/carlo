import config from './config'
import { SubstrateProcessor } from '@subsquid/substrate-processor'
import { DEFAULT_PORT } from './common/consts'
import * as modules from './mappings'
import { TypeormDatabase } from '@subsquid/typeorm-store'

const database = new TypeormDatabase()
const processor = new SubstrateProcessor(database)

processor.setTypesBundle(config.typesBundle)
processor.setDataSource(config.dataSource)
processor.setPrometheusPort(config.port || DEFAULT_PORT)
processor.setBlockRange(config.blockRange || { from: 0 })

//events handlers
// processor.addEventHandler('Staking.Rewarded', modules.staking.events.handleRewarded)
// processor.addEventHandler('Staking.Reward', modules.staking.events.handleReward) //Old name of Rewarded event
processor.addEventHandler('Staking.Slashed', modules.staking.events.handleSlashed)
processor.addEventHandler('Staking.Slash', modules.staking.events.handleSlash) //Old name of Slashed event

// processor.addEventHandler('crowdloan.Dissolved', modules.crowdloan.events.handleDissolved)
processor.addEventHandler('Crowdloan.Created', modules.crowdloan.events.handleCreated)

processor.addEventHandler('Grandpa.NewAuthorities', modules.grandpa.events.handleNewAuthorities)

//extrinsics handlers
processor.addCallHandler('Crowdloan.contribute', modules.crowdloan.extrinsics.handleContribute)

// processor.addCallHandler('Staking.payout_stakers', modules.staking.extrinsics.handlePauoutStakers)
processor.addCallHandler('Staking.bond', modules.staking.extrinsics.handleBond)
processor.addCallHandler('Staking.bond_extra', modules.staking.extrinsics.handleBondExtra)
processor.addCallHandler('Staking.unbond', modules.staking.extrinsics.handleUnbond)
processor.addCallHandler('Staking.set_controller', modules.staking.extrinsics.handleSetController)
processor.addCallHandler('Staking.set_payee', modules.staking.extrinsics.handleSetPayee)
processor.addCallHandler('Staking.nominate', modules.staking.extrinsics.handleNominate)
processor.addCallHandler('Staking.validate', modules.staking.extrinsics.handleValidate)
processor.addCallHandler('Staking.chill', modules.staking.extrinsics.handleChill)

processor.addCallHandler(
    'Balances.transfer',
    { triggerForFailedCalls: true },
    modules.balances.extrinsics.handleTransfer
)
processor.addCallHandler(
    'Balances.transfer_keep_alive',
    { triggerForFailedCalls: true },
    modules.balances.extrinsics.handleTransferKeepAlive
)
processor.addCallHandler(
    'Balances.force_transfer',
    { triggerForFailedCalls: true },
    modules.balances.extrinsics.handleForceTransfer
)
processor.addCallHandler(
    'Balances.transfer_all',
    { triggerForFailedCalls: true },
    modules.balances.extrinsics.handleTransferAll
)

processor.addCallHandler('System.remark', modules.remark.handleRemark)

processor.addCallHandler('XcmPallet.teleport_assets', modules.xcmPallet.calls.handleTeleportAssets)
processor.addCallHandler('XcmPallet.reserve_transfer_assets', modules.xcmPallet.calls.handleReserveTransferAssets)

processor.addPostHook({ data: modules.staking.hooks.rewardsRequest }, modules.staking.hooks.rewardsHook)

processor.run()
