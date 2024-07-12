const mongoose=require('mongoose')
var transportSchema=mongoose.Schema({
   from_city:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:'city',
    default:null
   }
   ],
   to_destination:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:'places',
    default:null
   }],
    
    mode_of_transport:[{
        transport_name:{type:String,default:''},
        transport_cost:{Type:Number,default:''}
    }],
    transport_status:{type:Boolean,default:false},
    createdAt:{type:Date,default:Date.now()}
})
module.exports=mongoose.model('transport',transportSchema)