const express = require('express')

const router = express.Router()
const multer = require('multer')

const {create,getAll,del} =require('../controllers/users')

const imgconfig = multer.diskStorage({
    destination:(req,file,callback)=>{
        callback(null,"./uploads")
    },
    filename:(req,file,callback)=>{
        callback(null,`imgae-${Date.now()}. ${file.originalname}`)
    }
})



const upload = multer({
    storage:imgconfig
});

router.post('/register',upload.single('img'),create)

router.get('/',getAll)
router.delete('/:id',del)

module.exports=router