const User=require('../apis/user/userModel')
const bcrypt=require('bcrypt')      
const saltRounds=10 

addUser=(req,res)=>{
    let data={
        first_name:'admin',
        email:'admin@gmail.com',
        password:123456,
        user_type:1

    }
    const hash =bcrypt.hashSync('123456',saltRounds)
    data.password=hash
    User.countDocuments()
    .then(counter=>{
      data.userId=counter+1
      User.findOne({'email':'admin@gmail.com'})
      .then(use=>{
        if(use==null){
            let userObj=new User(data)
            userObj.save(data,err=>{
                console.log('admin saved')
            })
        }
      })
      .catch(err=>{
        console.log('admin not saved',err)
      })
    })
}

module.exports={
    addUser
}