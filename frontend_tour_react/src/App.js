import logo from './logo.svg';
import './App.css';
import Main from './Layout/Main';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './Layout/About';
import Master from './Master';
import Service from './Layout/Service';
import Login from './Layout/Login';
import Register from './Layout/Register';
import Adminmaster from './Admin/Adminmaster';
import Dashboard from './Admin/Dashboard';
import Addpackages from './Admin/Addpackages';
import Viewpackages from './Admin/Viewpackages';
import Viewlocation from './Admin/Viewlocation';
import Home from './Admin/Home';
// import Packages from './Admin/Packages';
import Addlocation from './Admin/Addlocation';
import Adminlogin from './Admin/Adminlogin';
import Usermaster from './User/Usermaster';
import Userlogin from './User/Userlogin';
import Userregister from "./User/Userregister"
import Userhome from './User/Userhome';
import Userpackages from './User/Userpackages';
import Userdashboard from './User/Userdashboard';
import Userlocation from './User/Userlocation';
import AddPlace from './Admin/place/AddPlace';
import AllPlaces from './Admin/place/AllPlaces';
import AddCity from './Admin/city/AddCity';
import AllCity from './Admin/city/AllCity';
import AllHotels from './Admin/hotels/AllHotels';
import AddHotel from './Admin/hotels/AddHotel';
import AddTravelling from './Admin/travelling/AddTravelling';
import ViewAllTravelling from './Admin/travelling/ViewALLTravelling';
import AddTransport from './Admin/transport/AddTransport';
import AllTransport from './Admin/transport/AllTransport';
import AddTransportCompany from './Admin/transport_company/AddTransportCompany';
import AllTransportCompany from './Admin/transport_company/AllTransportCompany';
import AddTransportCompanyPricing from './Admin/transport_company_pricing/AddTransportCompanyPricing';
import AllTransportCompanyPricing from './Admin/transport_company_pricing/AllTransportCompanyPricing';
import AddTransportCompanyOrder from './Admin/transport_company_order/AddTransportCompanyOrder';
import AllTransportCompanyOrder from './Admin/transport_company_order/AllTransportCompanyOrder';
import UserAllPlaces from './User/UserAllPlaces';
import ViewAllCity from './User/ViewAllCity';
import EditTransportCompany from './Admin/transport_company/EditTransportCompany';
import EditLocation from './Admin/EditLocation';
import EditTransport from './Admin/transport/EditTransport';
import EditPlaces from './Admin/place/EditPlaces';
import EditHotels from './Admin/hotels/EditHotels';
import EditCity from './Admin/city/EditCity';
import EditTransportCompanyOrder from './Admin/transport_company_order/EditTransportCompanyOrder';
import EditTransportCompanyPricing from './Admin/transport_company_pricing/EditTransportCompanyPricing';
import EditPackages from './Admin/EditPackages';
import AllBooking from './Admin/booking/AllBooking';
import EditTravelling from './Admin/travelling/EditTravelling';
import ViewAllHotels from './User/ViewAllHotels';
import UserViewAllTravelling from './User/UserViewAllTravelling';
import ViewDestinationById from './User/ViewDestinationById';
import ViewPlace from './User/ViewPlace';
import ViewAllTransport from './User/ViewAllTransport';
import ViewPackages from './User/ViewPackages';
import ViewHotelById from './User/ViewHotelById';
import AddBooking from './User/AddBooking';
import Addreviews from './User/Addreviews';
import AllReviews from './User/AllReviews';
import EditReview from './User/EditReview';
import AllReview from './Admin/reviews/AllReview';
import ViewHotelsByPlace from './User/ViewHotelsByPlace';
import ViewPlaceById from './User/ViewPlaceById';
import ViewBookingById from './User/ViewBookingById';


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Master />}>
            <Route path="/" element={<Main />} />
            <Route path="/about" element={<About />} />
            <Route path="/service" element={<Service />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Userregister/>} />
            <Route path="/userlocation" element={<Userlocation />} />
            <Route path="/viewplaces/:id" element={<ViewPlace/>} />
            <Route path="/allplaces" element={<UserAllPlaces/>} />
            <Route path="/allplaces/single/:id" element={<ViewPlaceById/>} />
            <Route path="/allcity" element={<ViewAllCity/>} />
            <Route path="/allhotels" element={<ViewAllHotels/>} />
            <Route path="/allhotels/single/:id" element={<ViewHotelById/>} />
            <Route path='/allpackages' element={<ViewPackages/>}/>
            <Route path="/allhotels/:id" element={<ViewHotelsByPlace/>} />
            <Route path="/userlogin" element={<Userlogin />} />
            <Route path="/userregister" element={<Userregister />} />
          </Route>
          
          <Route path="/adminlogin" element={<Adminlogin />} />
          <Route path="/admin" element={<Adminmaster />} >
            <Route path="/admin" element={<Dashboard />} />
            <Route path="/admin/addlocation" element={<Addlocation />} />
            <Route path="/admin/viewbooking" element={<AllBooking />} />
            <Route path="/admin/addpackages" element={<Addpackages />} />
            <Route path="/admin/viewpackages" element={<Viewpackages />} />
            <Route path="/admin/viewpackages/edit/:id" element={<EditPackages />} />
            <Route path="/admin/viewlocation" element={<Viewlocation />} />
            <Route path="/admin/viewlocation/edit/:id" element={<EditLocation />} />
            <Route path="/admin/addplace" element={<AddPlace/>}/>
            <Route path="/admin/allplace" element={<AllPlaces/>}/>
            <Route path="/admin/allplaces/edit/:id" element={<EditPlaces/>}/>
            <Route path="/admin/addcity" element={<AddCity/>}/>
            <Route path="/admin/allcity" element={<AllCity/>}/>
            <Route path="/admin/allcity/edit/:id" element={<EditCity/>}/>
            <Route path="/admin/home" element={<Home/>}/>
            <Route path="/admin/addhotels" element={<AddHotel/>}/>
            <Route path="/admin/allhotels" element={<AllHotels/>}/>
            <Route path="/admin/allhotels/edit/:id" element={<EditHotels/>}/>
            <Route path="/admin/addtravelling" element={<AddTravelling/>}/>
            <Route path="/admin/alltravelling" element={<ViewAllTravelling/>}/>
            <Route path="/admin/alltravelling/edit/:id" element={<EditTravelling/>}/>
            <Route path="/admin/addtransport" element={<AddTransport/>}/>
            <Route path="/admin/alltransport" element={<AllTransport/>}/>
            <Route path="/admin/alltransport/edit/:id" element={<EditTransport/>}/>
            <Route path="/admin/addtransportcompany" element={<AddTransportCompany/>}/>
            <Route path="/admin/alltransportcompany" element={<AllTransportCompany/>}/>
            <Route path="/admin/alltransportcompany/edit/:id" element={<EditTransportCompany/>}/>
            <Route path="/admin/addtransportcompanypricing" element={<AddTransportCompanyPricing/>}/>
            <Route path="/admin/addtransportcompanypricing" element={<AllTransportCompanyPricing/>}/>
            <Route path="/admin/alltransportcompanypricing" element={<AllTransportCompanyPricing/>}/>
            <Route path="/admin/alltransportcompanypricing/edit/:id" element={<EditTransportCompanyPricing/>}/>
            <Route path="/admin/addtransportcompanyorder" element={<AddTransportCompanyOrder/>}/>
            <Route path="/admin/alltransportcompanyorder" element={<AllTransportCompanyOrder/>}/>
            <Route path="/admin/alltransportcompanyorder/edit/:id" element={<EditTransportCompanyOrder/>}/>
            <Route path="/admin/allbooking" element={<AllBooking/>}/>
            <Route path="/admin/allreview" element={<AllReview/>}/>

            {/* <Route path="/admin/packages" element={<Packages/>} /> */}
          </Route>

          <Route path="/user" element={<Usermaster />} >
           
            <Route path="/user/userhome" element={<Userhome />} />
            <Route path="/user/userpackages" element={<Userpackages />} />
            <Route path="/user/userdashboard" element={<Userdashboard />} />
            <Route path="/user/userlocation" element={<Userlocation />} />
            <Route path="/user/allplaces" element={<UserAllPlaces/>} />
            <Route path="/user/allplaces/single/:id" element={<ViewPlaceById/>} />
            <Route path="/user/allcity" element={<ViewAllCity/>} />
            <Route path="/user/allhotels" element={<ViewAllHotels/>} />
            <Route path="/user/allhotels/single/:id" element={<ViewHotelById/>} />
            <Route path="/user/allhotels/:id" element={<ViewHotelsByPlace/>} />
            <Route path="/user/alltravelling" element={<UserViewAllTravelling/>} />
            <Route path="/user/alltransport" element={<ViewAllTransport/>} />
            <Route path="/user/viewdestination/:id" element={<ViewDestinationById/>} />
            <Route path="/user/viewplaces/:id" element={<ViewPlace/>} />
            <Route path='/user/allpackages' element={<ViewPackages/>}/>
            <Route path='/user/addbooking/:id' element={<AddBooking/>}/>
            <Route path='/user/allbooking' element={<ViewBookingById/>}/>
            <Route path='/user/addreview' element={<Addreviews/>}/>
            <Route path='/user/allreview' element={<AllReviews/>}/>
            <Route path='/user/allreview/edit/:id' element={<EditReview/>}/>
          </Route>

        </Routes>
      </Router>
    </>
  );
}

export default App;

