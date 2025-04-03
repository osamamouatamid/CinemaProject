const mongoose = require("mongoose")

const genreSchema = mongoose.Schema({
    nameGen : {type : String , required :true}
},{timestamps:true})

module.exports = mongoose.model('genre',genreSchema)
