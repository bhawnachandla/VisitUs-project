const City=require('./cityModel')

addCity=(req,res)=>{
    validator= ""
    if(req.body.city_name=='' || req.body.city_name==undefined){
        validator+='city name is required '
    }
    if(req.body.state_name=='' || req.body.state_name==undefined){
        validator+='state is required'
    }
    if(!!validator){
        res.json({
            'status':409,
            'success':false,
            'message':validator
        })
    }
    else{
        City.findOne({'city_name':req.body.city_name})
        .then(data=>{
          
            if(data!=null){
                res.json({
                    'status':409,
                    'success':false,
                    'message':'this city already exists',
                })

            }
            else{
                cityObj=new City()
                cityObj.city_name=req.body.city_name
                cityObj.state_name=req.body.state_name
                cityObj.save()
               .then(cObj=>{
                res.json({
                    'status':200,
                    'success':true,
                    'message':'city added',
                    'data':cObj
                })
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
        })
    }
}
viewAllCity=(req,res)=>{
    City.find(req.body)
    .then(data=>{
        if(data!=null){
            res.json({
                'status':200,
                'success':true,
                'message':'view all cities',
                'data':data
            })
        }
        else{
            res.json({
                'status':409,
                'success':false,
                'message':'no data in cities',
                'data':[],
            })
        }
    })
    .catch(err=>{
        res.json({
            'status':409,
            'success':false,
            'message':'error in api',
            'errror':String(err)
        })
    })
}





viewCityById=(req,res)=>{
    validator=''
    if(req.body._id=='' || req.body._id==undefined){
        validator+= 'valid _id is required '
    }
    if(!!validator){
            res.json({
                'status':409,
                'success':false,
                'message':validator
            })
        
    }
    else{
    City.findOne({'_id':req.body._id}).exec(console.log(req.body._id))
    .then(data=>{
     console.log(data)
        if(data!=null){
            res.json({
                'status':200,
                'success':true,
                'message':'view cities by Id',
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

updateCity=(req,res)=>{
    validator=''
    if(req.body.city_name=='' || req.body.city_name==undefined){
        validator+= 'valid city name is required '
    }
    if(req.body.state_name=='' || req.body.state_name==undefined){
        validator+= 'valid state is required '
    }
    if(req.body._id=='' || req.body._id==undefined){
        validator+= 'valid  _id is required '
    }
    if(!!validator){
        res.json({
            'status':409,
            'success':false,
            'message':validator
        })
    }
    else{
   City.findOne({'_id':req.body._id})
   .then(data=>{
    if(data!=null){
        data.city_name=req.body.city_name
        data.state_name=req.body.state_name
        data.save()
        res.json({
            'status':200,
            'success':true,
            'message':'city updated',
            'data':data
        })
    }
    else{
        res.json({
            'status':409,
            'success':false,
            'message':'invlid id',
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
changeStatusCity=(req,res)=>{
    validator= ''
    if(req.body._id=='' || req.body._id==undefined){
        validator+=' valid _id is required'
    }
    if(req.body.city_status=='' || req.body.city_status==undefined){
        validator+='valid city Status is required' 
    }
    if(!!validator){
        res.json({
            'status':409,
            'success':false,
            'message':validator
          })
    }
    else{
    City.findOne({'_id':req.body._id})
    .then(data=>{
        if(data!=null){
            data.city_status=req.body.city_status
            data.save()
            res.json({
                'status':200,
                'success':true,
                'message':'status updated ',
                'data' :data
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
            'error':String(err)
            
        })
    })
}
}
 module.exports={
   addCity,
   viewAllCity,
   viewCityById,
   updateCity,
   changeStatusCity

 }

    
