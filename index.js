const express = require("express")
const app = express()

require('dotenv').config()

app.use(express.json())


const marketRouter = require('./routes/market.router')

app.use("/api/market", marketRouter)

app.listen(process.env.PORT, () => console.log("Server is running on port 5000"))