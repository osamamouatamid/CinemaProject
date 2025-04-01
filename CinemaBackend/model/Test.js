const mongoose = require("mongoose")
const testSchema = new mongoose.Schema({
    username:{
        type:String
    },
    age: {
        type:Number
    }
},{timestamps:true})




module.exports= mongoose.model("test",testSchema)