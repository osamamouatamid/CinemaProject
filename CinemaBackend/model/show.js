const mongoose = require("mongoose")

const showSchema = mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String },
    trailerUrl: { type: String },
    imdb: { type: Number, default: 0 },
    numberOfSeasons: { type: Number, default: 0 },
    numberOfEpisodes: { type: Number, default: 0 },
    rate: { type: Number, default: 0 },
    releaseDate: { type: Date, required: true },
    section: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'section'
    },
    genre: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'genre'
    }],
},{timestamps:true})

module.exports = mongoose.model('show',showSchema)
