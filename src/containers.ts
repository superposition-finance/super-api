import { Request, Response } from "express"
import { dummyContainers } from "./container.fixtures"

export interface Container {
  ytTokenPubKey: string
  ptTokenPubKey: string
  ticker: string
  name: string

  underlyingAssetPubKey: string

  // ISO 8601
  startDate: string
  endDate: string

  // Bignumber format
  tvl: string
}

export async function getContainers(req: Request, res: Response) {
  // simulate time
  await new Promise((res) => setTimeout(res, 500))
  res.json(dummyContainers)
}
