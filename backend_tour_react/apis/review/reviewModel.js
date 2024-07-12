const mongoose= require('mongoose')
var reviewSchema=mongoose.Schema({
    userId:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user',
        default:null
    }],
    destinationId:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'destinationCategory',
        default:null
    }],
    hotelId:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'hotels',
        default:null
    }],
    placeId:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'places',
        default:null
    }],
    review:{type:String,default:''},
    review_status:{type:Boolean, default:false},
    createdAt:{type:Date, default:Date.now()}
})
module.exports=mongoose.model('review',reviewSchema)