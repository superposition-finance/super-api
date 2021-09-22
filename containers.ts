import { Request, Response } from "express"

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

const dummyContainers: Container[] = [
  {
    ytTokenPubKey: "yyy1",
    ptTokenPubKey: "ppp1",
    ticker: "saber-usdt-usdc-2021-10-01-2021-12-01",
    name: "Saber USDT-USDC (2021/10/01-2021/12/01)",
    underlyingAssetPubKey: "saber-usdt-usdc",
    startDate: new Date("2021-10-01").toISOString(),
    endDate: new Date("2021-12-01").toISOString(),
    tvl: "83734747383762.343562",
  },
  {
    ytTokenPubKey: "yyy2",
    ptTokenPubKey: "ppp2",
    ticker: "saber-btc-renBTC-2021-10-01-2021-12-01",
    name: "Saber BTC-renBTC (2021/10/01-2021/12/01)",
    underlyingAssetPubKey: "saber-btc-renbtc",
    startDate: new Date("2021-10-01").toISOString(),
    endDate: new Date("2021-12-01").toISOString(),
    tvl: "939347572943.234112",
  },
]

export function getContainers(req: Request, res: Response) {
  res.json(dummyContainers)
}
