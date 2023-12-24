const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/login&signuptut")
    .then(() => {
        console.log('mongodb connected')
    }).catch((err) => {
        console.log('mongodb not connected')
    });



const informplaceshcema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
      state:{
        type:String,
        required:true,
    },
      city:{
        type:String,
        required:true,
    },
      description:{
        type:String,
        required:true,
    },
      thingsToDo:{
        type:String,
        required:true,
    },
      bestTimeToVisit:{
        type:String,
        required:true,
    },
      nearbyAttractions:{
        type:String,
        required:true,
    }
   
})

const collection5 = new mongoose.model("collection5",informplaceshcema);
module.exports = collection5;