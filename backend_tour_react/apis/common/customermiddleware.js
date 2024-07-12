const jwt=require('jsonwebtoken')
module.exports=(req,res,next)=>{
    const token=req.headers['authorization']
    if(token){
        jwt.verify(token,'travelling_agency',function(err,decoded){
            if(err){
                return res.json({
                    'status':409,
                    'message':'UnAuthorized Access'
                })
            }
            req.decoded=decoded
            if(req.decoded.user_type==2){
                next()
            }
            else{
                res.json({
                    'status':false,
                    'message':'UnAtuhorized Access'
                })  
            }
        })
    }
    else{
        res.json({
            'status':409,
            'success':false,
            'message':'invalid token or enter a token'
        })
    }
}