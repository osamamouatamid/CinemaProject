const express = require('express')
const bcrypt = require('bcrypt')
const JWT = require('jsonwebtoken')
const router = express.Router()
require("dotenv").config()
const nodemailer = require('nodemailer')

const user = require('../model/user')

router.get('/', async (req, res) => {
    try {
        const users = await user.find()
        res.status(200).json(users)
    }
    catch (err) {
        res.status(500).json({ err })
    }
})

router.post('/register', async (req, res) => {
    try {
        const {email, password, genre, username, dateOfBirth} = req.body
        const findone = await user.findOne({email})
        if (findone) return res.status(409).json({message:"user already exists!"})

        const salt = await bcrypt.genSalt(10)
        const hashed = await bcrypt.hash(password,salt)

        const newuser = new user({email,genre,username,dateOfBirth,password : hashed})
        await newuser.save()
        res.status(200).json({message: "user registered!"})
    }
    catch (err) {
        res.status(500).json({ err })
    }

})
router.post('/login', async (req, res) => {
    try {
        const {email,password} = req.body
        const finduser = await user.findOne({email})
        if (!finduser) return res.status(404).json({message:"user wasn't found!"})
        
        const isMatch = await bcrypt.compare(password, finduser.password)
        if(!isMatch) return res.status(409).json({message:"not matching!"})

        const token = JWT.sign({_id:finduser._id},process.env.JWT_SECRET,{expiresIn:"1h"})
        res.status(200).json({message: "login success", token})
    }
    catch (err) {
        res.status(500).json({ err })
    }

})




const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: process.env.SMTP_SECURE === 'true', // ensure proper boolean conversion
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
    logger: true,
    debug: true,
  });
  

router.post("/forgot-password", async (req,res)=>{

    try{
        const {email} = req.body
        const findmail = await user.findOne({email})
        if(!findmail) return res.status(404).json({message:"email not found"})
        const token = JWT.sign({_id:findmail._id},process.env.JWT_SECRET,{expiresIn:"1h"})   
        const resetlink = `https://localhost:5174/reset-password/${token}`
        await transporter.sendMail({
            from : process.env.EMAIL_USER,
            to: email,
            subject : "Resetting password",
            text: `reset link : ${resetlink} `
        })
        res.status(201).json({message:"email sent" , token})
    }
    catch(err){
        res.status(500).json({error:err.message})
    }
})

router.post('/reset-password/:token', async (req, res) => {
    const {newpassword} = req.body
    const {token} = req.params
    try {
        const decode = JWT.verify(token, process.env.JWT_SECRET)
        const getUser = await User.findOne({_id: decode._id})
        if(!getUser) return res.status(404).json({message: "user not found"})
        
        const checkold = await bcrypt.compare(newpassword, getUser.password)
        if(checkold) return res.status(409).json({message: "password shouldnt be the same as the old one"})
        
        // Hash the new password directly before saving
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(newpassword, salt)
        
        getUser.password = hashedPassword
        await getUser.save()
        
        return res.status(201).json({message: "the new password has been reseted"})
    } catch(err) {
        res.status(500).json({error: err.message})
    }
})



































router.get('/:id', async (req, res) => {
    try {
        const idusers = await user.find(req.params.id)

        res.status(200).json(idusers)
    }
    catch (err) {
        res.status(500).json({ err })
    }

})

router.get('/:id', async (req, res) => {
    try {
        const idusers = await user.find(req.params.id)

        res.status(200).json(idusers)
    }
    catch (err) {
        res.status(500).json({ err })
    }

})
router.delete('/', async (req,res)=> {
    try {
        const deletedusers = await user.deleteMany() 
    
 
         res.status(200).json(deletedusers)
     }
     catch (err) {
         res.status(500).json({ err })
     }
})
router.delete('/:id', async (req, res) => {
    try {
       const deleteduser = await user.findByIdAndDelete(req.params.id) 
       if(!deleteduser) return res.status(404).json({message:"wasnt found"}) 

        res.status(200).json(deleteduser)
    }
    catch (err) {
        res.status(500).json({ err })
    }

})
module.exports = router

router.put('/:id', async (req, res) => {
    try {
       const updateduser = await user.findByIdAndUpdate(req.params.id, req.body , {
        runValidators : true,
        new : true
       }) 
       if(!updateduser) return res.status(404).json({message:"wasnt found"}) 
        res.status(200).json(updateduser)
    }
    catch (err) {
        res.status(500).json({ err })
    }

})
module.exports = router