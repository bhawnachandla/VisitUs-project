const mongoose=require('mongoose')

var HotelSchema=mongoose.Schema({
  
    placesId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'places',
        default:null
    },
    destinationId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'destinationCategory',
        default:null
    },
    cityId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'city',
        default:null
    },
    hotel_name:{type:String, default:''},
    hotel_description:{type:String, default:''},
    hotel_image:{type:String, default:'',default:'hotels/Noimage.jpg'},
    per_day_price:{type:Number, default:''},
    hotel_contact:{type:Number, default:''},
    hotel_address:{type:String, default:''},
    hotel_email:{type:String, default:''},
    hotel_location:{type:String, default:''},
    hotel_status:{type:Boolean,default:false},
    createdAt:{type:Date,default:Date.now()}
})
module.exports=mongoose.model('hotels',HotelSchema)