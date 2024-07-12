import React, { useEffect, useState } from 'react';
import apiServices, { BASE_URL_IMG } from '../../apiServices';
import { toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';
import ClipLoader from 'react-spinners/ClipLoader';

export default function AllHotels() {
  const [allHotels, setAllHotels] = useState();
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const override = {
    display: "block",
    margin: "0 auto",
    position: "absolute",
    top: "35%",
    zIndex: "1",
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
    apiServices.viewAllHotels().then((data) => {
      console.log(data.data);
      if (data.data.success) {
        // toast.success("Data Loaded")
        // console.log(data.data.data)
        setAllHotels(data.data.data);
      } else {
        toast.error(data.data.message);
      }
    })
    .catch((err) => {
      console.log(err);
      toast.error("Something Went Wrong");
    });
  }, []);

  const changeStatus = (id, status) => {
    setLoading(true);
    const upstatus = !status;
    let data = {
      _id: id,
      hotel_status: upstatus,
    };
    apiServices.changeHotelStatus(data).then((data) => {
      setTimeout(() => {
        setLoading(false);
      }, 2000);
      if (data.data.success) {
        toast.success(data.data.message);
      } else {
        toast.error(data.data.message);
      }
    }).catch((err) => {
      toast.error("Something went Wrong");
    });
  };

  return (
    <div>
      <div className='p-5'></div>
      <div className="d-flex justify-content-center">
        <ClipLoader loading={loading} cssOverride={override} size={120} />
      </div>

      <div className='pt-5 pl-5'>
      <h2 className='text-center my-4'>Hotels</h2>
        <Link to="/admin/addhotels">
          <button type="" className='btn btn-dark my-2'>Add Hotel</button>
        </Link>
      </div>
      <div className='col-12'>
        <table className='table table-bordered'>
          <thead className="thead-dark">
            <tr>
              <th>SNo</th>
              <th>Hotel Image</th>
              <th>Hotel Name</th>
              <th>Hotel Description</th>
              <th>Price Per Day</th>
              <th>Hotel Email</th>
              <th>Hotel Contact</th>
              <th>Hotel Location</th>
              <th>Place</th>
              <th>Destination</th>
              <th>City</th>
              <th>Hotel Address</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {allHotels?.map((data, i) => (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>
                  <img src={BASE_URL_IMG + data?.hotel_image} className="img-fluid" style={{ height: "150px", width: "150px" }} />
                </td>
                <td>{data?.hotel_name}</td>
                <td style={{ width: "300px" }}>{data?.hotel_description}</td>
                <td>{data?.per_day_price}</td>
                <td>{data?.hotel_email}</td>
                <td>{data?.hotel_contact}</td>
                <td>{data?.hotel_location}</td>
                <td>{data?.placesId?.place_name}</td>
                <td>{data?.destinationId?.destination_name}</td>
                <td>{data?.cityId?.city_name}</td>
                <td>{data?.hotel_address}</td>
                {data?.hotel_status ? <td>Active</td> : <td>In-active</td>}
                <td style={{ width: "300px" }}>
                  <Link to={"/admin/allhotels/edit/" + `${data?._id}`}>
                    <button type="submit" className='btn btn-outline-success mx-1 my-1'>Update</button>
                  </Link>
                  <button type="submit" className='btn btn-outline-danger mx-1 my-1' onClick={() => { changeStatus(data?._id, data?.hotel_status) }}>Change Status</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
