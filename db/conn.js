const mongoose = require("mongoose")
mongoose.connect("mongodb://127.0.0.1:27017/bpcbe")
    .then(() => { console.log("Conntected!!!"); })
    .catch((err) => { console.log("Error while connecting to database!!"); })

module.exports = mongoose;