const mongoose = require('mongoose')
var companyPricingSchema = mongoose.Schema({
    transportCompanyId: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'transport_company',
        default: null
    }
    ],
    fromCity:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'city',
        default:null
    }],
    toCity:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'places',
        default:null
    }],
    chargesPerPerson:{type:Number,default:''},  
    transportType:{type:Number,default:''},      // 1 =train , 2 = bus ,3 =car 
    transportCompanyStatus:{type:Boolean,default:false},
    createdAt:{type:Date,default:Date.now()}
})
module.exports=mongoose.model('transportCompanyPricing',companyPricingSchema)