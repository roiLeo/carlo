import { UnknownVersionError } from '../../common/errors'
import { CrowdloanFundsStorage } from '../../types/generated/storage'
import { BlockContext as StorageContext } from '../../types/generated/support'

interface StorageData {
    raised: bigint
    end: number
    cap: bigint
    firstPeriod: number
    lastPeriod: number
    fundIndex: number
}

async function getStorageData(ctx: StorageContext, paraId: number): Promise<StorageData | undefined> {
    const storage = new CrowdloanFundsStorage(ctx)
    if (!storage.isExists) return undefined

    if (storage.isV9010) {
        const data = await storage.getAsV9010(paraId)
        if (!data) return undefined
        return {
            fundIndex: data.trieIndex,
            ...data,
        }
    } else if (storage.isV9180) {
        return storage.getAsV9180(paraId)
    } else {
        throw new UnknownVersionError(storage.constructor.name)
    }
}

const storageCache: {
    hash?: string
    values: Map<string, FundInfo>
} = {
    values: new Map(),
}

export interface FundInfo {
    raised: bigint
    end: number
    cap: bigint
    firstPeriod: number
    lastPeriod: number
    fundIndex: number
}

export async function getFunds(ctx: StorageContext, paraId: number): Promise<FundInfo | undefined> {
    if (storageCache.hash !== ctx.block.hash) {
        storageCache.hash = ctx.block.hash
        storageCache.values.clear()
    }

    const key = paraId.toString()
    let value = storageCache.values.get(key)

    if (!value) {
        const data = await getStorageData(ctx, paraId)
        if (!data) return undefined

        value = data
        storageCache.values.set(key, value)
    }

    return value
}
