const Transport=require('./transportModel')

addTransport=(req,res)=>{
    validator=''
    if(req.body.from_city=='' || req.body.from_city==undefined){
        validator+='valid from destination is required'
    }
    if(req.body.to_destination=='' || req.body.to_destination==undefined){
        validator+='valid to destination is required'
    }
    // if(req.body.mode_of_transport=='' || req.body.mode_of_transport==undefined){
    //     validator+='valid mode of transport is required'
    // }
    if(!!validator){
        res.json({
            'status':409,
            'success':false,
            'message':validator
        })
    }
    else{
        let transportObj=new Transport()
        transportObj.from_city=req.body.from_city                  //city id
        transportObj.to_destination=req.body.to_destination       //destination id
        transportObj.mode_of_transport=JSON.parse(req.body.mode_of_transport)
         console.log(transportObj.mode_of_transport.transport_cost)
        transportObj.save()
        .then(transportData=>{
            res.json({
                'status':200,
                'success':true,
                'message':'transport added successfully',
                'data':transportData
            })

        })
        .catch(err=>{
            res.json({
                'status':409,
                'success':false,
                'message':'transport not added successfully',
                'error':String(err)
            })
        })
    }
}
allTransport=(req,res)=>{
    Transport.find(req.body).populate('from_city').populate('to_destination').exec(function(err,data){
        if(err){
            res.json({
                'status':409,
                'success':false,
                'message':'no data in transport',
                'error':String(err)
            })
        }
        else{
            res.json({
                'status':200,
                'success':true,
                'message':'view all data in transport',
                'data':data
            })
            console.log(data)
        }
    })
}
viewTransportById=(req,res)=>{
    validator=''
    if(req.body._id==''  || req.body._id==undefined){
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
        Transport.findOne({'_id':req.body._id}).exec(function(err,data){
            if(err){
                res.json({
                    'status':409,
                    'success':false,
                    'message':'invalid id ',
                    'error':String(err)
                })
            }
            else{
                res.json({
                    'status':200,
                    'success':true,
                    'message':'veiw transport by Id',
                    'data':data
                })
            }
        })
    }
}
updateTransport=(req,res)=>{
    validator=''
    if(req.body.from_destination=='' || req.body.from_destination==undefined){
        validator+='valid from destination is required'
    }
    if(req.body.to_destination=='' || req.body.to_destination==undefined){
        validator+='valid to destination is required'
    }
    if(req.body.mode_of_transport=='' || req.body.mode_of_transport==undefined){
        validator+='valid mode of transport is required'
    }
    if(!!validator){
        res.json({
            'status':409,
            'success':false,
            'message':validator
        })
    }
    else{
        Transport.findOne({'_id':req.body._id})
        .then(data=>{
            if(data!=null){
                data.from_destination=req.body.from_destination          // cityid
                data.to_destination=req.body.to_destination                //destinationid
                data.mode_of_transport=JSON.parse(req.body.mode_of_transport)
                data.save()
                res.json({
                    'status':200,
                    'success':true,
                    'message':'transport updated',
                    'data':data
                })
            }
            else{
                res.json({
                    'status':409,
                    'success':false,
                    'message':'invalid id ',
                    'data':[]
                })
            }
        })
        .catch(err=>{
            res.json({
                'status':409,
                'success':false,
                'message':'error in api',
                'error':String(err),
            })
            console.log(err)
        })
    }
}
changeTransportStatus=(req,res)=>{
    validator=''
    if(req.body._id=='' || req.body._id==undefined){
        validator+='valid _id is required '
    }
    // if(req.body.travelling_status=='' || req.body.travelling_status==undefined){
    //     validator+='valid travelling_status is required'
    // }
    if(!!validator){
        res.json({
            'status':409,
            'success':false,
            'message':validator
        })
    }
    else{
        Transport.findOne({'_id':req.body._id})
        .then(data=>{
            if(data!=null){
                data.transport_status=req.body.transport_status
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
                    'data':[]
                })
            }
        })
        .catch(err=>{
            res.json({
                'status':409,
                'success':false,
                'message':'error in api',
                'message':String(err)
            })
        })
    }
}
module.exports={
    addTransport,
    allTransport,
    viewTransportById,
    updateTransport,
    changeTransportStatus
}