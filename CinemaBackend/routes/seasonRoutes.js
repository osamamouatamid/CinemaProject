const express = require('express')
const router = express.Router()
const season = require('../model/season')

router.get('/', async (req, res) => {
    try {
        const seasons = await season.find().populate('show')
        res.status(200).json(seasons)
    }
    catch (err) {
        res.status(500).json({ err })
    }
})

router.post('/', async (req, res) => {
    try {
        const newseasons = new season(req.body)
        const savedseasons = await newseasons.save();
        res.status(200).json(savedseasons)
    }
    catch (err) {
        res.status(500).json({ err })
    }

})
router.get('/:id', async (req, res) => {
    try {
        const idseasons = await season.find(req.params.id)

        res.status(200).json(idseasons)
    }
    catch (err) {
        res.status(500).json({ err })
    }

})

router.get('/:id', async (req, res) => {
    try {
        const idseasons = await season.find(req.params.id)

        res.status(200).json(idseasons)
    }
    catch (err) {
        res.status(500).json({ err })
    }

})
router.delete('/', async (req,res)=> {
    try {
        const deletedseasons = await season.deleteMany() 
    
 
         res.status(200).json(deletedseasons)
     }
     catch (err) {
         res.status(500).json({ err })
     }
})
router.delete('/:id', async (req, res) => {
    try {
       const deletedseason = await season.findByIdAndDelete(req.params.id) 
       if(!deletedseason) return res.status(404).json({message:"wasnt found"}) 

        res.status(200).json(deletedseason)
    }
    catch (err) {
        res.status(500).json({ err })
    }

})
module.exports = router

router.put('/:id', async (req, res) => {
    try {
       const updatedseason = await season.findByIdAndUpdate(req.params.id, req.body , {
        runValidators : true,
        new : true
       }) 
       if(!updatedseason) return res.status(404).json({message:"wasnt found"}) 
        res.status(200).json(updatedseason)
    }
    catch (err) {
        res.status(500).json({ err })
    }

})
module.exports = router