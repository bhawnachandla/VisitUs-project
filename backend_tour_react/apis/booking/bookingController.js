
const BookingHotel=require('./bookingModel')


addBooking=(req,res)=>{
    validator=''
    if(req.body.userId=='' || req.body.userId==undefined){
        validator+='valid userId is required'
    }
    if(req.body.hotelId=='' || req.body.hotelId==undefined){
        validator+='valid hotel Id is required'
    }
    if(req.body.placeId=='' || req.body.placeId==undefined){
        validator+='valid place id is required'
    }
    if(req.body.destinationId=='' || req.body.destinationId==undefined){
        validator+='valid destination id is required'
    }
    if(req.body.booking_date=='' || req.body.booking_date==undefined){
        validator+='valid booking date is required'
    }
    if(req.body.no_of_days=='' || req.body.no_of_days==undefined){
        validator+='valid no. of days is required'
    }
    if(req.body.no_of_people=='' || req.body.no_of_people==undefined){
        validator+='valid no. of days is required'
    }
    if(req.body.price_per_day=='' || req.body.price_per_day==undefined){
        validator+='valid price per days is required'
    }
    if(req.body.total_price=='' || req.body.total_price==undefined){
        validator+='valid total price is required'
    }
    if(req.body.payment_mode=='' || req.body.payment_mode==undefined){
        validator+='valid payment mode is required'
    }
    if(req.body.packageId=='' || req.body.packageId==undefined==undefined){
        validator+='valid pacakage id is required'
    }
    if(!!validator){
        res.json({
            'status':409,
            'success':false,
            'message':validator
        })
    }
    else{
        // BookingHotel.findOne({'userId':req.body.userId})
        // .then(data=>{
        //     if(data!=null){
        //         res.json({
        //             'status':409,
        //             'success':false,
        //             'message':'this booking already exists'
        //         })
        //     }
        //     else{
                let bookingObj=new BookingHotel()
                bookingObj.userId=req.body.userId           
                bookingObj.hotelId=req.body.hotelId             
                bookingObj.placeId=req.body.placeId
                bookingObj.packageId=req.body.packageId         
                bookingObj.destinationId=req.body.destinationId             
                bookingObj.booking_date=req.body.booking_date          
                bookingObj.no_of_days=req.body.no_of_days    
                bookingObj.no_of_people=req.body.no_of_days       
                bookingObj.price_per_day=req.body.price_per_day          
                bookingObj.total_price=req.body.total_price
                bookingObj.payment_mode=req.body.payment_mode
                bookingObj.save()
                .then(bookingdata=>{
                    res.json({
                        'status':200,
                        'success':true,
                        'message':'booking added successfully',
                        'data':bookingdata, 
                    })
                })
                .catch(err=>{
                    res.json({
                        'status':409,
                        'success':false,
                        'message':'booking not added successfully',
                        'error':String(err)
                    })
                })
            }
        // })
        // .catch(err=>{
        //     res.json({
        //         'status':409,
        //         'success':false,
        //         'message':'error in api',
        //         'error':String(err)
        //     })

        // })
    }
// }
allBooking=(req,res)=>{
    BookingHotel.find(req.body).populate('packageId').populate('destinationId').populate('userId').populate('hotelId').populate('placeId').exec(function(err,data){
        if(err){
            res.json({
                'status':409,
                'success':false,
                'message':'no data in booking',
                'error':String(err)
            })
        }
        else{
            res.json({
                'status':200,
                'success':true,
                'message':'view all bookings',
                'data':data
            })
        }
    })
}
viewBookingById=(req,res)=>{
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
        BookingHotel.findOne({'_id':req.body._id}).populate('packageId').populate('userId').populate('destinationId').populate('hotelId').populate('placeId').exec(function(err,data){
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
                    'message':'view Bookings by Id',
                    'data':data
                })
            }
        })
    }
}
changeStatusBooking=(req,res)=>{
    validator=''
    if(req.body._id=='' || req.body._id==undefined){
        validator+='valid _id is required'
    }
    if(req.body.booking_status==''|| req.body.booking_status==undefined){
        validator+='valid booking status is required'
    }
    if(!!validator){
        res.json({
            'status':409,
            'success':false,
            'message':validator
        })
    }
    else{
        BookingHotel.findOne({'_id':req.body._id})
        .then(data=>{
            if(data!=null){
                data.booking_status=req.body.booking_status
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
    addBooking,
    allBooking,
    viewBookingById,
    changeStatusBooking
}