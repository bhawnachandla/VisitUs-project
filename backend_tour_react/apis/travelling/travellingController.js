
const Travelling = require('./travellingModel')

addTravelling = (req, res) => {
    validator = ''
    if (req.body.from_city == '' || req.body.from_city == undefined) {
        validator += 'valid from_destination required '
    }
    if (req.body.to_destination == '' || req.body.to_destination == undefined) {
        validator += 'valid to destinaiton is required'
    }
    if (req.body.travelling_distance == '' || req.body.travelling_distance == undefined) {
        validator += 'valid travelling distance is required'
    }
    if (req.body.mode_of_travel == '' || req.body.mode_of_travel == undefined) {
        validator += 'valid mode of travel is required'
    }
    if (!!validator) {
        res.json({
            'status': 409,
            'success': false,
            'message': validator
        })
    }
    else {
        Travelling.findOne({ $and: [{ 'from_destination': req.body.from_destination }, { 'to_destination': req.body.to_destination }] })
            .then(data => {
                if (data != null) {
                    res.json({
                        'status': 409,
                        'success': false,
                        'message': 'data already exists' 
                    })
                }
                else {
                    let travellingObj = new Travelling()
                    travellingObj.from_city = req.body.from_city    // cityId 
                    travellingObj.to_destination = req.body.to_destination     // place Id
                    travellingObj.mode_of_travel=JSON.parse(req.body.mode_of_travel)
                    travellingObj.travelling_distance = req.body.travelling_distance
                    travellingObj.save()
                   
                       res.json({
                        'status':200,
                        'success':true,
                        'message':'travelling added',
                        'data':travellingObj
                       })
                }
            })
            .catch(error => {
                res.json({
                    'status': 409,
                    'success': false,
                    'message': 'error in api',
                    'error': String(error)
                })
            })
    }
}
viewAllTravelling=(req,res)=>{
   Travelling.find(req.body).populate('to_destination').populate('from_city').exec(function(err,data){
    if(err){
        res.json({
            'status':409,
            'success':false,
            'message':'no data is in travelling',
            'data':String(err)
        })
    }
    else{
        res.json({
            'status':200,
            'success':true,
            'message':'view all travelling',
            'data':data
        })
    }
   })
}
viewTravellingById=(req,res)=>{
    validator=''
    if(req.body._id=='' || req.body._id==undefined){
        validator+='valid _id is required'
    }
    if(!!validator){
        res.json({
            'status':409,
            'success':false,
            'message':validator
        })
    }
    else{
        Travelling.findOne({'_id':req.body._id}).populate('to_destination').populate('from_city').exec(function(err,data){
            if(err){
                res.json({
                    'status':409,
                    'success':false,
                    'message':'invalid id',
                    'error':String(err)
                })
            }
            else{
                res.json({
                    'status':200,
                    'success':true,
                    'message':'view travelling by Id',
                    'data':data
                })
            }
        })
    }
}
updateTravelling=(req,res)=>{
    validator=''
    if(req.body.from_city=='' || req.body.from_city==undefined){
        validator+='valid from destination required'
    }
    if(req.body.to_destination=='' || req.body.to_destination==undefined){
        validator+= 'valid to destination is required'
    }
    if(req.body.mode_of_travel=='' || req.body.mode_of_travel==undefined){
        validator+='valid mode of travel is required'
    }
    if(req.body.travelling_distance=='' || req.body.travelling_distance==undefined){
        validator+='valid travelling distance is required'
    }
    if(req.body._id=='' || req.body._id==undefined){
        validator+='valid _id is required'
    }
    if(!!validator){
        res.json({
            'status':409,
            'success':false,
            'message':validator
        })
    }
    else{
        Travelling.findOne({'_id':req.body._id})
        .then(data=>{
            if(data!=null){
                data.from_city=req.body.from_city    // cityId
                data.to_destination=req.body.to_destination        // place id
                data.travelling_distance=req.body.travelling_distance
                data.mode_of_travel=JSON.parse(req.body.mode_of_travel)
                data.save()
                res.json({
                    'status':200,
                    'success':true,
                    'message':'travelling updated',
                    'data':data
                })
            }
            else{
                res.json({
                    'status':409,
                    'success':false,
                    'message':'invalid Id',
                    'data':[]
                })
            }
        })
        .catch(err=>{
            res.json({
                'status':409,
                'success':false,
                'message':'error in api',
                'error':String(err)
            })
        })
    }
}
changeStatusTravelling=(req,res)=>{
    validator=''
    if(req.body._id=='' ||req.body._id==undefined){
        validator+='valid _id is required'
    }
    if(!!validator){
        res.json({
            'status':409,
            'success':false,
            'message':validator
        })
    }
    else{
        Travelling.findOne({'_id':req.body._id})
        .then(data=>{
            if(data!=null){
                data.travelling_status=req.body.travelling_status
                data.save()
                res.json({
                    'status':200,
                    'success':true,
                    'message':'status updated',
                    'data':data
                })
            }
            else{
                res.json({
                    'status':409,
                    'success':false,
                    'message':'invalid id'
                })
            }
        })
        .catch(err=>{
            res.json({
                'status':409,
                'success':false,
                'message':'error in api',
                'error':String(err)
            })
        })
    }
}
module.exports = {
    addTravelling,
    viewAllTravelling,
    viewTravellingById,
    updateTravelling,
    changeStatusTravelling
}