const router = require('express').Router()
const DestinationController=require('../apis/destination_category/destinationController')
const PlacesController=require('../apis/places/placesController')
const HotelController=require('../apis/hotels/hotelController')
const CityController=require('../apis/city/cityController')
const TravellingController=require('../apis/travelling/travellingController')
const BookingController=require('../apis/booking/bookingController')
const TransportController=require('../apis/transport/transportController')
const PackagesController=require('../apis/packages/packagesController')
const ReviewController=require('../apis/review/reviewController')
const TransportCompanyController=require('../apis/transportCompany/transport_companyController')
const TransportComapanyPricingController=require('../apis/transport_company_pricing/transportCcompanyPricingController')
const TransportCompanyOrdersController=require('../apis/transportOrders/transportOrdersController')
const UserController=require('../apis/user/userController')
const multer = require('multer')
const path = require('path')

// destination multer starts
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/destination_category')
  },
  filename: function (req, file, cb) {

    let extension = path.extname(file.originalname)
    console.log('des',req.body.destination_name)
    const newname = req.body.destination_name + '-' + Date.now() + extension;
    cb(null, newname)
  }
})
const upload = multer({ storage: storage })
// destination multer ends

// places multer starts
const Placestorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/places')
  },
  filename: function (req, file, cb) {

    let extension = path.extname(file.originalname)
    const newname = req.body.place_name + '-' + Date.now() + extension;
    cb(null, newname)
  }
})
const Placesupload = multer({ storage: Placestorage })
// places multer ends

// Hotels multer starts
const Hotelstorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/hotels')
  },
  filename: function (req, file, cb) {
    console.log("*********************")
    console.log(req)
    console.log("*********************")
    console.log(file)
    console.log("*********************")
    let extension = path.extname(file.originalname)
    const newname = req.body.hotel_name + '-' + Date.now() + extension;
    cb(null, newname)
  }
})
const Hotelsupload = multer({ storage: Hotelstorage })
// hotels multer ends

// hotels multer ends


// admin login routes starts 

router.post('/adminLogin',UserController.userLogin)
// router.use(require('../apis/common/adminmiddleware'))
// Destination routes starts 
router.post('/addDestination',upload.single('destination_image'),DestinationController.addDestination)
router.post('/allDestination',DestinationController.manageallDestination)
router.post('/manageDestinationById',DestinationController.manageDestinationById)
router.post('/updateDestination',upload.single('destination_image'),DestinationController.updateDestination)
router.post('/changeDestinationStatus',DestinationController.changeStatusDestination)

// Destination routes ends 

// places routes starts 
router.post('/addPlaces',Placesupload.single('place_image'),PlacesController.addPlaces)
router.post('/allPlaces',PlacesController.manageAllPlace)
router.post('/viewPlacesById',PlacesController.managePlaceById)
router.post('/updatePlaces',Placesupload.single('place_image'),PlacesController.updatePlaces)
router.post('/changeStatusPlaces',PlacesController.changeStatusPlaces)
// places routes ends 

// hotel routes starts 
router.post('/addHotels',Hotelsupload.single('hotel_image'),HotelController.addHotels)
router.post('/viewAllhotels',HotelController.viewAllHotels)
router.post('/viewHotelsById',HotelController.viewHotelsById)
router.post('/updateHotels',Hotelsupload.single('hotel_image'),HotelController.updateHotels)
router.post('/changeHotelStatus',HotelController.changeHotelStatus)
// hotel routes endes 


// city routes starts 
router.post('/addcity',CityController.addCity)
router.post('/viewAllCity',CityController.viewAllCity),
router.post('/viewcitiesById',CityController.viewCityById)
router.post('/updateCity',CityController.updateCity)
router.post('/changeStatusCity',CityController.changeStatusCity)
// city routes ends 



// travelling routes starts 
router.post('/addTravelling',TravellingController.addTravelling)
router.post('/viewAllTravelling',TravellingController.viewAllTravelling)
router.post('/viewTravellingById',TravellingController.viewTravellingById)
router.post('/updateTravelling',TravellingController.updateTravelling)
router.post('/changestatusTravelling',TravellingController.changeStatusTravelling)
// travelling routes ends 

// booking routes starts 

router.post('/allBooking',BookingController.allBooking)
router.post('/viewBookingsById',BookingController.viewBookingById)
router.post('/changeStatusBooking',BookingController.changeStatusBooking)
// booking routes ends 

// transport routes starts 
router.post('/addTransport',TransportController.addTransport)
router.post('/alltransport',TransportController.allTransport)
router.post('/viewTransportById',TransportController.viewTransportById)
router.post('/updateTransport',TransportController.updateTransport)
 router.post('/changeTransportStatus',TransportController.changeTransportStatus)
//  transport routes ends 

// packages routes starts 
router.post('/addPackages',PackagesController.addPacakges)
router.post('/allPackages',PackagesController.allPackages)
router.post('/viewPackagesById',PackagesController.viewPackagesById)
router.post('/updatePackages',PackagesController.updatePackages)
router.post('/changePackagesStatus',PackagesController.changePackagesStatus)
// packages routes ends 

// reviews routes starts 
router.post('/allReviews',ReviewController.allReview)
router.post('/viewReviewById',ReviewController.viewReviewsById)
router.post('/changeReviewStatus',ReviewController.changeReviewStatus)
// reviews routes starts 

// transport comapany routes starts 
router.post('/addTransportCompany',TransportCompanyController.addTransport_company)
router.post('/viewAllTransportCompany',TransportCompanyController.viewTransport_company)
router.post('/viewTransportCompanyById',TransportCompanyController.viewTransport_companyById)
router.post('/updateTransportCompany',TransportCompanyController.updateTransport_company)
router.post('/changeTransportCompanyStatus',TransportCompanyController.changeTransport_company_status)
// transport company routes ends

// transport company pricing starts 
router.post('/addTransportCompanyPricing',TransportComapanyPricingController.addTransportCompanyPricing)
router.post('/viewAllTransportCompanypricing',TransportComapanyPricingController.viewAllTransportCompanyPricing)
 router.post('/viewTransportCompanyPricingById',TransportComapanyPricingController.viewTransportCompanyPricingById)
 router.post('/updateTransportCompanyPricing',TransportComapanyPricingController.updateTransportCompanyPricing)
 router.post('/changeTransportCompanyPricingStatus',TransportComapanyPricingController.changeTransportCompanyPricingStatus)
//  transport company pricing ends 

// transport orders routes starts 
router.post('/addtransportOrder',TransportCompanyOrdersController.addTransportOrder)
router.post('/viewallorders',TransportCompanyOrdersController.viewAllTransportOrder)
router.post('/viewTransportOrdersById',TransportCompanyOrdersController.viewTransportOrdersById)
router.post('/updateTransportOrders',TransportCompanyOrdersController.updateTransportOrder)
router.post('/changeTransportOderStatus',TransportCompanyOrdersController.changeTransportOrderStatus)
module.exports = router