import { Link, useNavigate } from "react-router-dom";


export default function Adminheader() {
  const authenticate= sessionStorage.getItem('authenticate')
  const navigate= useNavigate()
  const logout=()=>{
    window.alert("Do you really Want To Logout?");
    sessionStorage.clear()
    setTimeout(()=>{
        sessionStorage.setItem("message","Logout Successfully")
        navigate("/userlogin")
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
          
        {/* <li>
            <Link to="/user/userdashboard">
              <a href="Userregister.html">Dashboard</a>
            </Link>
          </li> */}
          <li>
            <Link to="/">
              <a href="login.html">home</a>
            </Link>
          </li>
          <li>
            <Link to="/user/userlocation">
              <a href="Userregister.html">Location</a>
            </Link>
          </li>
          <li>
            <Link to="/user/allhotels">
              <a>All Hotels</a>
            </Link>
          </li>
          <li>
            <Link to="/user/allpackages">
              <a>All Packages</a>
            </Link>
          </li>
          {/* <li>
            <Link to="/user/alltravelling">
              <a>Travelling</a>
            </Link>
          </li>
          <li>
            <Link to="/user/alltransport">
              <a>Transport</a>
            </Link>
          </li> */}
          <li>
            <Link to="/user/allplaces">
              <a>Places</a>
            </Link>
          </li>
          {/* <li>
            <Link to="/user/allcity">
              <a>All Cities</a>
            </Link>
          </li> */}
          <li>
            <Link to="/user/addreview">
              <a>Add Review</a>
            </Link>
          </li>
          {/* <li>
            <Link to="/user/allreview">
              <a>All Reviews</a>
            </Link>
          </li> */}
          <li>
            <Link to="/user/allbooking">
              <a>All Booking</a>
            </Link>
          </li>
         
          
          <li>
          
          {!authenticate?
                <Link to="/register">
                    <a>Register</a>
                </Link>
                :
                <Link>
                <a onClick={logout}>Logout</a>
                </Link>
                }
         
          </li>
        </ul>
      </nav>
      {/* <!-- //nav --> */}
    </div>
    {/* <!-- //header --> */}
  </>
    )
}