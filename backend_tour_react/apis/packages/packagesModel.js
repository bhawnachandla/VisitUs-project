const mongoose=require('mongoose')
var packageSchema=mongoose.Schema({
    package_name:{type:String,default:''},
    package_cost:{type:Number,default:''},
    no_of_person:{type:Number,default:''},
    destinationId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'destinationCategory',
        default:null
    },
    placeId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'places',
        default:null
    },
    transport:[
        {
            transport_name : { type:String,default:null },
            cost : { type:Number,default:0 }
        }
    ],
    packageStatus:{type:Boolean,default:false},
    createdAt:{type:Date,default:Date.now()}
})
module.exports=mongoose.model('packages',packageSchema)