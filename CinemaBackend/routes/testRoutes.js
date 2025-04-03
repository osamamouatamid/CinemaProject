

const express = require("express")
const router = express.Router()

const Test = require("../model/Test");



router.get('/',async (req,res)=> {
try{
   const tests = await Test.find();
res.status(201).json(tests)
}
catch(err){
res.status(500).json({error:err.message})
}
 
})
router.delete('/', async (req,res)=> {
    try {
        const deletedusers = await Test.deleteMany() 
    
 
         res.status(200).json(deletedusers)
     }
     catch (err) {
         res.status(500).json({ err })
     }
})
router.post('/', async (req,res)=>{
    try{
        const newtest = new Test(req.body);
        const tests = await newtest.save()
        res.status(201).json(tests)
    }
    catch(err){
        res.status(500).json({error:err.message})
    }
})


router.get('/:id', async(req,res)=>{
    try{
        const onetest = await Test.findById(req.params.id)
        if(!onetest) return res.status(404).json({message:"not found sorry!"})
        res.status(201).json(onetest)
    }
    catch(err){
        res.status(500).json({error:err.message})
    }

})

router.delete('/:id', async(req,res)=>{
try{
    const deletedtest = await Test.findByIdAndDelete(req.params.id)
    if(!deletedtest) return res.status(404).json({message:"not found to delete"})
    res.status(201).json(deletedtest)
}
catch(err){
    res.status(500).json({error:err.message})
}
})
router.put('/:id', async(req,res)=>{
    try{
        const modifiedtest = await Test.findByIdAndUpdate(req.params.id,req.body,{
            new:true,
            runValidators:true
        })
        if (!modifiedtest) return res.status(404).json({message:"not found to update"})

        res.status(201).json(modifiedtest)
        
    }
    catch(err){
        res.status(500).json({error:err.message})
    }
})
module.exports = router