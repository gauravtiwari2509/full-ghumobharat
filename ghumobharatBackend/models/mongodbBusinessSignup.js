const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/login&signuptut")
    .then(() => {
        console.log('mongodb connected')
    }).catch((err) => {
        console.log('mongodb not connected')
    });



const businessSignupshcema = new mongoose.Schema({
    yourName: {
        type: String,
        required: false
    },
    businessName: { 
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phoneNo: {
        type: Number,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    businessType: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    businessDescription: {
        type: String,
        required: true
    },
    additionalInfo: {
        type: String,
        required: false
    },


});

const collection2 = new mongoose.model("collection2", businessSignupshcema);
module.exports = collection2;