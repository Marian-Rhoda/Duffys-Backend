const mongoose = require('mongoose');
const ordersScema = mongoose.Schema({

    id:{
        type:Number,
        required:true
    },

    transactionid:{
        type:Number,
        required: true,
        

    },
    name:{
        type:String,
    },


    amount:{
        type:Number,
        

    },

    paymentnumber:{
        type:Number,
        minlength:10,
        maxlength:10,
    },
    
    order:{
            type:String
        },

    
    collections:{
        type:String
    }


})


module.exports = mongoose.model("Orders",ordersScema)