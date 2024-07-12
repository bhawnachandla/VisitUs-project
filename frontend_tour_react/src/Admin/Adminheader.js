import { Link, useNavigate } from "react-router-dom";

export default function Adminheader() {
  const authenticateAdmin= sessionStorage.getItem('authenticateAdmin')
  const navigate= useNavigate()
  const logout=()=>{
    window.alert("Do you really Want To Logout?");
    sessionStorage.clear()
    setTimeout(()=>{
        sessionStorage.setItem("message","Logout Successfully")
        navigate("/adminlogin")
    },500)
}

    return (
        <>
        {/* <!-- header --> */}
      <div className="headder-top">
      {/* <!-- nav --> */}
      <nav>
        <div id="logo">
          <h1>
            <a href="index.html">VISITUS</a>
            </h1>
        </div>
        {/* <label for="drop" className="toggle">Menu</label> */}
        <ul className="menu mt-2">
          <li className="active">
            <Link to="/admin">
              {/* <a>Dashboard</a> */}
            </Link>
          </li>
          <li>
            <Link to="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
              <Link to="/admin/allcity">
                  <a>City</a>
              </Link>
          </li>  
          <li>
                   <Link to="/admin/viewpackages">
                        <a href="register.html">Packages</a>
                      </Link>
                    </li>  
            
                  <li>
                      <Link to="/admin/viewlocation">
                        <a>location</a>
                      </Link>
                    </li>
                    {/* <li>
                      <Link to="/admin/alltransport">
                        <a>Transport</a>
                      </Link>
                    </li> */}
                    <li>
                      <Link to="/admin/alltransportcompany">
                        <a>Transport Company</a>
                      </Link>
                    </li>
                  <li>
                      <Link to="/admin/allplace">
                          <a>Places</a>
                      </Link>
                      </li>   
            <li>
                  <Link to="/admin/allhotels">
                        <a>Hotels</a>
                      </Link>
                    </li>
                    {/* <li>
                        <Link to="/admin/alltravelling">
                          <a>Travelling</a>
                        </Link>
                      </li> */}
                  <li>
                      <Link to="/admin/allbooking">
                          <a>Booking</a>
                        </Link>
                  </li>
                  <li>
                      <Link to="/admin/allreview">
                          <a>Reviews</a>
                        </Link>
                  </li>
                  <li>
          
          {!authenticateAdmin?
                <Link to="/adminlogin">
                    <a>Login</a>
                </Link>
                :
                <Link>
                <a onClick={logout}>Logout</a>
                </Link>
                }
         
          </li>
                

        
          <li>
          {/* <Link to="/admin">
              <a href="admin.html">Admin</a>
            </Link> */}
          </li>
        </ul>
      </nav>
      {/* <!-- //nav --> */}
    </div>
    {/* <!-- //header --> */}
  </>
    )
}