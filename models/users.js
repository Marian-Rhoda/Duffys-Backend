const mongoose = require('mongoose');
const userScema = mongoose.Schema({
    id:{
        type:Number,
        required:true
    },

    name:{
        type:String,
        required: true,
        minlength:5,
        maxlength:80

    },

    username:{
        type:String,
        required:true,
        minlength:5,
        maxlength:20,

    },

    email:{
        type:String,
        required:true,

    },

    passwordHash:{
        type:String,
        required: true
    
    },

    mobilenumber:{
        type:Number,
        minlength:10,
        maxlength:10,
        required: true
    },

    dateofbirth:{
        type: Date,
        required:true
    }
})


module.exports = mongoose.model("Users",userScema)