import { Link } from "react-router-dom";
export default function Header() {
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
              <Link to="/">
                <a href="index.html">Home</a>
              </Link>
            </li>
            <li className="mx-lg-3 mx-md-2 my-md-0 my-1">
              <Link to="/about">
                <a href="about.html">About</a>
              </Link>
            </li>
            <li>
              <Link to="/service">
                <a href="service.html">Services</a>
              </Link>
            </li>           
        
            <li>
            <Link to="/userlocation">
              <a href="Userregister.html">Location</a>
            </Link>
          </li>
          <li>
            <Link to="/allhotels">
              <a>All Hotels</a>
            </Link>
          </li>
          <li>
            <Link to="/allpackages">
              <a>All Packages</a>
            </Link>
          </li>
            
            {/* <li>
              <Link to="/admin/adminlogin">
                <a >Admin-Login</a>
              </Link>
            </li> */}
            <li>
              <Link to="/userlogin">
                <a href="login.html">User-Login</a>
              </Link>
            </li>
            <li>
              <Link to="/register">
                <a href="register.html">Register</a>
              </Link>
            </li>
          </ul>
        </nav>
        {/* <!-- //nav --> */}
      </div>
      {/* <!-- //header --> */}
    </>
  )
}

















