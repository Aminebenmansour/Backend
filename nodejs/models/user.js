const mongoose = require('mongoose')

const User = mongoose.model('User',{
    name:{
        type:String
    },
    password:{
        type:String
    },
    fullname:{
        type:String
    },
    email:{
        type:String
    },
    phone:{
        type:String
    },
    token:{
        type:String
    },
    isActive:{
        type:Boolean,
        default : false
    },
    ActivationCode:{
        type:String
    }
 
})
module.exports = User