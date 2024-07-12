import axios from "axios";
import * as qs from "qs";
const BASE_URL = "http://localhost:9000/";
export const BASE_URL_IMG = "http://localhost:9000/";
const token = sessionStorage.getItem("token");

console.log(token);
const header = {
  Authorization: token,
};
class apiServices {
  adminLogin(data) {
    console.log(data);
    return axios.post(BASE_URL + "admin/adminLogin", data);
  }
  customerLogin(data) {
    return axios.post(BASE_URL + "customer/userLogin", data);
  }

  // Destinaion API
  addDestination(data) {
    console.log(data);
    let header = {
      Authorization: sessionStorage.getItem("token"),
    };
    return axios.post(BASE_URL + "admin/addDestination", data, {
      headers: header,
    });
  }
  allDestination(data) {
    // console.log(data)
    let header = {
      Authorization: sessionStorage.getItem("token"),
    };
    return axios.post(BASE_URL + "admin/allDestination", data, {
      headers: header,
    });
  }
  destinationById(data) {
    let header = {
      Authorization: sessionStorage.getItem("token"),
    };
    return axios.post(BASE_URL + "admin/manageDestinationById", data, {
      headers: header,
    });
  }
  updateDestination(data) {
    let header = {
      Authorization: sessionStorage.getItem("token"),
    };
    return axios.post(BASE_URL + "admin/updateDestination", data, {
      headers: header,
    });
  }
  changeDestinationStatus(data) {
    let header = {
      Authorization: sessionStorage.getItem("token"),
    };
    return axios.post(
      BASE_URL + "admin/changeDestinationStatus",
      qs.stringify(data),
      { headers: header }
    );
  }

  // Place API

  addPlaces(data) {
    let header = {
      Authorization: sessionStorage.getItem("token"),
    };
    return axios.post(BASE_URL + "admin/addPlaces", data, { headers: header });
  }
  allPlaces(data) {
    console.log(data);
    let header = {
      Authorization: sessionStorage.getItem("token"),
    };
    return axios.post(BASE_URL + "admin/allPlaces", data, { headers: header });
  }
  viewPlaceByID(data) {
    let header = {
      Authorization: sessionStorage.getItem("token"),
    };
    return axios.post(BASE_URL + "admin/viewplacesById", data, {
      headers: header,
    });
  }
  updatePlaces(data) {
    let header = {
      Authorization: sessionStorage.getItem("token"),
    };
    return axios.post(BASE_URL + "admin/updatePlaces", data, {
      headers: header,
    });
  }
  changeStatusPlaces(data) {
    let header = {
      Authorization: sessionStorage.getItem("token"),
    };
    return axios.post(
      BASE_URL + "admin/changeStatusPlaces",
      qs.stringify(data),
      { headers: header }
    );
  }

  // City API
  addCity(data) {
    console.log(data);
    let header = {
      Authorization: sessionStorage.getItem("token"),
    };
    return axios.post(BASE_URL + "admin/addCity", data, { headers: header });
  }
  viewAllCity(data) {
    let header = {
      Authorization: sessionStorage.getItem("token"),
    };
    return axios.post(BASE_URL + "admin/viewAllCity", data, {
      headers: header,
    });
  }
  viewcitiesById(data) {
    let header = {
      Authorization: sessionStorage.getItem("token"),
    };
    return axios.post(BASE_URL + "admin/viewcitiesById", data, {
      headers: header,
    });
  }
  updateCity(data) {
    let header = {
      Authorization: sessionStorage.getItem("token"),
    };
    return axios.post(BASE_URL + "admin/updateCity", data, { headers: header });
  }
  changeStatusCity(data) {
    let header = {
      Authorization: sessionStorage.getItem("token"),
    };
    return axios.post(BASE_URL + "admin/changeStatusCity", qs.stringify(data), {
      headers: header,
    });
  }

  // Hotels API
  addHotels(data) {
    let header = {
      Authorization: sessionStorage.getItem("token"),
    };
    return axios.post(BASE_URL + "admin/addHotels", data, { headers: header });
  }
  viewAllHotels(data) {
    let header = {
      Authorization: sessionStorage.getItem("token"),
    };
    return axios.post(BASE_URL + "admin/viewAllhotels", data, {
      headers: header,
    });
  }
  viewHotelsById(data) {
    let header = {
      Authorization: sessionStorage.getItem("token"),
    };
    return axios.post(BASE_URL + "admin/viewHotelsById", data, {
      headers: header,
    });
  }
  updateHotels(data) {
    let header = {
      Authorization: sessionStorage.getItem("token"),
    };
    return axios.post(BASE_URL + "admin/updateHotels", data, {
      headers: header,
    });
  }
  changeHotelStatus(data) {
    let header = {
      Authorization: sessionStorage.getItem("token"),
    };
    return axios.post(
      BASE_URL + "admin/changeHotelStatus",
      qs.stringify(data),
      { headers: header }
    );
  }

  // User API

  userRegister(data) {
    console.log(data);
    return axios.post(BASE_URL + "customer/userRegister", data);
  }
  userLogin(data) {
    console.log(sessionStorage.getItem("user-token"));
    console.log(sessionStorage.getItem("token"));
    let header = {
      Authorization: sessionStorage.getItem("user-token"),
    };
    return axios.post(BASE_URL + "customer/userLogin", data, {
      headers: header,
    });
  }

  // Travelling API

  addTravelling(data) {
    let header = {
      Authorization: sessionStorage.getItem("token"),
    };
    return axios.post(BASE_URL + "admin/addTravelling", data, {
      headers: header,
    });
  }
  viewAllTravelling(data) {
    let header = {
      Authorization: sessionStorage.getItem("token"),
    };
    return axios.post(BASE_URL + "admin/viewAllTravelling", data, {
      headers: header,
    });
  }
  viewAllTravellingById(data) {
    let header = {
      Authorization: sessionStorage.getItem("token"),
    };
    return axios.post(BASE_URL + "admin/viewAllTravellingById", data, {
      headers: header,
    });
  }
  updateTravelling() {
    let header = {
      Authorization: sessionStorage.getItem("token"),
    };
    return axios.post(BASE_URL + "admin/updateTravelling");
  }
  changeStatusTravelling(data) {
    let header = {
      Authorization: sessionStorage.getItem("token"),
    };
    return axios.post(
      BASE_URL + "admin/changeStatusTravelling",
      qs.stringify(data),
      { headers: header }
    );
  }
  getAllUser(data) {
    let header = {
      Authorization: sessionStorage.getItem("token"),
    };
    return axios.post(BASE_URL + "admin/viewAllUser");
  }

  // Booking API
  allBooking(data) {
    let header = {
      Authorization: sessionStorage.getItem("token"),
    };
    return axios.post(BASE_URL + "admin/allBooking", data, { headers: header });
  }
  viewBookingById(data) {
    let header = {
      Authorization: sessionStorage.getItem("token"),
    };
    return axios.post(BASE_URL + "admin/viewBookingById", data, {
      headers: header,
    });
  }
  changeStatusBooking(data) {
    let header = {
      Authorization: sessionStorage.getItem("token"),
    };
    return axios.post(
      BASE_URL + "admin/changeStatusBooking",
      qs.stringify(data),
      { headers: header }
    );
  }
  // Transport API
  addTransport(data) {
    let header = {
      Authorization: sessionStorage.getItem("token"),
    };
    return axios.post(BASE_URL + "admin/addTransport", data, {
      headers: header,
    });
  }
  allTransport(data) {
    let header = {
      Authorization: sessionStorage.getItem("token"),
    };
    return axios.post(BASE_URL + "admin/allTransport", data, {
      headers: header,
    });
  }
  viewTransportById(data) {
    let header = {
      Authorization: sessionStorage.getItem("token"),
    };
    return axios.post(BASE_URL + "admin/viewTransportById", data, {
      headers: header,
    });
  }
  updateTransport(data) {
    let header = {
      Authorization: sessionStorage.getItem("token"),
    };
    return axios.post(BASE_URL + "admin/updateTransport", data, {
      headers: header,
    });
  }
  changeTransportStatus(data) {
    let header = {
      Authorization: sessionStorage.getItem("token"),
    };
    return axios.post(
      BASE_URL + "admin/changeTransportStatus",
      qs.stringify(data),
      { headers: header }
    );
  }

  // packages API

  addPackages(data) {
    let header = {
      Authorization: sessionStorage.getItem("token"),
    };
    console.log(data);
    return axios.post(BASE_URL + "admin/addPackages", data, {
      headers: header,
    });
  }
  allPackages(data) {
    let header = {
      Authorization: sessionStorage.getItem("token"),
    };
    return axios.post(BASE_URL + "admin/allPackages", data, {
      headers: header,
    });
  }
  viewPackageById(data) {
    let header = {
      Authorization: sessionStorage.getItem("token"),
    };
    return axios.post(BASE_URL + "admin/viewPackagesById", data, {
      headers: header,
    });
  }
  updatePackage(data) {
    let header = {
      Authorization: sessionStorage.getItem("token"),
    };
    return axios.post(BASE_URL + "admin/updatePackages", data, {
      headers: header,
    });
  }
  changePackagesStatus(data) {
    let header = {
      Authorization: sessionStorage.getItem("token"),
    };
    return axios.post(
      BASE_URL + "admin/changePackagesStatus",
      qs.stringify(data),
      { headers: header }
    );
  }

  //reviews API
  allReviews(data) {
    let header = {
      Authorization: sessionStorage.getItem("token"),
    };
    return axios.post(BASE_URL + "admin/allReviews", data, { headers: header });
  }
  viewReviewsById(data) {
    let header = {
      Authorization: sessionStorage.getItem("token"),
    };
    return axios.post(BASE_URL + "viewsReviewsById", data, { headers: header });
  }
  changeReviewStatus(data) {
    let header = {
      Authorization: sessionStorage.getItem("token"),
    };
    return axios.post(
      BASE_URL + "admin/changeReviewStatus",
      qs.stringify(data),
      { headers: header }
    );
  }

  //  Transport Company API

  addTransportCompany(data) {
    console.log(data.data);
    let header = {
      Authorization: sessionStorage.getItem("token"),
    };
    return axios.post(BASE_URL + "admin/addTransportCompany", data, {
      headers: header,
    });
  }
  viewAllTransportCompany(data) {
    let header = {
      Authorization: sessionStorage.getItem("token"),
    };
    return axios.post(BASE_URL + "admin/viewAllTransportCompany", data, {
      headers: header,
    });
  }
  viewTransportCompanyById(data) {
    let header = {
      Authorization: sessionStorage.getItem("token"),
    };
    return axios.post(BASE_URL + "admin/viewTransportCompanyById", data, {
      headers: header,
    });
  }
  updateTransportCompany(data) {
    let header = {
      Authorization: sessionStorage.getItem("token"),
    };
    return axios.post(BASE_URL + "admin/updateTransportCompany", data, {
      headers: header,
    });
  }
  changeTransportCompanyStatus(data) {
    let header = {
      Authorization: sessionStorage.getItem("token"),
    };
    return axios.post(
      BASE_URL + "admin/changeTransportCompanyStatus",
      qs.stringify(data),
      { headers: header }
    );
  }

  // Transport Company Price
  addTransportCompanyPricing(data) {
    let header = {
      Authorization: sessionStorage.getItem("token"),
    };
    return axios.post(BASE_URL + "admin/addTransportCompanyPricing", data, {
      headers: header,
    });
  }
  viewAllTransportCompanyPricing(data) {
    let header = {
      Authorization: sessionStorage.getItem("token"),
    };
    return axios.post(BASE_URL + "admin/viewAllTransportCompanypricing", data, {
      headers: header,
    });
  }
  viewTransportCompanyPricingById(data) {
    let header = {
      Authorization: sessionStorage.getItem("token"),
    };
    return axios.post(
      BASE_URL + "admin/viewTransportCompanyPricingById",
      data,
      { headers: header }
    );
  }
  updateTransportCompanyPricing(data) {
    let header = {
      Authorization: sessionStorage.getItem("token"),
    };
    return axios.post(BASE_URL + "admin/updateTransportCompanyPricing", data, {
      headers: header,
    });
  }
  changeTransportCompanyPricingStatus(data) {
    let header = {
      Authorization: sessionStorage.getItem("token"),
    };
    return axios.post(
      BASE_URL + "admin/changeTransportCompanyPricingStatus",
      qs.stringify(data),
      { headers: header }
    );
  }

  // Transport Orders API

  addTransportOrder(data) {
    let header = {
      Authorization: sessionStorage.getItem("token"),
    };
    return axios.post(BASE_URL + "admin/addTransportOrder", data, {
      headers: header,
    });
  }
  viewAllOrders(data) {
    let header = {
      Authorization: sessionStorage.getItem("token"),
    };
    return axios.post(BASE_URL + "admin/viewallOrders", data, {
      headers: header,
    });
  }
  viewTransportOrdersById(data) {
    let header = {
      Authorization: sessionStorage.getItem("token"),
    };
    return axios.post(BASE_URL + "admin/viewTransportOrdersById", data, {
      headers: header,
    });
  }
  updateTransportOrders(data) {
    let header = {
      Authorization: sessionStorage.getItem("token"),
    };
    return axios.post(
      BASE_URL + "admin/updateTransportOrders",
      qs.stringify(data),
      { headers: header }
    );
  }
  changeTransportOrderStatus(data) {
    let header = {
      Authorization: sessionStorage.getItem("token"),
    };
    return axios.post(BASE_URL + "admin/changeTransportOderStatus", data, {
      headers: header,
    });
  }
  // USER API
  customerAllDestination(data) {
    return axios.post(BASE_URL + "customer/viewAllDestination", data);
  }
  customerDestinationById(data) {
    return axios.post(BASE_URL + "customer/viewDestinationById", data);
  }
  customerAllPlaces(data) {
    return axios.post(BASE_URL + "customer/viewAllPlaces", data);
  }
  customerViewPlaceById(data) {
    return axios.post(BASE_URL + "customer/viewPlacesById", data);
  }
  customerAllHotels(data) {
    return axios.post(BASE_URL + "customer/viewAllHotels", data);
  }
  customerViewHotelById(data) {
    return axios.post(BASE_URL + "customer/viewHotelById", data);
  }
  customerAllCity(data) {
    return axios.post(BASE_URL + "customer/viewAllCity", data);
  }
  customerAddBooking(data) {
    let header = {
      Authorization: sessionStorage.getItem("user-token"),
    };
    return axios.post(BASE_URL + "customer/addBooking", data, {
      headers: header,
    });
  }

  customerAllTransport(data) {
    return axios.post(BASE_URL + "customer/viewAllTransport", data);
  }
  customerViewtransportById(data) {
    return axios.post(BASE_URL + "customer/viewTransportById", data);
  }
  customerViewPackageById(data) {
    let header = {
      Authorization: sessionStorage.getItem("user-token"),
    };
    return axios.post(BASE_URL + "customer/viewPackagesById", data, {
      headers: header,
    });
  }
  customerViewPackage(data) {
    let header = {
      Authorization: sessionStorage.getItem("user-token"),
    };
    return axios.post(BASE_URL + "customer/allPackages", qs.stringify(data), {
      headers: header,
    });
  }
  customerViewPackagById(data) {
    let header = {
      Authorization: sessionStorage.getItem("user-token"),
    };
    return axios.post(BASE_URL + "customer/viewPackagesById", data, {
      headers: header,
    });
  }
  customerViewAllTravelling(data) {
    return axios.post(BASE_URL + "customer/viewAllTravelling", data);
  }
  customerViewTravellingById(data) {
    return axios.post(BASE_URL + "customer/viewTravellingById", data);
  }
  customerAllTransportCompany(data) {
    let header = {
      Authorization: sessionStorage.getItem("user-token"),
    };
    return axios.post(BASE_URL + "customer/viewAllTransportCompany", data, {
      headers: header,
    });
  }

  customerTransportCompanyPricing(data) {
    let header = {
      Authorization: sessionStorage.getItem("user-token"),
    };
    return axios.post(
      BASE_URL + "customer/viewAllTransportCompanypricing",
      data,
      { headers: header }
    );
  }
  customerAddReview(data) {
    let header = {
      Authorization: sessionStorage.getItem("user-token"),
    };
    return axios.post(BASE_URL + "customer/addReviews", data, {
      headers: header,
    });
  }
  customerAllReview(data) {
    let header = {
      Authorization: sessionStorage.getItem("user-token"),
    };
    return axios.post(BASE_URL + "customer/allReviews", data, {
      headers: header,
    });
  }
  customerUpdateReview(data) {
    let header = {
      Authorization: sessionStorage.getItem("user-token"),
    };
    return axios.post(BASE_URL + "customer/updateReviews", data, {
      headers: header,
    });
  }
  customerViewReviewById(data) {
    let header = {
      Authorization: sessionStorage.getItem("user-token"),
    };
    return axios.post(BASE_URL + "customer/viewReviewById", data, {
      headers: header,
    });
  }
  viewBookings(data) {
    let header = {
      Authorization: sessionStorage.getItem("user-token"),
    };
    return axios.post(BASE_URL + "admin/allBooking", data, { headers: header });
  }
}

export default new apiServices();
