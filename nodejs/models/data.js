const mongoose = require('mongoose')

const Data = mongoose.model('Data',{
 name:{
    type :String
 },
 description:{
    type:String
 },
 image:{
    type:String
 }
 
})
module.exports = Data