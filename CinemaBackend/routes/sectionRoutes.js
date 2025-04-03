const express = require('express')
const router = express.Router()
const section = require('../model/section')

router.get('/', async (req, res) => {
    try {
        const sections = await section.find()
        res.status(200).json(sections)
    }
    catch (err) {
        res.status(500).json({ err })
    }
})

router.post('/', async (req, res) => {
    try {
        const newsections = new section(req.body)
        const savedsections = await newsections.save();
        res.status(200).json(savedsections)
    }
    catch (err) {
        res.status(500).json({ err })
    }

})
router.get('/:id', async (req, res) => {
    try {
        const idsections = await section.find(req.params.id)

        res.status(200).json(idsections)
    }
    catch (err) {
        res.status(500).json({ err })
    }

})

router.get('/:id', async (req, res) => {
    try {
        const idsections = await section.find(req.params.id)

        res.status(200).json(idsections)
    }
    catch (err) {
        res.status(500).json({ err })
    }

})
router.delete('/', async (req,res)=> {
    try {
        const deletedsections = await section.deleteMany() 
    
 
         res.status(200).json(deletedsections)
     }
     catch (err) {
         res.status(500).json({ err })
     }
})
router.delete('/:id', async (req, res) => {
    try {
       const deletedsection = await section.findByIdAndDelete(req.params.id) 
       if(!deletedsection) return res.status(404).json({message:"wasnt found"}) 

        res.status(200).json(deletedsection)
    }
    catch (err) {
        res.status(500).json({ err })
    }

})
module.exports = router

router.put('/:id', async (req, res) => {
    try {
       const updatedsection = await section.findByIdAndUpdate(req.params.id, req.body , {
        runValidators : true,
        new : true
       }) 
       if(!updatedsection) return res.status(404).json({message:"wasnt found"}) 
        res.status(200).json(updatedsection)
    }
    catch (err) {
        res.status(500).json({ err })
    }

})
module.exports = router