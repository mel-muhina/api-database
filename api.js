// External packages
const express = require("express")
const cors = require("cors")

// Self-Defined packages
const db = require("./database/db")

// Self-Defined middleware
const logger = require("./logger")

const api = express()

// Middle
api.use(express.json())
api.use(cors())
api.use(logger)

api.get("/", async (req, res) => {
    const data = await db.query("SELECT * FROM wrong;")
    res.send(data.rows)
})

api.get("/people/:id", async (req, res) => {
    const id = parseInt(req.params.id)
    // Can't use ${} here because of SQL injection issues and security issues
    const data = await db.query("SELECT * FROM person WHERE person_id = $1", [id])
    res.send(data.rows[0]) // We only want the first element of the array
})

module.exports = api