const TransportCompanyPricing = require('./transportCompanyPricingModel')

addTransportCompanyPricing = (req, res) => {
    validator = ''
    if (req.body.transportCompanyId == '' || req.body.transportCompanyId == undefined) {
        validator += 'valid transport company id is required '
    }
    if (req.body.fromCity == '' || req.body.fromCity == undefined) {
        validator += 'valid from city id is required '
    }
    if (req.body.toCity == '' || req.body.toCity == undefined) {
        validator += 'valid to city id is required '
    }
    if (req.body.chargesPerPerson == '' || req.body.chargesPerPerson == undefined) {
        validator += 'valid charges per person   is required '
    }
    if (req.body.transportType == '' || req.body.transportType == undefined) {
        validator += 'valid transport type  is required '
    }
    if (!!validator) {
        res.json({
            'status': 409,
            'success': false,
            'message': validator
        })
    }
    else {
        TransportCompanyPricingObj = new TransportCompanyPricing()
        TransportCompanyPricingObj.transportCompanyId = req.body.transportCompanyId
        TransportCompanyPricingObj.fromCity = req.body.fromCity
        TransportCompanyPricingObj.toCity = req.body.toCity
        TransportCompanyPricingObj.chargesPerPerson = req.body.chargesPerPerson
        TransportCompanyPricingObj.transportType = req.body.transportType
        TransportCompanyPricingObj.save()
            .then(pricing => {
                res.json({
                    'status': 200,
                    'success': true,
                    'message': 'transport company pricing added successfully',
                    'data': pricing
                })
            })
            .catch(err => {
                res.json({
                    'status': 409,
                    'success': false,
                    'message': 'pricing not added successfully',
                    'error': String(err)
                })
            })
    }
}
viewAllTransportCompanyPricing=(req,res)=>{
    // TransportCompanyPricing.findOne({'from_city':req.body.from_city} || {'to_city':req.body.to_city})
    // .then(data=>{
    //     if(data!=null){
    //         res.json({
    //             'status':200,
    //             'success':true,
    //             'message':'view data by respective id',
    //             'data':data
    //         })
    //     }
    //     else{
            TransportCompanyPricing.find(req.body).populate('transportCompanyId').populate('fromCity').populate('toCity').exec(function(err,data){
                if(err){
                    res.json({
                        'status':409,
                        'success':false,
                        'message':'no data in pricing ',
                        'error':String(err)
                    })
                }
                else{
                    res.json({
                        'status':200,
                        'success':true,
                        'message':'view all data in pricing ',
                        'data':data
                    })
                }
            })
        }
    // })
    // .catch(err=>{
    //     res.json({
    //         'status':409,
    //         'success':false,
    //         'message':'error in api',
    //         'error':String(err)
    //     })
    // })
   
// }
viewTransportCompanyPricingById=(req,res)=>{
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
        TransportCompanyPricing.findOne({'_id':req.body._id}).exec(function(err,data){
            if(err){
                res.json({
                    'status':409,
                    'success':false,
                    'message':'invalid _id ',
                    'error ':String(err)
                })
            }
            else{
                res.json({
                    'status':200,
                    'success':true,
                    'message':'view pricing by Id ',
                    'data':data
                })
            }
        })
    }
}
updateTransportCompanyPricing=(req,res)=>{
    validator=''
    if (req.body.transportCompanyId == '' || req.body.transportCompanyId == undefined) {
        validator += 'valid transport company id is required '
    }
    if (req.body.fromCity == '' || req.body.fromCity == undefined) {
        validator += 'valid from city id is required '
    }
    if (req.body.toCity == '' || req.body.toCity == undefined) {
        validator += 'valid to city id is required '
    }
    if (req.body.chargesPerPerson == '' || req.body.chargesPerPerson == undefined) {
        validator += 'valid charges per person   is required '
    }
    if (req.body.transportType == '' || req.body.transportType == undefined) {
        validator += 'valid transport type  is required '
    }
    if(req.body._id=='' || req.body._id==undefined){
        validator+='valid _id is required'
    }
    if(validator){
        res.json({
            'status':409,
            'success':false,
            'message':validator
        })
    }
    else{
        TransportCompanyPricing.findOne({'_id':req.body._id})
        .then(data=>{
            if(data!=null){
                data.transportCompanyId=req.body.transportCompanyId
                data.fromCity=req.body.fromCity
                data.toCity=req.body.toCity
                data.chargesPerPerson=req.body.chargesPerPerson
                data.transportType=req.body.transportType
                data.save()
                res.json({
                    'status':200,
                    'success':true,
                    'message':'pricing updated successfully',
                    'data':data
                })
            }
            else{
                res.json({
                    'status':409,
                    'success':false,
                    'message':'invalid id',
                    
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
            console.log(err)
        })
    }
}
changeTransportCompanyPricingStatus=(req,res)=>{
    validator=''
    if(req.body._id=='' || req.body._id==undefined){
        validator+='valid _id is required'
    }
    if(req.body.transportCompanyStatus=='' || req.body.transportCompanyStatus==undefined){
        validator+='valid transportCompanyStatus is required'
    }
    if(!!validator){
        res.json({
            'status':409,
            'success':false,
            'message':validator
        })
    }
    else{
        TransportCompanyPricing.findOne({'_id':req.body._id})
        .then(data=>{
            if(data!=null){
                data.transportCompanyStatus=req.body.transportCompanyStatus
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
                    'message':'invalid id',
                })
            }
        })
        .catch(err=>{
            res.json({
                'status':409,
                'success':false,
                'message':'error in api ',
                'error':String(err)
            })
        })
    }
}
module.exports={
    addTransportCompanyPricing,
    viewAllTransportCompanyPricing,
    viewTransportCompanyPricingById,
    updateTransportCompanyPricing,
    changeTransportCompanyPricingStatus
}