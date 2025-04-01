

const JWT = require("jsonwebtoken")

module.exports = (req,res,next) => {
    const token1 = req.header("authorization"); // Get token after "Bearer"
    if(!token1) return res.status(401).json({message:"access denied"})
        try{
    
    const token = token1.split(" ")[1]
    const verify = JWT.verify(token,process.env.JWT_SECRET)
    req.user = verify// Attach decoded user info to the request
    next() // Continue to the next middleware or route handler
    }
    catch(err){
        res.status(400).json({message:"invalid token"})
    }
}