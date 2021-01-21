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
app.get('/', (req,res)=>{
    res.send("hello to memories api")})
//mongodb

const PORT  = process.env.PORT || 5000;
 mongoose.connect(process.env.CONNECTION_URL, {useNewUrlParser:true, useUnifiedTopology:true}).then(()=>{
     console.log(`db is  running on port:${PORT}`)
 }).catch((error=>{console.log(error.message)}))

 mongoose.set("useFindAndModify", false)

 app.listen(PORT,()=>{console.log(`server running on port:${PORT}`)})
