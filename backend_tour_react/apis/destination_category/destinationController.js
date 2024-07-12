const Destination = require('./destinationmodel')

addDestination = (req, res) => {
    validator = ""
    if (req.body.destination_name == "" || req.body.destination_name == undefined) {
        validator += "Destination Name is required \n"
    }

    if (req.file == "" || req.file == undefined) {
        validator += "Destination Image is required \n"
    }

    if (!!validator) {
        res.json({
            'status': 409,
            'success': false,
            'message': validator
        })
    }
    else {
        Destination.findOne({ 'destination_name': req.body.destination_name })
            .then(data => {
                if (data != null) {
                    res.json({
                        'status': 409,
                        'success': false,
                        'message': 'destination already exists'
                    })
                }
                else {
                    let destinationObj = new Destination()
                    destinationObj.destination_name = req.body.destination_name

                    let image = 'destination_category/noimage.jpg'
                    if (req.file != undefined && req.file.filename != undefined) {
                        image = 'destination_category/' + req.file.filename
                    }

                    destinationObj.destination_image = image
                    destinationObj.save().
                        then(image => {
                            res.json({
                                'status': 200,
                                'success': true,
                                'message': 'destination added successfully',
                                'data': image
                            })
                        })
                        .catch(err => {
                            res.json({
                                'status': 500,
                                'success': false,
                                'message': 'error in api',
                                'error': String(err)
                            })
                        })
                }
            })
    }
}

manageallDestination = (req, res) => {
Destination.findOne({'_id':req.body._id})
.then(data=>{
    if(data!=null){
        res.json({
            'status':200,
            'success':true,
            'message':'view data by respective id ',
            'data':data
        })
    }
    else{
        Destination.find(req.body).exec(function (err, data) {
            if (err) {
                res.json({
                    'status': 400,
                    'success': false,
                    'message': 'error in api',
                    'error': String(err)
                })
            }
            else {
                res.json({
                    'status': 200,
                    'success': true,
                    'message': 'All destination',
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
        'message':'error in api ',
        'error':String(err)
    })
})
}

manageDestinationById = (req, res) => {
    validator = ""
    if (req.body._id == undefined || req.body._id == '') {
        validator += 'destination Id is required'
    }
    if (!!validator) {
        res.json({
            'status': 409,
            'success': false,
            'message': validator
        })
    }
    else {
        Destination.findOne({ '_id': req.body._id }).exec(function (err, data) {
            
            if (err) {
                res.json({
                    'status': 400,
                    'success': false,
                    'message': 'invalid Id',
                    'error': String(err)
                })
            }
            else {
                res.json({
                    'status': 200,
                    'success': true,
                    'message': 'manage destination by id',
                    'data': data,

                })
             
            }
        })
    }
}



updateDestination = (req, res) => {
    console.log(req.body)
    validator = ''
    if (req.body._id == '' || req.body._id == undefined) {
        validator += 'valid _id is required'
    }
    if (req.body.destination_name == '' || req.body.destination_name == undefined) {
        validator += 'valid destination Name is required'
    }
    if (!!validator) {
        res.json({
            'status': 409,
            'success': false,
            'message': validator
        })
    }
    else {
        Destination.findOne({ '_id': req.body._id })
            .then(data => {
                if (data != null) {
                    data.destination_name = req.body.destination_name
                    if (req.file != undefined && req.file.filename != undefined) {
                        image = 'destination_category/' + req.file.filename
                    }
                    data.destination_image = image
                    data.save()
                    
                    res.json({
                        'status': 200,
                        'success': true,
                        'message': 'destination updated',
                        'data': data
                    })
                }
                else {
                    res.json({
                        'status': 409,
                        'success': false,
                        'message': 'invalid id '
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
changeStatusDestination = (req, res) => {
    validator = ""
    if (req.body._id == undefined || req.body._id == '') {
        validator += 'destination Id is required'
    }
    if(req.body.status=='' || req.body.status==undefined){
        validator+='valid status is required'
    }
    if (!!validator) {
        res.json({
            'status': 409,
            'success': false,
            'message': validator
        })
    }
    else {
        Destination.findOne({ '_id': req.body._id })
            .then(data => {
             
                if (data != null) {
                    data.status = req.body.status
                    data.save()
                    res.json({
                        'status': 200,
                        'success': true,
                        'message': 'status updated',
                        'data': data
                    })
                }
                else {
                    res.json({
                        'status': 409,
                        'success': false,
                        'message': 'invalid Id '
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

module.exports = {
    addDestination,
    manageallDestination,
    manageDestinationById,
    updateDestination,
    changeStatusDestination
}
