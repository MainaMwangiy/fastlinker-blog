const express = require("express")
const bodyParser = require("body-parser")

const handlers = require("./handlers")
const routes = require("./routes")

require("./models")

const app = express()

const PORT = process.env.PORT || 3000


//Middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

// Routes
app.use("/api/v1/users", routes.Users)

app.listen(PORT, (req,res) => {
    console.log("App Running on Port: ", PORT)
})