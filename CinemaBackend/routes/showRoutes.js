const express = require('express')
const router = express.Router()
const show = require('../model/show')

router.get('/', async (req, res) => {
    try {
        const shows = await show.find().populate('show').populate('genre')
        res.status(200).json(shows)
    }
    catch (err) {
        res.status(500).json({ err })
    }
})

router.post('/', async (req, res) => {
    try {
        const newshows = new show(req.body)
        const savedshows = await newshows.save();
        res.status(200).json(savedshows)
    }
    catch (err) {
        res.status(500).json({ err })
    }

})
router.get('/:id', async (req, res) => {
    try {
        const idshows = await show.find(req.params.id)

        res.status(200).json(idshows)
    }
    catch (err) {
        res.status(500).json({ err })
    }

})

router.get('/:id', async (req, res) => {
    try {
        const idshows = await show.find(req.params.id)

        res.status(200).json(idshows)
    }
    catch (err) {
        res.status(500).json({ err })
    }

})
router.delete('/', async (req,res)=> {
    try {
        const deletedshows = await show.deleteMany() 
    
 
         res.status(200).json(deletedshows)
     }
     catch (err) {
         res.status(500).json({ err })
     }
})
router.delete('/:id', async (req, res) => {
    try {
       const deletedshow = await show.findByIdAndDelete(req.params.id) 
       if(!deletedshow) return res.status(404).json({message:"wasnt found"}) 

        res.status(200).json(deletedshow)
    }
    catch (err) {
        res.status(500).json({ err })
    }

})
module.exports = router

router.put('/:id', async (req, res) => {
    try {
       const updatedshow = await show.findByIdAndUpdate(req.params.id, req.body , {
        runValidators : true,
        new : true
       }) 
       if(!updatedshow) return res.status(404).json({message:"wasnt found"}) 
        res.status(200).json(updatedshow)
    }
    catch (err) {
        res.status(500).json({ err })
    }

})
module.exports = router