import { Container } from "./containers"

export const dummyContainers: Container[] = [
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
