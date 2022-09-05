require("dotenv").config()
const mongoose = require("mongoose")

mongoose.set("debug", true)
mongoose.Promise = global.Promise;

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
})
.then(()=> console.log("MongoDB Connected Successfully!!"))
.catch((error) => console.log(`Error: ${error}`));

module.exports.Users = require("./Users")