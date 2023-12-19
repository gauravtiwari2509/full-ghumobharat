const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/e-comm')
    .then(() => {
        console.log('mongodb connected')
    }).catch((err) => {
        console.log('mongodb not connected')
    });

const ecommshcema = new mongoose.Schema({
    productQuality:{
        type:Number,
        required:true,
    },
    customerService:{
        type:Number,
        required:true,
    },
    cleanlinessAmbiance:{
        type:Number,
        required:true,
    },
    valueForMoney:{
        type:Number,
        required:true,
    },
    convenienceTimeliness:{
        type:Number,
        required:true,
    },
    overallExperience:{
        type:Number,
        required:true,
    },
    timeSpent:{
        type:Number,
        required:true,
    },

})

const e_collection = new mongoose.model("storeReview",ecommshcema);
module.exports = e_collection;