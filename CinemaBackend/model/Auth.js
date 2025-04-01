const mongoose = require('mongoose')
const bcrypt = require ('bcrypt')
const authSchema = new mongoose.Schema({
    email: {
        type:String,
        require:true
    },
    password: {
        type:String,
        require:true
    }
},{timestamps:true})




module.exports= mongoose.model("auth",authSchema)

