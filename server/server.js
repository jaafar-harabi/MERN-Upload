const express = require('express')
const app = express()
const cors=require('cors')
const multer=require('multer')


require('dotenv').config()
require('./config/connect')

const userRouter = require('./routes/users')

app.use(express.json())
app.use(cors());
app.use('/user',userRouter)

app.use("/uploads",express.static("./uploads"));





app.listen(process.env.PORT,()=>{console.log(`connected to port ${process.env.PORT}`)})