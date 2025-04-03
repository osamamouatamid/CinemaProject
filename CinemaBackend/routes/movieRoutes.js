const express = require('express')
const router = express.Router()
const movie = require('../model/movie')

router.get('/', async (req, res) => {
    try {
        const movies = await movie.find().populate('section').populate('genre')
        res.status(200).json(movies)
    }
    catch (err) {
        res.status(500).json({ err })
    }
})

router.post('/', async (req, res) => {
    try {
        const newmovies = new movie(req.body)
        const savedmovies = await newmovies.save();
        res.status(200).json(savedmovies)
    }
    catch (err) {
        res.status(500).json({ err })
    }

})
router.get('/:id', async (req, res) => {
    try {
        const idmovies = await movie.find(req.params.id)

        res.status(200).json(idmovies)
    }
    catch (err) {
        res.status(500).json({ err })
    }

})

router.get('/:id', async (req, res) => {
    try {
        const idmovies = await movie.find(req.params.id)

        res.status(200).json(idmovies)
    }
    catch (err) {
        res.status(500).json({ err })
    }

})
router.delete('/', async (req,res)=> {
    try {
        const deletedmovies = await movie.deleteMany() 
    
 
         res.status(200).json(deletedmovies)
     }
     catch (err) {
         res.status(500).json({ err })
     }
})
router.delete('/:id', async (req, res) => {
    try {
       const deletedmovie = await movie.findByIdAndDelete(req.params.id) 
       if(!deletedmovie) return res.status(404).json({message:"wasnt found"}) 

        res.status(200).json(deletedmovie)
    }
    catch (err) {
        res.status(500).json({ err })
    }

})
module.exports = router

router.put('/:id', async (req, res) => {
    try {
       const updatedmovie = await movie.findByIdAndUpdate(req.params.id, req.body , {
        runValidators : true,
        new : true
       }) 
       if(!updatedmovie) return res.status(404).json({message:"wasnt found"}) 
        res.status(200).json(updatedmovie)
    }
    catch (err) {
        res.status(500).json({ err })
    }

})
module.exports = router