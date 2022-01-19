import * as events from "../../types/events"

import { BalanceData } from "./balanceData"
import { BalanceEventType } from "../../model"
import { EventHandlerContext } from "@subsquid/substrate-processor"
import { encodeID } from "../../helpers/common"
import { handleBalanceEvent } from "./baseHandler"

function getUnreservedEvent(ctx: EventHandlerContext): BalanceData {
    let event = new events.BalancesUnreservedEvent(ctx)
    if (event.isV8) {
        let [who, amount] = event.asV8
        return {
            account: encodeID(who),
            amount: amount,
        }
    } else {
        let { who, amount } = event.asLatest
        return {
            account: encodeID(who),
            amount: amount,
        }
    }
}

export async function handleUnreservedEvent(ctx: EventHandlerContext) {
    await handleBalanceEvent(ctx, BalanceEventType.Unreserved, getUnreservedEvent)
}