const Review = require('./reviewModel')

addReview = (req, res) => {
    validator = ''
    if (req.body.review == '' || req.body.review == undefined) {
        validator += 'valid review is required'
    }
    if (req.body.userId == '' || req.body.userId == undefined) {
        validator += 'valid user Id is required'
    }
    // if (req.body.destinationId == '' || req.body.destinationId == undefined) {
    //     validator += 'valid destination id is required'
    // }
    // if (req.body.placeId == '' || req.body.placeId == undefined) {
    //     validator += 'valid place id is required'
    // }
    // if (req.body.hotelId == '' || req.body.hotelId == undefined) {
    //     validator += 'valid hotel id is required'
    // }
    if (!!validator) {
        res.json({
            'status': 409,
            'success': false,
            'message': validator
        })
    }
    else {
        Review.findOne({ 'review': req.body.review })
            .then(data => {
                if (data != null) {
                    res.json({
                        'status': 409,
                        'success': false,
                        'message': 'this review already exists'
                    })
                }
                else {
                    reviewObj = new Review()
                    reviewObj.review = req.body.review
                    reviewObj.userId = req.body.userId
                    reviewObj.destinationId = req.body.destinationId
                    reviewObj.placeId = req.body.placeId
                    reviewObj.hotelId = req.body.hotelId
                    reviewObj.save()
                        .then(reviewData => {
                            res.json({
                                'status': 200,
                                'success': true,
                                'message': 'review created successfully',
                                'data': reviewData
                            })
                        })
                        .catch(err => {
                            res.json({
                                'status': 409,
                                'success': false,
                                'message': 'review does not added',
                                'error': String(err)
                            })
                        })
                }
            })
            .catch(error => {
                res.json({
                    'status': 409,
                    'success': false,
                    'message': ' error in api',
                    'error': String(error)
                })
            })
    }
}
allReview =(req,res) =>{
    Review.find(req.body).exec(function(err,data){
        if(err){
            res.json({
                'status':409,
                'success':false,
                'message':'no data in reviews',
                'data':String(err)
            })
        }
        else{
            res.json({
                'status':200,
                'success':true,
                'message':'view all reviews',
                'data':data
            })
        }
    })
}
viewReviewsById=(req,res)=>{
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
        Review.findOne({'_id':req.body._id}).exec(function(err,data){
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
                    'message':'view reviews by id',
                    'data':data
                })
            }
        })
    }
}
updateReviews=(req,res)=>{
    validator = ''
    if (req.body.review == '' || req.body.review == undefined) {
        validator += 'valid review is required'
    }
    if (req.body.userId == '' || req.body.userId == undefined) {
        validator += 'valid user Id is required'
    }
    if (req.body.destinationId == '' || req.body.destinationId == undefined) {
        validator += 'valid destination id is required'
    }
    if (req.body.placeId == '' || req.body.placeId == undefined) {
        validator += 'valid place id is required'
    }
    if (req.body.hotelId == '' || req.body.hotelId == undefined) {
        validator += 'valid hotel id is required'
    }
    if (req.body._id == '' || req.body._id == undefined) {
        validator += 'valid hotel id is required'
    }
    if (!!validator) {
        res.json({
            'status': 409,
            'success': false,
            'message': validator
        })
    }
    else{
        Review.findOne({'_id':req.body._id})
        .then(data=>{
            if(data!=null){
                data.review=req.body.review
                data.userId=req.body.userId
                data.destinationId=req.body.destinationId
                data.placeId=req.body.placeId
                data.hotelId=req.body.hotelId
                data.save()
                res.json({
                    'status':200,
                    'success':true,
                    'message':'review updated',
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
                'error':String(err)
            })
        })
    }
}
changeReviewStatus=(req,res)=>{
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
        Review.findOne({'_id':req.body._id})
        .then(data=>{
            if(data!=null){
                data.review_status=req.body.review_status
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
                'error':String(err)
            })
        })
    }
}
module.exports={
    addReview,
    allReview,
    viewReviewsById,
    updateReviews,
    changeReviewStatus
}