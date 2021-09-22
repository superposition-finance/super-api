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

export function getContainers(req: Request, res: Response) {
  res.json(dummyContainers)
}
