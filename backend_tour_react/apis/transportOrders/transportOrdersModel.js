const mongoose=require('mongoose')
var transportOrdersSchema=mongoose.Schema({
    pricingId:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'transportCompanyPricing',
        default:null
    }],
    noOfPerson:{type:Number,default:''},
    totalCharges:{type:Number,default:''},
    userId:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user',
        default:null
    }],
    transportCompanyId:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'transport_company',
        default:null
    }],
    transportOrderStatus:{type:Boolean,default:false},
    createdAt:{type:Date,default:Date.now()}
})
module.exports=mongoose.model('transportOrder',transportOrdersSchema)