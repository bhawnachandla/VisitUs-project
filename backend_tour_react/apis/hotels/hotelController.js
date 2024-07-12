
const Hotels = require('./hotelModel')
addHotels = (req, res) => {
   
validator=''
if(req.body.hotel_name=='' || req.body.hotel_name==undefined){
    validator+='valid hotel name is required'
}
if(req.body.hotel_description=='' || req.body.hotel_description==undefined){
    validator+='valid hotel description is required'
}
if(req.file=='' || req.file==''){
    validator+='valid hotel image is required'
}
if(req.body.cityId=='' || req.body.cityId==undefined){
    validator+='valid city Id is required'
}
if(req.body.hotel_address=='' || req.body.hotel_address==undefined){
    validator+='valid hotel address is required'
}
if(req.body.hotel_contact=='' || req.body.hotel_contact==undefined){
    validator+='valid hotel contact is required '
}
if(req.body.hotel_email=='' || req.body.hotel_email==undefined){
    validator+='valid hotel email is required '
}
if(req.body.placesId=='' || req.body.placesId==undefined){
    validator+='valid place id is required '
}
if(req.body.destinationId=='' || req.body.destinationId==undefined){
    validator+='valid destination id is required '
}
if(req.body.per_day_price=='' || req.body.per_day_price==undefined){
    validator+='valid per day price is required '
}
if(req.body.hotel_location=='' || req.body.hotel_location==undefined){
    validator+='valid hotel location is required '
}

if(!!validator){
    res.json({
        'status':409,
        'success':false,
        'message':validator
    })
}
else{
Hotels.findOne({ 'hotel_name': req.body.hotel_name })
            .then(data => {
                if (data != null) {
                    res.json({
                        'status': 409,
                        'success': false,
                        'message': 'this hotel already exists '
                    })
                }
                else {
                    // console.log(req.body)
                    hotelObj = new Hotels()
                    hotelObj.destinationId = req.body.destinationId
                    hotelObj.placesId = req.body.placesId
                    hotelObj.cityId=req.body.cityId
                    hotelObj.hotel_name = req.body.hotel_name
                    hotelObj.hotel_description = req.body.hotel_description
                    hotelObj.per_day_price = req.body.per_day_price
                    hotelObj.hotel_contact = req.body.hotel_contact
                    hotelObj.hotel_address = req.body.hotel_address
                    hotelObj.hotel_email = req.body.hotel_email
                    hotelObj.hotel_location = req.body.hotel_location
                    let image = 'hotels/Noimage.jpg'
                    if (req.file != undefined && req.file.filename != undefined) {
                        image = 'hotels/' + req.file.filename
                    }
                    hotelObj.hotel_image = image
                    hotelObj.save()
                        .then(image => {
                            res.json({
                                'status': 200,
                                'success': true,
                                'message': 'hotel added',
                                'data': image
                            })
                           

                        })
                        .catch(err => {
                            res.json({
                                'status': 409,
                                'success': false,
                                'message': 'error in api',
                                'error': String(err),
                            })
                            console.log(err)
                            
                        })
                }
            })
    }
}

viewAllHotels = (req, res) => {
    // console.log(req.body)
    Hotels.find(req.body)
    .populate('destinationId')
    .populate('placesId')
    .populate('cityId')
    .then(data=>{
        if(data!=null){
            res.json({
                'status':200,
                'success':true,
                'message':'view hotels with their respective places ',
                'data':data
            })
        }
        else{
            Hotels.find(req.body).populate('placesId').populate('destinationId').populate('cityId').exec(function (err, data) {
                if (err) {
                    res.json({
                        'status': 409,
                        'success': false,
                        'message': 'nothing is in hotels ',
                        'error': String(err)
                    })
                }
                else {
                    res.json({
                        'status': 200,
                        'success': true,
                        'message': 'view all hotels',
                        'data': data
                    })
                }
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
viewHotelsById = (req, res) => {
    validator = ""
    if (req.body._id == '' || req.body._id == undefined) {
        validator += '_id is required'
    }
    if (!!validator) {
        res.json({
            'status': 409,
            'success': false,
            'message': validator
        })
    }
    else {
        Hotels.findOne({ '_id': req.body._id }).populate('cityId').populate('destinationId').populate('placesId').exec(function (err, data) {
            if (err) {
                res.json({
                    'status': 409,
                    'success': false,
                    'message': 'invalid id or no data in this id',
                    'error': String(err)
                })
            }
            else {
                res.json({
                    'status': 200,
                    'success': true,
                    'message': 'view hotels by ID',
                    'data': data
                })
            }
        })
    }
}


updateHotels=(req,res)=>{
    validator=''
    if(req.body.hotel_name=='' || req.body.hotel_name==undefined){
        validator+='valid hotel name is required'
    }
    if(req.body.hotel_description=='' || req.body.hotel_description==undefined){
        validator+='valid hotel description is required'
    }
    if(req.body.hotel_address=='' || req.body.hotel_address==undefined){
        validator+='valid hotel address is required'
    }
    if(req.body.hotel_contact=='' || req.body.hotel_contact==undefined){
        validator+='valid hotel contact is required '
    }
    // if(req.file=='' || req.file==undefined){
    //     validator+='valid hotel image is required'
    // }
    if(req.body.hotel_email=='' || req.body.hotel_email==undefined){
        validator+='valid hotel email is required '
    }
    if(req.body.placesId=='' || req.body.placesId==undefined){
        validator+='valid place id is required '
    }
    if(req.body.destinationId=='' || req.body.destinationId==undefined){
        validator+='valid destination id is required '
    }
    if(req.body.per_day_price=='' || req.body.per_day_price==undefined){
        validator+='valid per day price is required '
    }
    if(req.body.hotel_location=='' || req.body.hotel_location==undefined){
        validator+='valid hotel locatioin is required '
    }
    if(req.body._id=='' || req.body._id==undefined){
        validator+='valid _id is required'
    }
    if(req.body.cityId=='' || req.body.cityId==undefined){
        validator+='valid city id is required'
    }
    if(!!validator){
        res.json({
            'status':409,
            'success':false,
            'message':validator
        })
    }
    else{
        Hotels.findOne({'_id':req.body._id}).populate('destinationId').populate('placesId')
        .then(data=>{
            console.log(req.body)
            console.log(req.file)
            if(data!=null){
                data.hotel_name=req.body.hotel_name
                data.hotel_description=req.body.hotel_description
                data.hotel_email=req.body.hotel_email
                data.hotel_contact=req.body.hotel_contact
                data.hotel_address=req.body.hotel_address
                data.hotel_location=req.body.hotel_location
                data.per_day_price=req.body.per_day_price
                data.placesId=req.body.placesId
                data.destinationId=req.body.destinationId
                data.cityId=req.body.cityId
                let image=data.hotel_image;
                if(req.file !=undefined && req.file.filename != undefined){
                    image='hotels/'+req.file.filename
                } 
                data.hotel_image=image
                data.save()
                res.json({
                    'status':200,
                    'success':true,
                    'message':'hotels updated successfully ',
                    'data':data
                })
                console.log(data)
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
changeHotelStatus=(req,res)=>{
    validator=''
    if(req.body._id=='' || req.body._id==undefined){
        validator+='valid _id is required'
    }
    if(req.body.hotel_status=='' || req.body.hotel_status==undefined){
        validator+='valid hotel status is required'
    }
    if(!!validator){
        res.json({
            'status':409,
            'success':false,
            'message':validator
        })
    }
    else{
        Hotels.findOne({'_id':req.body._id})
        .then(data=>{
            if(data!=null){
                data.hotel_status=req.body.hotel_status
                data.save()
                res.json({
                    'status':200,
                    'success':true,
                    'message':'hotel status changed',
                    'data':data
                })
            }
            else{
                res.json({
                    'status':409,
                    'success':false,
                    'message':'invalid _id'
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
    addHotels,
    viewAllHotels,
    viewHotelsById,
    updateHotels,
    changeHotelStatus
}
