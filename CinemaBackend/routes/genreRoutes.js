const express = require('express')
const router = express.Router()
const genre = require('../model/genre')

router.get('/', async (req, res) => {
    try {
        const genres = await genre.find()
        res.status(200).json(genres)
    }
    catch (err) {
        res.status(500).json({ err })
    }
})

router.post('/', async (req, res) => {
    try {
        const newgenres = new genre(req.body)
        const savedgenres = await newgenres.save();
        res.status(200).json(savedgenres)
    }
    catch (err) {
        res.status(500).json({ err })
    }

})
router.get('/:id', async (req, res) => {
    try {
        const idgenres = await genre.find(req.params.id)

        res.status(200).json(idgenres)
    }
    catch (err) {
        res.status(500).json({ err })
    }

})

router.get('/:id', async (req, res) => {
    try {
        const idgenres = await genre.find(req.params.id)

        res.status(200).json(idgenres)
    }
    catch (err) {
        res.status(500).json({ err })
    }

})
router.delete('/', async (req,res)=> {
    try {
        const deletedgenres = await genre.deleteMany() 
    
 
         res.status(200).json(deletedgenres)
     }
     catch (err) {
         res.status(500).json({ err })
     }
})
router.delete('/:id', async (req, res) => {
    try {
       const deletedgenre = await genre.findByIdAndDelete(req.params.id) 
       if(!deletedgenre) return res.status(404).json({message:"wasnt found"}) 

        res.status(200).json(deletedgenre)
    }
    catch (err) {
        res.status(500).json({ err })
    }

})
module.exports = router

router.put('/:id', async (req, res) => {
    try {
       const updatedgenre = await genre.findByIdAndUpdate(req.params.id, req.body , {
        runValidators : true,
        new : true
       }) 
       if(!updatedgenre) return res.status(404).json({message:"wasnt found"}) 
        res.status(200).json(updatedgenre)
    }
    catch (err) {
        res.status(500).json({ err })
    }

})
module.exports = router