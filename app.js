// DEPENDENCIES
const express = require("express")

// CONFIGURATION
const app = express()

// ROUTES
app.get("/", (req, res) => {
    res.send("Kylie's portfolio project")
})

//EXPORT
module.exports = app
