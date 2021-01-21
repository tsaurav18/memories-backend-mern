import express from 'express'
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors"
import postRouters from "./routes/posts.js"
import dotenv from "dotenv"
const app = express()
dotenv.config()
app.use(bodyParser.json({limit:"30mb", extended:true}))
app.use(bodyParser.urlencoded({limit:"30mb", extended:true}))
app.use(cors())

app.use('/post', postRouters)
//mongodb
// const CONNECTION_URL = "mongodb+srv://admin:admin123123@cluster0.nokoi.mongodb.net/memories?retryWrites=true&w=majority"
const PORT  = process.env.PORT || 5000;
 mongoose.connect(process.env.CONNECTION_URL, {useNewUrlParser:true, useUnifiedTopology:true}).then(()=>{
     app.listen(PORT,()=>{console.log(`server running on port:${PORT}`)})
 }).catch((error=>{console.log(error.message)}))
app.get('/', (req,res)=>{
    res.send("hello to memories api")})
 mongoose.set("useFindAndModify", false)


