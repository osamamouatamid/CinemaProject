const express = require('express')
const router = express.Router()
const episode = require('../model/episode')

router.get('/', async (req, res) => {
    try {
        const episodes = await episode.find().populate('season')
        res.status(200).json(episodes)
    }
    catch (err) {
        res.status(500).json({ err })
    }
})

router.post('/', async (req, res) => {
    try {
        const newepisodes = new episode(req.body)
        const savedepisodes = await newepisodes.save();
        res.status(200).json(savedepisodes)
    }
    catch (err) {
        res.status(500).json({ err })
    }

})
router.get('/:id', async (req, res) => {
    try {
        const idepisodes = await episode.find(req.params.id)

        res.status(200).json(idepisodes)
    }
    catch (err) {
        res.status(500).json({ err })
    }

})

router.get('/:id', async (req, res) => {
    try {
        const idepisodes = await episode.find(req.params.id)

        res.status(200).json(idepisodes)
    }
    catch (err) {
        res.status(500).json({ err })
    }

})
router.delete('/', async (req,res)=> {
    try {
        const deletedepisodes = await episode.deleteMany() 
    
 
         res.status(200).json(deletedepisodes)
     }
     catch (err) {
         res.status(500).json({ err })
     }
})
router.delete('/:id', async (req, res) => {
    try {
       const deletedepisode = await episode.findByIdAndDelete(req.params.id) 
       if(!deletedepisode) return res.status(404).json({message:"wasnt found"}) 

        res.status(200).json(deletedepisode)
    }
    catch (err) {
        res.status(500).json({ err })
    }

})
module.exports = router

router.put('/:id', async (req, res) => {
    try {
       const updatedepisode = await episode.findByIdAndUpdate(req.params.id, req.body , {
        runValidators : true,
        new : true
       }) 
       if(!updatedepisode) return res.status(404).json({message:"wasnt found"}) 
        res.status(200).json(updatedepisode)
    }
    catch (err) {
        res.status(500).json({ err })
    }

})
module.exports = router