const mongoose = require("mongoose")

const sectionSchema = mongoose.Schema({
    name: { type: String, required: true },
},{timestamps:true})

module.exports = mongoose.model('section',sectionSchema)
