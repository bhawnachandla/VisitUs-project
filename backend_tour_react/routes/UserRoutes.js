const router=require('express').Router()
const UserController=require('../apis/user/userController')
const DestinationController=require('../apis/destination_category/destinationController')
const PlacesController=require('../apis/places/placesController')
const HotelController=require('../apis/hotels/hotelController')
const CityController=require('../apis/city/cityController')
const TravellingController=require('../apis/travelling/travellingController')
const TransportController=require('../apis/transport/transportController')
const ReviewController=require('../apis/review/reviewController')
const BookingController=require('../apis/booking/bookingController')
const PackagesController=require('../apis/packages/packagesController')
const TransportCompanyController=require('../apis/transportCompany/transport_companyController')
const TransportComapanyPricingController=require('../apis/transport_company_pricing/transportCcompanyPricingController')
const TransportCompanyOrdersController=require('../apis/transportOrders/transportOrdersController')

const multer = require('multer')
const path = require('path')

const Userstorage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/User')
    },
    filename: function (req, file, cb) {
  
      let extension = path.extname(file.originalname)
      const newname = req.body.name + '-' + Date.now() + extension;
      cb(null, newname)
    }
  })
  const Usersupload = multer({ storage: Userstorage })
// destination routes in customer routes starts 
router.post('/viewAllDestination',DestinationController.manageallDestination)
router.post('/viewDestinationById',DestinationController.manageDestinationById)
// destination routes in customer routes ends 


// places routes in customer routes starts 
router.post('/viewAllPlaces',PlacesController.manageAllPlace)
router.post('/viewPlacesById',PlacesController.managePlaceById)
// places routes in customer routes ends 

// hotel routes in customer routes starts 
router.post('/viewAllHotels',HotelController.viewAllHotels)
router.post('/viewHotelById',HotelController.viewHotelsById)
// hotel routes in customer Routes ends 

// city routes in customer routes starts 
router.post('/viewAllCIty',CityController.viewAllCity)
router.post('/viewCityById',CityController.viewCityById)
// city routes in customer routes ends 

// travelling routes in customer panel starts 
router.post('/viewAllTravelling',TravellingController.viewAllTravelling)
router.post('/viewTravellingById',TravellingController.viewTravellingById)
// travelling routes in customer panel ends 

// transport routes in customer panel starts 
router.post('/viewAllTransport',TransportController.allTransport)
router.post('/viewTransportById',TransportController.viewTransportById)
// transport routes in customer panel ends 

// user register and login routes starts 
router.post('/userRegister',Usersupload.single('id_proof'),UserController.userRegister)
router.post('/userLogin',UserController.userLogin)
// router.use(require('../apis/common/customermiddleware'))
// user register and login routes ends 

// reviews routes starts in customer panel 
router.post('/addReviews',ReviewController.addReview)
router.post('/allReviews',ReviewController.allReview)
router.post('/viewReviewById',ReviewController.viewReviewsById)
router.post('/updateReviews',ReviewController.updateReviews)

// booking routes starts in customer panel 
router.post('/addBooking',BookingController.addBooking)
// review routes ends in customer panel 

// packages routes starts in customer panel 
router.post('/allpackages',PackagesController.allPackages)
router.post('/viewPackagesById',PackagesController.viewPackagesById)
// packages routes ends in customer panel 


// transport company routes starts in customer panel 
router.post('/viewAllTransportCompany',TransportCompanyController.viewTransport_company)
router.post('/viewTransportCompanyById',TransportCompanyController.viewTransport_companyById)
// transport company routes ends in customer panel 

// transport company pricing routes starts in customer panel 
router.post('/viewAllTransportCompanypricing',TransportComapanyPricingController.viewAllTransportCompanyPricing)
 router.post('/viewTransportCompanyPricingById',TransportComapanyPricingController.viewTransportCompanyPricingById)
// transport company pricing routes ends in customer panel 


// transport company orders routes starts in customer panels 
router.post('/viewallorders',TransportCompanyOrdersController.viewAllTransportOrder)
router.post('/viewTransportOrdersById',TransportCompanyOrdersController.viewTransportOrdersById)

// transport company orders routes ends in customer panels 
module.exports=router