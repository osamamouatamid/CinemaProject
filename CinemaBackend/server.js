const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const mongoose = require("mongoose")
const authMiddleware = require('./middleware/authMiddleware')
const app = express()
const PORT = 5000;

app.use(cors({
    origin: '*',  // Allow only this port
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
}));
app.use(bodyParser.json())

// Only use authMiddleware for routes that require authentication

mongoose.connect("mongodb+srv://oussamamouatamid1:yozopaaa@cluster0.3znre.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",{
    useNewUrlParser: true,
    useUnifiedTopology :true
})
.then(()=>console.log("Connected to Mongo successfully"))
.catch((err)=>console.error(err));


const testRoutes = require("./routes/testRoutes")
app.use("/api/test", testRoutes)

const authRoutes = require('./routes/authRoutes')
app.use('/api/auth', authRoutes)
app.listen(PORT,()=>
console.log(`server connected to ${PORT}`))

