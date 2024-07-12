const mongoose=require('mongoose')
var transport_companySchema=mongoose.Schema({
    transport_company_name:{type:String,default:''},
    transport_company_description:{type:String,default:''},
    transport_company_status:{type:Boolean,default:false},
    createdAt:{type:Date,default:Date.now()}
})
module.exports=mongoose.model('transport_company',transport_companySchema)