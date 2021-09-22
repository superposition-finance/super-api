import { Request, Response } from "express"
import { assets } from "./asset.fixtures"

export interface SaberReserve {
  ticker: string
  name: string

  // address for underlying mint address (eg, USDT)
  underlyingPubKey: string

  // Saber reserve account address
  reservePubKey: string

  // amount in Saber reserve
  reserveAmount: number

  // owner pubkey for this token
  owner: string
}

export interface SaberAsset {
  type: "saberLP"
  ticker: string
  name: string
  poolPubKey: string
  lpTokenPubKey: string
  lpTokenSupply: number
  tokenA: SaberReserve
  tokenB: SaberReserve
}

type Asset = SaberAsset

async function findAsset(assetPubKey: string): Promise<Asset> {
  await new Promise((resolve) => setTimeout(resolve, 1000))
  return assets[assetPubKey]
}

export async function getAsset(req: Request, res: Response) {
  const assetPubKey = req.params["pubkey"] as string
  const asset = await findAsset(assetPubKey)
  if (!asset) {
    res.status(404).json({ "not-found": assetPubKey })
    return
  }

  res.json(asset)
}
