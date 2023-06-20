const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    img:{
        type:String,
        required:true
    },
    date:{
        type:Date
    }
})

module.exports=mongoose.model('user',userSchema)