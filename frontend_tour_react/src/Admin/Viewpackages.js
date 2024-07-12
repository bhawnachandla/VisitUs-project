import { useEffect, useState } from "react";
import apiServices from "../apiServices";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
export default function Viewpackages() {
  const [packages, setPackages] = useState();
  const [loading, setLoading] = useState(true);
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
    }, 1000);
    apiServices
      .allPackages()
      .then((data) => {
        if (data.data.success) {
          setPackages(data.data.data);
        } else {
          toast.error(data.data.message);
        }
      })
      .catch((err) => {
        toast.error("Something went wrong");
      });
  }, [loading]);
  const changeStatus = (id, status) => {
    console.log(id);
    console.log(status);
    setLoading(true);
    if (status == true) {
      var upstatus = false;
    } else {
      var upstatus = true;
    }
    let data = {
      _id: id,
      packageStatus: upstatus,
    };
    apiServices
      .changePackagesStatus(data)
      .then((data) => {
        setTimeout(() => {
          setLoading(false);
        }, 1500);

        if (data.data.success) {
          toast.success(data.data.message);
        } else {
          console.log(data.data);
          toast.error(data.data.message);
        }
      })
      .catch((err) => {
        toast.error("Something Went Wrong");
      });
  };
  return (
    <>
      <div className="container-fluid p-5 ">
        <div className="d-flex justify-content-center">
          <ClipLoader loading={loading} cssOverride={override} size={120} />
        </div>
        <div className="row color-b">
          <div className="col-md-12 mx-auto my-3">
            <div class="card color-m ">
              <div class="card-body " style={{ marginTop: "8%" }}>
                <h5 class="card-title">View Packages</h5>
                <hr />
                <Link to="/admin/addpackages">
                  <button type="" className="btn btn-dark my-2 ">
                    Add Packages
                  </button>
                </Link>
                <table className="table table-bordered table-responsive table-striped">
                  <thead>
                    <tr>
                      <th>Sr.No</th>
                      <th>Package name</th>
                      <th>Number of persons</th>
                      <th>Package Cost</th>
                      <th>Destination</th>
                      <th>Place</th>
                      <th>Transport</th>
                      <th>Package Status</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {packages?.map((el, index) => (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{el?.package_name}</td>
                        <td>{el?.no_of_person}</td>
                        <td>{el?.package_cost}</td>
                        <td>{el.destinationId?.destination_name}</td>
                        <td>{el.placeId?.place_name}</td>
                        <td>
                          {el?.transport?.map((data, i) => (
                            <p>
                              Tranpsort Name: {data?.transport_name}, Transport
                              Cost: {data?.cost}
                            </p>
                          ))}
                        </td>
                        {el?.packageStatus ? (
                          <td>Active</td>
                        ) : (
                          <td>In-active</td>
                        )}
                        <td>
                          <Link to={"/admin/viewpackages/edit/" + `${el?._id}`}>
                            <button
                              type="submit"
                              className="btn btn-outline-success  my-2 mx-1"
                            >
                              Update
                            </button>
                          </Link>
                          <button
                            type="submit"
                            className="btn btn-outline-danger mx-1 my-2"
                            onClick={() => {
                              changeStatus(el?._id, el?.packageStatus);
                            }}
                          >
                            Change Status
                          </button>
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
