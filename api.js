// External packages
const express = require("express")
const cors = require("cors")

// Self-Defined middleware
const logger = require("./logger")

const api = express()

// Middle
api.use(express.json())
api.use(cors())
api.use(logger)

api.get("/", (req, res) => res.send("The Wrongs API: Track Injustice"))

module.exports = api