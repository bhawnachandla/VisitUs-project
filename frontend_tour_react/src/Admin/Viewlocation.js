import { useEffect, useState } from "react";
import apiServices, { BASE_URL_IMG } from "../apiServices";
import { toast } from "react-toastify";
import { Link } from 'react-router-dom';
import ClipLoader from 'react-spinners/ClipLoader';

export default function ViewLocation() {
    const [viewDestination, setViewDestination] = useState([]);
    const [loading, setLoading] = useState(true);
    const override = {
        display: "block",
        margin: "0 auto",
        position: "absolute",
        top: "35%",
        zIndex: "1",
    };

    useEffect(() => {
        setLoading(true);
        apiServices.allDestination().then(data => {
            if (data.data.success) {
                // Filter out inactive destinations
                const activeDestinations = data.data.data.filter(destination => destination.status === true);
                setViewDestination(activeDestinations);
            } else {
                toast.error(data.data.message);
            }
            setLoading(false);
        })
        .catch(err => {
            console.log(err);
            toast.error("Something went wrong");
            setLoading(false);
        });
    }, []);

    const changeStatus = (id, status) => {
        console.log(id);
        console.log(status);
        setLoading(true);
        const upstatus = !status;
        let data = { _id: id, status: upstatus };

        apiServices.changeDestinationStatus(data).then(data => {
            if (data.data.success) {
                toast.success(data.data.message);
                // Update the viewDestination state
                setViewDestination(prevDestinations =>
                    prevDestinations.map(destination =>
                        destination._id === id ? { ...destination, status: upstatus } : destination
                    ).filter(destination => destination.status === true)
                );
            } else {
                toast.error(data.data.message);
            }
            setLoading(false);
        }).catch(err => {
            console.log(err);
            toast.error("Something Went Wrong");
            setLoading(false);
        });
    }

    return (
        <>
            <div className="container-fluid p-5">
                <div className="d-flex justify-content-center">
                    <ClipLoader loading={loading} cssOverride={override} size={120} />
                </div>
                <div className="row color-b">
                    <div className="col-md-8 mx-auto mt-5 mb-5 my-5 p-5">
                        <Link to="/admin/addlocation">
                            <button type="button" className='btn btn-dark my-2'>Add Destination</button>
                        </Link>
                        <div className="card color-m">
                            <div className="card-body">
                                <h5 className="card-title">View Destination</h5>
                                <hr />
                                <table className="table table-bordered table-responsive table-hover">
                                    <thead>
                                        <tr>
                                            <th>Sr.No</th>
                                            <th>Destination Image</th>
                                            <th>Destination Name</th>
                                            <th>Status</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {viewDestination?.map((el, index) => (
                                            <tr key={el._id}>
                                                <td>{index + 1}</td>
                                                <td>
                                                    <img className="img-fluid" alt="" src={BASE_URL_IMG + el?.destination_image}
                                                        style={{ height: "100px" }} />
                                                </td>
                                                <td>{el?.destination_name}</td>
                                                <td>{el?.status ? "Active" : "Inactive"}</td>
                                                <td>
                                                    <Link to={`/admin/viewlocation/edit/${el?._id}`}>
                                                        <button type="button" className='btn btn-outline-success mx-2'>Update</button>
                                                    </Link>
                                                    <button type="button" className='btn btn-outline-danger border border-danger ' onClick={() => { changeStatus(el?._id, el?.status) }}>Change Status</button>
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
        </>
    );
}
