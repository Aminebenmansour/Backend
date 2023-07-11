const express = require("express")
const router = express.Router()
const Data = require('../models/data')
const multer = require('multer')
const { redirect } = require("react-router-dom")
filename = ""

const mystorage = multer.diskStorage({
  destination: './uploads',
  filename:(req,file,redirect)=>{
    let date = Date.now()
    let fl = date + '.' + file.mimetype.split('/')[1]
    redirect(null,fl)
    filename = fl
  }
})
const upload = multer({storage : mystorage})

router.post('/data',upload.any('image') ,async (req,res)=>{
    try{
      data = req.body
      Prd = new Data(data)
      Prd.image = filename
      savedprod = await Prd.save()
      filename = ''
      res.status(200).send(savedprod)
    } catch (err){
      res.status(400).send(err)
    }
  })

router.get("/getall" , async(req,res)=>{
    try{
        prd = await Data.find()
        res.send(prd)
    }catch(error){
        res.send(error)
    }
})
module.exports = router