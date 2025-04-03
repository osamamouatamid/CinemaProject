const express = require('express')
const router = express.Router()
const watchlist = require('../model/watchlist')

router.get('/', async (req, res) => {
    try {
        const watchlists = await watchlist.find().populate('show').populate('user').populate('movie')
        res.status(200).json(watchlists)
    }
    catch (err) {
        res.status(500).json({ err })
    }
})

router.post('/', async (req, res) => {
    try {
        const newwatchlists = new watchlist(req.body)
        const savedwatchlists = await newwatchlists.save();
        res.status(200).json(savedwatchlists)
    }
    catch (err) {
        res.status(500).json({ err })
    }

})
router.get('/:id', async (req, res) => {
    try {
        const idwatchlists = await watchlist.find(req.params.id)

        res.status(200).json(idwatchlists)
    }
    catch (err) {
        res.status(500).json({ err })
    }

})

router.get('/:id', async (req, res) => {
    try {
        const idwatchlists = await watchlist.find(req.params.id)

        res.status(200).json(idwatchlists)
    }
    catch (err) {
        res.status(500).json({ err })
    }

})
router.delete('/', async (req,res)=> {
    try {
        const deletedwatchlists = await watchlist.deleteMany() 
    
 
         res.status(200).json(deletedwatchlists)
     }
     catch (err) {
         res.status(500).json({ err })
     }
})
router.delete('/:id', async (req, res) => {
    try {
       const deletedwatchlist = await watchlist.findByIdAndDelete(req.params.id) 
       if(!deletedwatchlist) return res.status(404).json({message:"wasnt found"}) 

        res.status(200).json(deletedwatchlist)
    }
    catch (err) {
        res.status(500).json({ err })
    }

})
module.exports = router

router.put('/:id', async (req, res) => {
    try {
       const updatedwatchlist = await watchlist.findByIdAndUpdate(req.params.id, req.body , {
        runValidators : true,
        new : true
       }) 
       if(!updatedwatchlist) return res.status(404).json({message:"wasnt found"}) 
        res.status(200).json(updatedwatchlist)
    }
    catch (err) {
        res.status(500).json({ err })
    }

})
module.exports = router