import { useEffect, useState } from "react";
import apiServices, { BASE_URL_IMG } from "../apiServices";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import ClipLoader from 'react-spinners/ClipLoader';

export default function UserLocation() {
    const [loading, setLoading] = useState(true);
    const override = {
        display: "block",
        margin: "0 auto",
        position: "absolute",
        top: "35%",
        zIndex: "1",
    };
    const [viewDestination, setViewDestination] = useState([]);

    useEffect(() => {
        apiServices.customerAllDestination().then(data => {
            setTimeout(() => {
                setLoading(false);
            }, 1500);
            console.log(data.data.data);
            if (data.data.success) {
                // Filter out inactive destinations
                const activeDestinations = data.data.data.filter(destination => destination.status === true);
                setViewDestination(activeDestinations);
            } else {
                toast.error(data.data.message);
            }
        })
        .catch(err => {
            console.log(err);
            toast.error("Something went wrong");
        });
    }, [loading]);

    return (
        <>
            <div className="p-5"></div>
            <div className="container-fluid row p-5">
                <div className="d-flex justify-content-center">
                    <ClipLoader loading={loading} cssOverride={override} size={120} />
                </div>
                {viewDestination?.map((data, i) => (
                    <div className="card mx-4 my-3" style={{ width: "300px" }} key={i}>
                        <img className="card-img-top mx-auto" style={{ height: "150px", width: "170px" }} src={BASE_URL_IMG + data?.destination_image} alt="Card image cap" />
                        <div className="card-body mx-auto">
                            <p className="card-text fs-4">{data.destination_name}</p>
                            {!!sessionStorage.getItem("token") ?
                                <Link to={"/user/viewplaces/" + `${data?._id}`}>
                                    <a href="#" className="btn btn-dark mx-auto my-2">View Places</a>
                                </Link>
                                :
                                <Link to={"/viewplaces/" + `${data?._id}`}>
                                    <a href="#" className="btn btn-dark mx-auto my-2">View Places</a>
                                </Link>
                            }
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}
