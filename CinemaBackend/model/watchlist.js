const mongoose = require("mongoose")

const watchlistSchema = mongoose.Schema({
   movie: [{
         type: mongoose.Schema.Types.ObjectId,
         ref: 'movie'
       }],
       user: {
         type: mongoose.Schema.Types.ObjectId,
         ref: 'user'
       } ,
        show: [{
               type: mongoose.Schema.Types.ObjectId,
               ref: 'show'
             }]
    
},{timestamps:true})

module.exports = mongoose.model('watchlist',watchlistSchema)
