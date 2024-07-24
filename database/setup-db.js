const fs = require("fs")
require("dotenv").config()

const sql = fs.readFileSync(__dirname + "/setup.sql").toString()

const db = require("./db")

// this is async, we can use await but dont need to if its not long
db.query(sql)
    .then(data => console.log("Set up complete."))
    .catch(error => console.log(error))