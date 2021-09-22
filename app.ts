import express from "express"
import cors from "cors"
import { getContainers } from "./containers"

const app = express()
app.use(cors())
app.use(express.json())

const port = 3000
const apiv1 = express.Router()
app.use("/api/v1", apiv1)

apiv1.get("/health", (_, res) => {
  res.json({ status: "ok", version: 1 })
})

apiv1.get("/containers", getContainers)

app.listen(port, () => {
  console.log(`SuperAPI: ${port}.`)
})
