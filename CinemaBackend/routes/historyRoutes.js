const express = require('express')
const router = express.Router()
const history = require('../model/history')

router.get('/', async (req, res) => {
    try {
        const historys = await history.find().populate('movie').populate('episode').populate('user')
        res.status(200).json(historys)
    }
    catch (err) {
        res.status(500).json({ err })
    }
})

router.post('/', async (req, res) => {
    try {
        const newhistorys = new history(req.body)
        const savedhistorys = await newhistorys.save();
        res.status(200).json(savedhistorys)
    }
    catch (err) {
        res.status(500).json({ err })
    }

})
router.get('/:id', async (req, res) => {
    try {
        const idhistorys = await history.find(req.params.id)

        res.status(200).json(idhistorys)
    }
    catch (err) {
        res.status(500).json({ err })
    }

})

router.get('/:id', async (req, res) => {
    try {
        const idhistorys = await history.find(req.params.id)

        res.status(200).json(idhistorys)
    }
    catch (err) {
        res.status(500).json({ err })
    }

})
router.delete('/', async (req,res)=> {
    try {
        const deletedhistorys = await history.deleteMany() 
    
 
         res.status(200).json(deletedhistorys)
     }
     catch (err) {
         res.status(500).json({ err })
     }
})
router.delete('/:id', async (req, res) => {
    try {
       const deletedhistory = await history.findByIdAndDelete(req.params.id) 
       if(!deletedhistory) return res.status(404).json({message:"wasnt found"}) 

        res.status(200).json(deletedhistory)
    }
    catch (err) {
        res.status(500).json({ err })
    }

})
module.exports = router

router.put('/:id', async (req, res) => {
    try {
       const updatedhistory = await history.findByIdAndUpdate(req.params.id, req.body , {
        runValidators : true,
        new : true
       }) 
       if(!updatedhistory) return res.status(404).json({message:"wasnt found"}) 
        res.status(200).json(updatedhistory)
    }
    catch (err) {
        res.status(500).json({ err })
    }

})
module.exports = router