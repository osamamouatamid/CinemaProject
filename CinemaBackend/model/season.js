const mongoose = require("mongoose")

const seasonSchema = mongoose.Schema({
  SeasonNum : {type:Number , required : true},
    numberEpisodes: { type: Number, required: true },
    imdb: { type: Number, default: 0 },
    rate: { type: Number, default: 0 },
    releaseDate: { type: Date, required: true },
    trailerUrl: { type: String },
    show: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'show'
    }

},{timestamps:true})

module.exports = mongoose.model('season',seasonSchema)
