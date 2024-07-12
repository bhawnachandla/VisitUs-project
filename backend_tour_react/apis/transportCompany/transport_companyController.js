const Transport_company=require('./transport_companyModel')

addTransport_company=(req,res)=>{
    validator=''
    if(req.body.transport_company_name=='' || req.body.transport_company_name==undefined){
        validator+='valid transport_company_name is required'
    }
    if(req.body.transport_company_description=='' || req.body.transport_company_description==undefined){
        validator+='valid transport_company_description is required'
    }
    if(!!validator){
        res.json({
            'status':409,
            'success':false,
            'message':validator
        })
    }
    else{
        Transport_company.findOne({'transport_company_name':req.body.transport_company_name})
        .then(data=>{
            if(data!=null){
                res.json({
                    'status':409,
                    'success':false,
                    'message':'this transport comapany already exists '
                })
            }
            else{
                transport_companyObj=new Transport_company()
                transport_companyObj.transport_company_name=req.body.transport_company_name
                transport_companyObj.transport_company_description=req.body.transport_company_description
                transport_companyObj.save()
                .then(transport_data=>{
                    res.json({
                        'status':200,
                        'success':true,
                        'message':'new transport comapany added ',
                        'data':transport_data
                    })
                })
                .catch(err=>{
                    res.json({
                        'status':409,
                        'success':false,
                        'message':'invalid id ',
                        'error':StringI(err)
                    })
                })
            }
        })
        .catch(error=>{
            res.json({
                'status':409,
                'success':false,
                'message':'error while in api',
                'error':String(error)
            })
        })
    }
}
viewTransport_company=(req,res)=>{
    Transport_company.find(req.body).exec(function(err,data){
        if(err){
            res.json({
                'status':409,
                'success':false,
                'message':'no data in transport company',
                'error':String(err)
            })
        }
        else{
            res.json({
                'status':200,
                'success':true,
                'message':'view all data in transport company',
                'data':data
            })
        }
    })
}
viewTransport_companyById=(req,res)=>{
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
        Transport_company.findOne({'_id':req.body._id}).exec(function(err,data){
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
                    'message':'view transport company by id',
                    'data':data
                })
            }
        })
    }
}
updateTransport_company=(req,res)=>{
    validator=''
    if(req.body._id=='' || req.body._id==undefined){
        validator+='valid _id is required'
    }
    if(req.body.transport_company_name=='' || req.body.transport_company_name==undefined){
        validator+='valid transport company name is required'
    }
    if(req.body.transport_company_description==''|| req.body.transport_company_description==undefined){
        validator+='valid transport company description is required'
    }
    if(!!validator){
        res.json({
            'status':409,
            'success':false,
            'message':validator
        })
    }
    else{
        Transport_company.findOne({'_id':req.body._id})
        .then(data=>{
           if(data!=null){
            
            data.transport_company_name=req.body.transport_company_name
            data.transport_company_description=req.body.transport_company_description
            data.save()
            res.json({
                'status':200,
                'success':true,
                'message':'transport company updated',
                'data':data
            })
           }
           else{
            res.json({
                'status':409,
                'success':false,
                'message':'invalid id ',
                
            })
           }
        })
        .catch(err=>[
            res.json({
                'status':409,
                'success':false,
                'message':'error in api ',
                'error':String(err)
            })
        ])
    }
}
changeTransport_company_status=(req,res)=>{
    validator=''
    if(req.body._id=='' || req.body._id==undefined){
        validator+='valid _id is required '
    }
    if(req.body.transport_company_status=='' || req.body.transport_company_status==undefined){
        validator+='valid transport_company_status is required'
    }
    if(!!validator){
        res.json({
            'status':409,
            'success':false,
            'message':validator
        })
    }
    else{
        Transport_company.findOne({'_id':req.body._id})
        .then(data=>{
            if(data!=null){
                data.transport_company_status=req.body.transport_company_status
                data.save()
                res.json({
                    'status':200,
                    'success':true,
                    'message':'status changed',
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
        })
    }
}
module.exports={
    addTransport_company,
    viewTransport_company,
    viewTransport_companyById,
    updateTransport_company,
    changeTransport_company_status
}