const mongoose = require("mongoose")

const movieSchema = mongoose.Schema({


 name: { type: String, required: true },
  description: { type: String },
  imdb: { type: Number, default: 0 },
  rate: { type: Number, default: 0 },
  trailerUrl: { type: String },
  duration: { type: Date, required: true },
  releaseDate: { type: Date, required: true },
  section: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'section'
  },
  genre: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'genre'
  }]
},{timestamps:true})

module.exports = mongoose.model('movie',movieSchema)
