const User=require('../models/users')
const moment = require('moment')



const create = async(req,res)=>{
    const {filename}=req.file
    const {name}=req.body
    try{
        
        const date = moment(new Date()).format("YYYY-MM-DD")
        const newData = new User({
            name:name,
            img:filename,
            date:date
        })
    
        await newData.save()
        res.status(201).send(newData) 

    }catch(err){
        console.log(err)
    }
}


const getAll = async(req,res)=>{
    try{
        const data = await User.find()
        res.status(201).send(data)

        
    }catch(err){
        console.log(err)
    }
}


const del = async(req,res)=>{
    try{
        const delData = await User.findByIdAndDelete({_id:req.params.id})
        res.status(201).send(delData)

    }catch(err){
        console.log(err)
    }
}






module.exports={create,getAll,del}