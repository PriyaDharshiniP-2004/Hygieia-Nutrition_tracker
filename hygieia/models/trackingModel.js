const mongoose = require('mongoose');


const trackingSchema = mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'users',
        required:true
    },
    foodId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'foods',
        required:true
    },
    details:{
       
        calories:Number,
        protein:Number,
        carbohydrates:Number,
        fiber:Number,
        fat:Number,
       
    },
    eatenDate:{
        type:String,
        default:new Date().toLocaleDateString()
    },
    quantity:{
        type:Number,
        min:1,
        required:true
    }
},{timestamps:true})


const trackingModel = mongoose.model("trackings",trackingSchema);

module.exports = trackingModel;