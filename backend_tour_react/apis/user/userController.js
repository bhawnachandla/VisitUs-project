const User = require('../user/userModel');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const SECRET = 'travelling_agency';
const saltRounds = 10;

userRegister = (req, res) => {
    validator= ''
    if(req.body.email=='' || req.body.email==undefined){
        validator+= 'valid email is required'
    } 
    if(req.body.name=='' || req.body.name==undefined){
        validator+= 'valid name is required'
    }
    if(req.body.password=='' || req.body.password==undefined){
        validator+= 'valid email is required'
    }
    if(!!validator){
        res.json({
            'status':409,
            'success':false,
            'message':validator
        })
    }
    else{
    var usr = new User()
    usr.name = req.body.name
    usr.email = req.body.email
    usr.contact = req.body.contact
    console.log(req.body.password )
    console.log(req.body.name)
    const hash = bcrypt.hashSync(req.body.password, saltRounds);
    usr.password = hash
    let image = 'user/noimage.jpg';
    if (req.file != undefined && req.file.filename != undefined) {
        image = 'user/' + req.file.filename
    }
    usr.id_proof = image
    usr.user_type = 2
    usr.address = req.body.address
    usr.city = req.body.city
    usr.save()
        .then(userObj => {
            res.json({
                'status': 200,
                'success': true,
                'message': 'user registered',
                'data': usr
            })
        })
        .catch(err => {
            res.json({
                'status': 409,
                'success': false,
                'message': 'error in register',
                'error': String(err)
            })
        })
}
}
userLogin=(req,res)=>{
    validator=''
    if(req.body.email=='' || req.body.email==undefined){
        validator+='valid email is required '
    }
    if(req.body.password=='' || req.body.password==undefined){
        validator+='valid password is required '
    }
    if(!!validator){
        res.json({
            'status':409,
            'success':false,
            'message':validator
        })
    }
    else{
        User.findOne({'email':req.body.email})
        .then(userObj=>{
            if(userObj==null){
                res.json({
                    'status':409,
                    'success':false,
                    'message':'email do not exists'
                })
            }
            else{
                if(bcrypt.compareSync(req.body.password, userObj.password)){
                    let payload= {
                        email:userObj.email,
                        user_type:userObj.user_type,
                    }
                    let token=jwt.sign(payload , SECRET,{
                        expiresIn:60*30
                    })
                    res.json({
                        'status':200,
                        'success':true,
                        'message':'login successfully',
                        'data':userObj,
                        'token':token
                    })
                }
                else{
                    res.json({
                        'status': 409,
                        'success':false,
                        'message':'incorrect password'
                    })
                }
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
    userRegister,
    userLogin
}