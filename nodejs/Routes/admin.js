const express = require("express")
const router = express.Router()
const User = require('../models/user')
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

router.post('/data',upload.any('image') , (req,res)=>{
    try{
      const tok = req.cookies.token;
      User.findOne({token:tok})
      .then((user)=>{
        if(user){
          if(user.admin==1){
            data = req.body
            Prd = new Data(data)
            Prd.image = filename
            savedprod =  Prd.save()
            filename = ''
            res.status(200).send("article enregistré")
         }
          else{
            res.status(200).send("tu n'est pas un admin")
          }
        }
        else{
          res.status(200).send("chalek bik")
        }
      })
    } catch (err){
      res.status(400).send(err)
    }
  })
  router.get("/getall", async (req, res) => {
    const tok = req.cookies.token;
  
    User.findOne({ token: tok })
      .then((user) => {
        const result = user;
        console.log(result);
  
        if (result) {
          if (result.admin == 1) {
            Data.find()
              .then((users) => {
                console.log(users);
                res.send(users);
              })
              .catch((error) => {
                console.error(error);
                res.send("Une erreur s'est produite lors de la recherche des utilisateurs.");
              });
          } else {
            res.send("Tu n'es pas admin.");
          }
        } else {
          res.send("Tu n'es pas admin.");
        }
      })
      .catch((error) => {
        console.error(error);
        res.send("Une erreur s'est produite lors de la recherche de l'utilisateur.");
      });
  });
  
  router.post('/logout',async(req,res)=>{

    res.clearCookie("token")
   res.send("logout mchat")
    
})


module.exports = router