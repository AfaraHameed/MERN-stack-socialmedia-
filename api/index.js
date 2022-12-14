const express = require("express");
const app = express();
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const helmet = require('helmet')
const morgan = require('morgan')
var cors = require('cors')
const userRoutes = require("./routes/user")
const authRoutes = require("./routes/auth")
const postRoutes = require("./routes/posts")
dotenv.config() 
mongoose.connect(process.env.MONGO_URL,()=>{
    console.log("connected to mongodb")
});

//middleware


app.use(cors())
app.use(express.json())
app.use(helmet())
app.use(morgan("common"))
app.use('/api/user' , userRoutes)
app.use('/api/auth' , authRoutes)
app.use('/api/post', postRoutes)
app.get("/",(req,res)=> {
    res.send("welcome to home page")
    console.log("hai")
})


app.listen(8800,()=>{
    console.log("backend server is running")
})