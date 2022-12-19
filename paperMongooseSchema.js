const mongoose = require("mongoose");


const paperSchema= new mongoose.Schema({
    name:String,
    no:Number
})
module.exports  = mongoose.model("paper", paperSchema);