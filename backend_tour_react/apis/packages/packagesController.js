
const Packages = require('./packagesModel')

addPacakges = async (req, res) => {
    validator = ''
    if (req.body.destinationId == '' || req.body.destinationId == undefined) {
        validator += 'valid destination Id is required'
    }
    if (req.body.placeId == '' || req.body.placeId == undefined) {
        validator += 'valid destination Id is required'
    }
    if (req.body.package_name == '' || req.body.package_name == undefined) {
        validator += 'valid package name is required'
    }
    if (req.body.package_cost == '' || req.body.package_cost == undefined) {
        validator += 'valid package cost is required'
    }
    if (req.body.no_of_person == '' || req.body.no_of_person == undefined) {
        validator += 'valid no. of person is required'
    }
    // if (req.body.TransportId == '' || req.body.TransportId == undefined) {
    //     validator += 'valid transport id  is required'
    // }

    if (!!validator) {
        res.json({
            'status': 409,
            'success': false,
            'message': validator
        })
    }
    else {
        await Packages.findOne({ 'package_name': req.body.package_name })
            .then(data => {
                if (data != null) {
                    res.json({
                        'status': 409,
                        'success': false,
                        'message': 'this package already exists'
                    })
                }
                else {
                    console.log(req.body)
                    // return
                    // transport_array = req.body.transport

                    // for(i=0;i<transport_array.length;i++)
                    // {

                    // }
                    packageObj = new Packages()
                    packageObj.package_name = req.body.package_name
                    packageObj.package_cost = req.body.package_cost
                    packageObj.destinationId = req.body.destinationId
                    packageObj.transport = req.body.transport
                    // packageObj.transport = 
                    // packageObj.TransportId = req.body.TransportId
                    // console.log()
                    packageObj.placeId = req.body.placeId
                    packageObj.no_of_person = req.body.no_of_person
                    packageObj.save()
                        .then(packageData => {
                            res.json({
                                'status': 200,
                                'success': true,
                                'message': 'package added successfully',
                                'data': packageData
                            })
                        })
                        .catch(err => {
                            res.json({
                                'status': 409,
                                'success': false,
                                'message': 'package do not added successfully',
                                'data': []
                            })
                        })
                }
            })
            .catch(error => {
                res.json({
                    'status': 409,
                    'success': false,
                    'message': 'error in api',
                    'error': String(error)
                })
            })
    }
}

allPackages = (req, res) => {
    console.log(req.body)
    Packages.find(req.body).populate('placeId').populate('destinationId').exec(function (err,data) {
        if (err) {
            res.json({
                'status': 409,
                'success': false,
                'message': 'no data in packages',
                'error': String(err)
            })
        }
        else {
            res.json({
                'status': 200,
                'success': true,
                'message': 'view all data in packages',
                'data': data,
            })
            console.log(data)
        }
    })
}
viewPackagesById = (req, res) => {
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
        Packages.findOne({ '_id': req.body._id }).populate('destinationId').populate('placeId').exec(function (err, data) {

            if (err) {
                res.json({
                    'status': 409,
                    'success': false,
                    'message': 'invalid _id',
                    'error': String(err)
                })
            }
            else {
                res.json({
                    'status': 200,
                    'success': true,
                    'message': 'view packages by Id ',
                    'data': data
                })
            }
        })
    }
}
updatePackages = (req, res) => {
    validator = ''
    if (req.body.destinationId == '' || req.body.destinationId == undefined) {
        validator += 'valid destination Id is required'
    }
    if (req.body.placeId == '' || req.body.placeId == undefined) {
        validator += 'valid destination Id is required'
    }
    if (req.body.package_name == '' || req.body.package_name == undefined) {
        validator += 'valid package name is required'
    }
    if (req.body.package_cost == '' || req.body.package_cost == undefined) {
        validator += 'valid package cost is required'
    }
    if (req.body.no_of_person == '' || req.body.no_of_person == undefined) {
        validator += 'valid no. of person is required'
    }
    // if (req.body.TransportId == '' || req.body.TransportId == undefined) {
    //     validator += 'valid transport id  is required'
    // }
    if (req.body._id == '' || req.body._id == undefined) {
        validator += 'valid _id  is required'
    }
    if (!!validator) {
        res.json({
            'status': 409,
            'success': false,
            'message': validator
        })
    }
    else {
        // console.log(req.body)
        Packages.findOne({ '_id': req.body._id })
            .then(data => {
                // console.log(data)
                if (data != null) {
                    data.package_name = req.body.package_name
                    data.package_cost = req.body.package_cost
                    data.destinationId = req.body.destinationId
                    // data.TransportId=req.body.TransportId
                    data.transport = req.body.transport
                    data.placeId = req.body.placeId
                    data.no_of_person = req.body.no_of_person
                    data.save()
                    res.json({
                        'status': 200,
                        'success': true,
                        'message': 'packages updated',
                        'data': data
                    })
                }
                else {
                    res.json({
                        'status': 409,
                        'success': false,
                        'message': 'invalid _id',
                        'data': []
                    })
                }
            })
            .catch(err => {
                // console.log(err)
                res.json({
                    'status': 409,
                    'success': false,
                    'message': 'error in api',
                    'error': String(err)
                })
            })
    }
}

changePackagesStatus = (req, res) => {
    validator = ''
    if (req.body._id == '' || req.body._id == undefined) {
        validator += 'valid _id is required'
    }
    if (req.body.packageStatus == '' || req.body.packageStatus == undefined) {
        validator += 'valid package status is required'
    }
    if (!!validator) {
        res.json({
            'status': 409,
            'success': false,
            'message': validator
        })
    }
    else {
        Packages.findOne({ '_id': req.body._id })
            .then(data => {
                if (data != null) {
                    data.packageStatus = req.body.packageStatus
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
                        'message': 'invalid id ',
                        'data': []
                    })
                }
            })
            .catch(err => {
                res.json({
                    'status': 409,
                    'success': false,
                    'message': 'erro in api',
                    'error': String(err)
                })
            })
    }
}
module.exports = {
    addPacakges,
    allPackages,
    viewPackagesById,
    updatePackages,
    changePackagesStatus
}