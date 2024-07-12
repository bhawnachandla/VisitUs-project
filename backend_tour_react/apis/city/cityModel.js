const mongoose =require('mongoose')

var citySchema= mongoose.Schema({
    city_name:{type:String, default:''},
    state_name:{type:String, default:''},
    city_status:{type:Boolean, default:false},
    createdAt:{type:Date, default:Date.now()}

})
module.exports=mongoose.model('city',citySchema)