const TransportOrder=require('./transportOrdersModel')
addTransportOrder=(req,res)=>{
    validator=''
    if(req.body.pricingId=='' || req.body.pricingId==undefined){
        validator+='valid pricing id is required'
    }
    if(req.body.noOfPerson=='' || req.body.noOfPerson==undefined){
        validator+='valid no. of person is required'
    }
    if(req.body.totalCharges=='' || req.body.totalCharges==undefined){
        validator+='valid total charges is required'
    }
    if(req.body.userId=='' || req.body.userId==undefined){
        validator+='valid user id is required'
    }
    if(req.body.transportCompanyId=='' || req.body.transportCompanyId==undefined){
        validator+='valid transport Company Id is required'
    }
    if(!!validator){
        res.json({
            'status':409,
            'success':false,
            'message':validator
        })
    }
    else{
        transportOrderObj=new TransportOrder()
        transportOrderObj.pricingId=req.body.pricingId
        transportOrderObj.noOfPerson=req.body.noOfPerson
         transportOrderObj.totalCharges=req.body.totalCharges
        transportOrderObj.userId=req.body.userId
        transportOrderObj.transportCompanyId=req.body.transportCompanyId
        transportOrderObj.save()
        .then(orderData=>{
           res.json({
            'status':200,
            'success':true,
            'message':'transport added successfully',
            'data':orderData
           })
        })
        .catch(err=>{
            res.json({
                'status':409,
                'success':false,
                'message':'data not added successfully',
                'error':String(err)
            })
        })
    }
}
viewAllTransportOrder=(req,res)=>{
    TransportOrder.find(req.body).populate('pricingId').populate('userId').populate('transportCompanyId').exec(function(err,data){
        if(err){
            res.json({
                'status':409,
                'success':false,
                'message':'no data in orders',
                'error':String(err)
            })
        }
        else{
            res.json({
                'status':200,
                'success':true,
                'message':'view all data in orders ',
                'data':data
            })
        }
    })
}
viewTransportOrdersById=(req,res)=>{
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
        TransportOrder.findOne({'_id':req.body._id}).exec(function(err,data){
            if(err){
                res.json({
                    'status':409,
                    'success':false,
                    'message':'no data in orders id',
                    'error':String(err)
                })
                console.log(err)
            }
            else{
                res.json({
                    'status':200,
                    'success':true,
                    'message':'view data in orders id',
                    'data':data
                })
            }
        })
    }
}
updateTransportOrder=(req,res)=>{
    validator=''
    if(req.body.pricingId=='' || req.body.pricingId==undefined){
        validator+='valid pricing id is required'
    }
    if(req.body.noOfPerson=='' || req.body.noOfPerson==undefined){
        validator+='valid no. of person is required'
    }
    if(req.body.totalCharges=='' || req.body.totalCharges==undefined){
        validator+='valid total charges is required'
    }
    if(req.body.userId=='' || req.body.userId==undefined){
        validator+='valid user id is required'
    }
    if(req.body.transportCompanyId=='' || req.body.transportCompanyId==undefined){
        validator+='valid transport Company Id is required'
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
        TransportOrder.findOne({'_id':req.body._id})
        .then(data=>{
            if(data!=null){
                data.pricingId=req.body.pricingId
                data.noOfPerson=req.body.noOfPerson
                data.totalCharges=req.body.totalCharges
                data.transportCompanyId=req.body.transportCompanyId
                data.userId=req.body.userId
                data.save()
                res.json({
                    'status':200,
                    'success':true,
                    'message':'data updated ',
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
changeTransportOrderStatus=(req,res)=>{
    validator=''
    if(req.body._id=='' || req.body._id==undefined){
        validator+='valid _id is required'
    }
    if(req.body.transportOrderStatus=='' || req.body.transportOrderStatus==undefined){
        validator+='valid transport order status is required '
    }
    if(!!validator){
        res.json({
            'status':409,
            'success':false,
            'message':validator
        })
    }
    else{
        TransportOrder.findOne({'_id':req.body._id})
        .then(data=>{
            if(data!=null){
                data.transportOrderStatus=req.body.transportOrderStatus
                data.save()
         
                res.json({
                    'status':200,
                    'success':true,
                    'message':'status changed',
                    'data':data
                })
                console.log(data)
            }
            else{
                res.json({
                    'status':409,
                    'success':false,
                    'message':'invalid id ',

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
module.exports={
    addTransportOrder,
    viewAllTransportOrder,
    viewTransportOrdersById,
    updateTransportOrder,
    changeTransportOrderStatus
}