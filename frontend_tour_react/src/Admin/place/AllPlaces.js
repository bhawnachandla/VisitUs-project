import React, { useEffect, useState } from 'react'
import apiServices, { BASE_URL_IMG } from '../../apiServices'
import { toast } from 'react-toastify'
import { Link, useNavigate } from 'react-router-dom'
import ClipLoader from 'react-spinners/ClipLoader';

export default function AllPlaces() {
  const [viewPlaces, setViewPlaces] = useState([]);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const override = {
    display: "block",
    margin: "0 auto",
    position: "absolute",
    top: "35%",
    zIndex: "1",
  }

  useEffect(() => {
    apiServices.allPlaces().then(data => {
      setLoading(false);
      if (data.data.success) {
        console.log(data.data.data);
        setViewPlaces(data.data.data);
      } else {
        toast.error(data.data.message);
      }
    })
    .catch(err => {
      setLoading(false);
      console.log(err);
      toast.error("Something went wrong");
    });
  }, []);

  const changeStatus = (id, status) => {
    setLoading(true);
    const upstatus = !status;
    let data = {
      _id: id,
      Place_status: upstatus
    };
    apiServices.changeStatusPlaces(data).then(data => {
      setLoading(false);
      if (data.data.success) {
        toast.success(data.data.message);
        // Update the local state
        setViewPlaces(prevPlaces => 
          prevPlaces.map(place => 
            place._id === id ? { ...place, Place_status: upstatus } : place
          )
        );
      } else {
        toast.error(data.data.message);
      }
    }).catch(err => {
      setLoading(false);
      toast.error("Something went Wrong");
    });
  }

  return (
    <div>
      <div className="container-fluid p-5 ">
        <div className="d-flex justify-content-center">
          <ClipLoader loading={loading} cssOverride={override} size={120} />
        </div>
        <div className="row color-b " style={{ marginTop: "10%" }}>
          <div className="col-12">
            <div className="card color-m">
              <div className="card-body">
                <h5 className="card-title">View Places</h5>
                <hr />
                <div className='mb-3'>
                  <Link to="/admin/addplace">
                    <button type="" className='btn btn-dark my-2'>Add Place</button>
                  </Link>
                </div>
                <table className='table table-bordered'>
                  <thead className="thead-dark">
                    <tr>
                      <th>Sr.No</th>
                      <th>Place Image</th>
                      <th>Place Name</th>
                      <th>Place Description</th>
                      <th>Destination ID</th>
                      <th>City ID</th>
                      <th>Status</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {viewPlaces.map((el, index) => (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>
                          <img src={BASE_URL_IMG + el?.place_image}
                            style={{ height: "100px", width: "180px" }} />
                        </td>
                        <td>{el?.place_name}</td>
                        <td>{el?.place_description}</td>
                        <td>{el?.destinationId?.destination_name}</td>
                        <td>{el?.cityId?.city_name}</td>
                        {el?.Place_status ? <td>Active</td> : <td>In-active</td>}
                        <td>
                          <Link to={"/admin/allplaces/edit/" + `${el?._id}`}>
                            <button type="submit" className='btn btn-outline-success mx-2 my-1'>Update</button>
                          </Link>
                          <button className='btn btn-outline-danger mx-2' onClick={() => { changeStatus(el?._id, el?.Place_status) }}>Change Status</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
