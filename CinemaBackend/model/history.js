const mongoose = require("mongoose")

const historySchema = mongoose.Schema({
    episode: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'episode'
      }],
      movie: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'movie'
      }],
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
      }
},{timestamps:true})

module.exports = mongoose.model('history',historySchema)
