const express = require("express")
const router = express.Router()
const User = require('../models/user')
const Data = require('../models/data')
const bcrypt = require('bcrypt')
const rateLimit = require('express-rate-limit');

const jwt = require('jsonwebtoken')
const randomstring = require('randomstring');
const { sendConfirmationMailer,sendResetMailer, sendContactMailer } = require('./nodemailer');
router.post('/register',async(req,res)=>{
    data = req.body
    usr = new User(data)
    const salt = bcrypt.genSaltSync(10)
    const cryptedPass = await bcrypt.hashSync(data.password, salt)
    usr.password = cryptedPass
    
    // const characters =
    //   "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    // let randomCode = "";
    // for (let i = 0; i < 25; i++) {
    //   randomCode += characters[Math.floor(Math.random() * characters.length)];
    // }
    const randomString = randomstring.generate();

    usr.ActivationCode = randomString
    sendConfirmationMailer(usr.email,randomString)

    usr.save()
        .then(
            (saved)=>{
            res.status(200).send(saved)
            }
        ).catch(
            (err)=>{
                res.status(400).send(err)
            }
        )
})

const loginLimiter = rateLimit({
    windowMs: 10 * 60 * 1000, // 10 minutes
    max: 5,
    message: 'Too many login attempts, please try again later.'
  });
router.post('/signin', loginLimiter,async(req,res)=>{
    data = req.body
    if(data.email){
        user =  await User.findOne({email:data.email})
    }
    else{
        user =  await User.findOne({name:data.name})
     }
    if(!user )
    {
        res.send('email or password invalid')
    }
    else{
      
       validpass = await bcrypt.compareSync(data.password , user.password)
     
       if(!validpass){
           
           res.send("email or password invalid")
       }
       else if(!user.isActive)
       {
            console.log("veuiller confirmer votre  votre ")
       }
       else{
        if(!data.email){
        
            
           payload = {
            email: user.email, 
          }
        }
        else{
            
           payload = {
            email: user.name, 
          }
        }
           token = jwt.sign(payload,'123456789')
           res.cookie('token', token, { maxAge: 900000, httpOnly: true, sameSite: 'lax', });
           user.token = token
           res.send("log in mcha")
           user.save()
        }
    }
})
router.post('/confirm/:activationcode',async(req,res)=>{
    User.findOne({ActivationCode:req.params.activationcode})
    .then((user)=>{
        if(!user){
            console.log("mafama chy")
        }
        else{
             user.isActive = true
             user.save()
             
             res.send("success confirmation" )
            
        }
    }
    
    )
})

router.post('/reset',async(req,res)=>{
    data = req.body
    User.findOne({email:data.email})
    .then((user)=>{
        if(!user){
            res.send("mafama chy")
        }
        else{
            const randomString = randomstring.generate();
            sendResetMailer(data.email,randomString)
            res.send("mrgl")
        }
    }
    
    )
})
router.put('/resetpassword/:activationcode',async(req,res)=>{
    data = req.body
    User.findOne({ActivationCode:req.params.activationcode})
    .then((user)=>{
        if(!user){
            res.send("mafama chy")
        }
        else{
             const salt = bcrypt.genSaltSync(10)
             const cryptedPass =  bcrypt.hashSync(data.password, salt)
             user.password = cryptedPass
             user.save()
             
             res.send("mot de passe sauvgardé" )
            
        }
    }
    
    )
})

router.get('/data/:nameobject',(req,res)=>{
    const tok = req.cookies.token;
    nameobjecct = req.params.nameobject
    
    User.findOne({token:tok})
    .then((user)=>{
        if(user){
            console.log(user)
        Data.findOne({name:nameobjecct})
            .then((usr)=>
                 {
                res.send(usr)
                  }
            )
        }
        else{
            res.send("feyek bik")
        }
    }).catch((err)=>{
        res.send(err)
    })
})

router.post('/contact',(req,res)=>{
    data = req.body
    console.log(data)
    sendContactMailer(data.email,data.subject)
})

router.post('/logout',async(req,res)=>{

    res.clearCookie("token")
   res.send("logout mchat")
    
})


module.exports = router