const hotelModel = require('../hotels/hotelModel')
const Places = require('../places/placesmodel')


addPlaces = (req, res) => {
    validator = ""
    if (req.body.place_name == '' || req.body.place_name == undefined) {
        {
            validator += 'place name is required'
        }
    }
    if (req.body.place_description == '' || req.body.place_description == undefined) {
        {
            validator += 'place  descrption is required'
        }
    }
    if (req.body.destinationId == '' || req.body.destinationId == undefined) {
        validator += 'valid destination Id is required '
    }
    if (req.body.cityId == '' || req.body.cityId == undefined) {
        validator += 'valid city id is required '
    }
    // if(req.file==undefined || req.file==''){
    //     validator+='valid place image is required'
    // }
    if (!!validator) {
        res.json({
            'status': 409,
            'success': false,
            'message': validator
        })
    }
    else {
        Places.findOne({ 'place_name': req.body.place_name }).populate('destinationId')
            .then(data => {
                if (data != null) {
                    res.json({
                        'status': 409,
                        'success': false,
                        'message': 'this place already exists'
                    })
                }
                else {
                    placesObj = new Places()
                    placesObj.place_name = req.body.place_name
                    placesObj.place_description = req.body.place_description
                    placesObj.destinationId = req.body.destinationId
                    placesObj.cityId = req.body.cityId
                    let image = 'places/default.jpg';
                    if (req.file != undefined && req.file.filename != undefined) {
                        image = 'places/' + req.file.filename
                    }
                    placesObj.place_image = image
                    placesObj.save()
                        .then(image => {
                            res.json({
                                'status': 200,
                                'success': true,
                                'message': 'places added successfully',
                                'data': image
                            })
                        })
                }
            })
            .catch(err => {
                res.json({
                    'status': 409,
                    'success': false,
                    'message': 'error in api',
                    'error': String(err)
                })
            })
    }
}
manageAllPlace = (req, res) => {
    // Places.findOne({'destinationId':req.body.destinationId})
    // .then(data=>{
    //     if(data!=null){
    //         res.json({
    //             'status':200,
    //             'success':true,
    //             'message':'view all places by destination id',
    //             'data':data
    //         })
    //         console.log(data)
    //     }
    //     else{
    Places.find(req.body).populate('destinationId').populate('cityId').exec(function (err, data) {
        if (err) {
            res.json({
                'status': 409,
                'success': false,
                'message': 'nothing is in all places ',
                'data': err
            })
        }
        else {
            res.json({
                'status': 200,
                'success': true,
                'message': 'all places ',
                'data': data
            })
        }
    })
}
//     })
//     .catch(err=>{
//         res.json({
//             'status':409,
//             'success':false,
//             'message':'error in api ',
//             'error':String(err)
//         })
//     })
//  }

managePlaceById = (req, res) => {
    validator = ''
    if (req.body._id == '' || req.body._id == undefined) {
        validator += 'valid _id is required'
    }
    if (!!validator) {
        res.json({
            'status': 409,
            'success': false,
            'message': validator
        })
    }
    else {
        Places.findOne({ '_id': req.body._id }).populate('cityId').populate('destinationId').exec(function (err, data) {
            if (err) {
                res.json({
                    'status': 409,
                    'success': false,
                    'message': 'invalid id',
                    'error': String(err)
                })
                console.log(req.body._id)
            }
            else {
                res.json({
                    'status': 200,
                    'success': true,
                    'message': 'view Place by Id ',
                    'data': data
                })
                console.log(data)
            }
        })
    }
}



updatePlaces = (req, res) => {
    Places.findOne({ '_id': req.body._id }).populate('destinationId')
        .then(data => {
            if (data != null) {
                data.place_name = req.body.place_name
                data.place_description = req.body.place_description
                data.destinationId = req.body.destinationId
                data.cityId = req.body.cityId
                let image = data.place_image
                if (req.file != undefined && req.file.filename != undefined) {
                    image = 'places/' + req.file.filename
                }
                data.place_image = image
                data.save()
                res.json({
                    'status': 200,
                    'success': true,
                    'message': 'places updated successfully',
                    'data': data
                })
            }
            else {
                res.json({
                    'status': 409,
                    'success': false,
                    'message': 'invalid id ',
                })
            }
        })
        .catch(err => {
            res.json({
                'status': 409,
                'success': false,
                'messsage': 'error in api',
                'error': String(err)
            })
            console.log(err)
        })
}
changeStatusPlaces = (req, res) => {

    validator = ""
    if (req.body._id == undefined || req.body._id == '') {
        validator += ' Id is required'
    }
    if (req.body.Place_status == undefined || req.body.Place_status == '') {
        validator += 'valid place status is required'
    }
    if (!!validator) {
        res.json({
            'status': 409,
            'success': false,
            'message': validator
        })
    }
    else {
        Places.findOne({ '_id': req.body._id }).populate('destinationId')
            .then(data => {
                if (data != null) {
                    data.Place_status = req.body.Place_status;
                    data.save(
                        res.json({
                            'status': 200,
                            'success': true,
                            'message': 'status updated',
                            'data': data
                        })
                    )
                }
            })
            .catch(err => {
                res.json({
                    'status': 409,
                    'success': false,
                    'message': 'error in api ',
                    'error': String(err)
                })
            })
    }
}
module.exports = {
    addPlaces,
    manageAllPlace,
    managePlaceById,
    updatePlaces,
    changeStatusPlaces

}
