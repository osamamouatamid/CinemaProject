const mongoose = require("mongoose")

const episodeSchema = mongoose.Schema({
    number: { type: Number, required: true },
    imdb: { type: Number, default: 0 },
    duration: { type: Date, required: true },
    rate: { type: Number, default: 0 },
    season: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'season'
    }
},{timestamps:true})

module.exports = mongoose.model('episode',episodeSchema)
