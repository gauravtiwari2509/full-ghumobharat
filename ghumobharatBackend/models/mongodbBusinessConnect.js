const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/login&signuptut")
    .then(() => {
        console.log('mongodb connected');
    })
    .catch((err) => {
        console.error('mongodb not connected:', err);
    });

const buisnessConnectshcema = new mongoose.Schema({
    businessName:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    phoneNo:{
        type:Number,
        required:true,
    },
    address:{
        type:String,
        required:true,
    },
    businessType:{
        type:String,
        required:true,
    },
    taxID:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },

    businessDescription:{
        type:String,
        required:true,
    },
    additionalInfo:{
        type:String,
        required:true,
    },
})

const collection3 = new mongoose.model("collection3",buisnessConnectshcema);
module.exports = collection3;