
import React from 'react'
import { Link } from 'react-router-dom'

export default function HeaderNew() {
  return (
    <>
     <div class="site-mobile-menu site-navbar-target">
        <div class="site-mobile-menu-header">
          <div class="site-mobile-menu-close mt-3">
            <span class="icon-close2 js-menu-toggle"></span>
          </div>
        </div>
        <div class="site-mobile-menu-body"></div>
      </div>
      <div class="top-bar">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <a href="#" class=""><span class="mr-2  icon-envelope-open-o"></span> <span class="d-none d-md-inline-block">info@yourdomain.com</span></a>
              <span class="mx-md-2 d-inline-block"></span>
              <a href="#" class=""><span class="mr-2  icon-phone"></span> <span class="d-none d-md-inline-block">1+ (234) 5678 9101</span></a>


              <div class="float-right">

                <a href="#" class=""><span class="mr-2  icon-twitter"></span> <span class="d-none d-md-inline-block">Twitter</span></a>
                <span class="mx-md-2 d-inline-block"></span>
                <a href="#" class=""><span class="mr-2  icon-facebook"></span> <span class="d-none d-md-inline-block">Facebook</span></a>

              </div>

            </div>

          </div>

        </div>
      </div>


<header className="site-navbar js-sticky-header site-navbar-target" role="banner">

<div className="container">
  <div className="row align-items-center position-relative">

    <div className="site-logo">
      <a href="" className="text-black">
        {/* <span className="text-primary">Brand</span> */}
        </a>
    </div>

    <div className="col-12">
      <nav className="site-navigation text-right ml-auto" role="navigation">
        <ul className="site-menu main-menu js-clone-nav ml-auto d-none d-lg-block">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/service">Service</Link></li>
          <li><Link to="/register">Register</Link></li>
          <li><Link to="/user/userlocation">Loaction</Link></li>
          <li><Link to="/user/allpackages">Packages</Link></li>
          <li><Link to="/userlogin">Login</Link></li>
          {/* <li className="has-children">
            <a href="#" className="nav-link">About Us</a>
            <ul className="dropdown arrow-top">
              <li><a href="#team-section" className="nav-link">Team</a></li>
              <li><a href="#pricing-section" className="nav-link">Pricing</a></li>
              <li><a href="#faq-section" className="nav-link">FAQ</a></li>
              <li className="has-children">
                <a href="#">More Links</a>
                <ul className="dropdown">
                  <li><a href="#">Menu One</a></li>
                  <li><a href="#">Menu Two</a></li>
                  <li><a href="#">Menu Three</a></li>
                </ul>
              </li>
            </ul>
          </li> */}

          {/* <li><a href="#why-us-section" className="nav-link">Why Us</a></li>

          <li><a href="#testimonials-section" className="nav-link">Testimonials</a></li>
          <li><a href="#blog-section" className="nav-link">Blog</a></li>
          <li><a href="#contact-section" className="nav-link">Contact</a></li> */}
        </ul>
      </nav>

    </div>

    <div className="toggle-button d-inline-block d-lg-none"><a href="#" className="site-menu-toggle py-5 js-menu-toggle text-black"><span className="icon-menu h3"></span></a></div>

  </div>
</div>

</header>


      
    </>
  )
}


