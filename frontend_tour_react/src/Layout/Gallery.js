export default function Gallery(){
return(
    <>
    {/* <!--Gallery--> */}
  <section className="gallery py-lg-4 py-md-3 py-sm-3 py-3">
    <div className="container py-lg-5 py-md-4 py-sm-4 py-3 ">
      <div className="row gallery-info">
        <div className="col-lg-4 main-title-text ">
          <h3 className="title">THE BEAUTY OF INDIA </h3>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6 gallery-img-grid p-0 ">
          <div className="gallery-grids ">
            <a href="#gal1">
              <img src="assets/images/a1.jpg" alt="news image" className="img-fluid"/>
            </a>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6 gallery-img-grid p-0">
          <div className="gallery-grids ">
            <a href="#gal2">
              <img src="assets/images/a2.jpg" alt="news image" className="img-fluid"/>
            </a>
          </div>

        </div>
        <div className="col-lg-4 col-md-6 col-sm-6 gallery-img-grid p-0">
          <div className="gallery-grids">
            <a href="#gal3">
              <img src="assets/images/a111.jpg" alt="news image" className="img-fluid"/>
            </a>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6 gallery-img-grid p-0">
          <div className="gallery-grids">
            <a href="#gal4">
              <img src="assets/images/a112.jpg" alt="news image" className="img-fluid"/>
            </a>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6 gallery-img-grid p-0">
          <div className="gallery-grids">
            <a href="#gal5">
              <img src="assets/images/a113.jpg" alt="news image" className="img-fluid"/>
            </a>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6 gallery-img-grid p-0">
          <div className="gallery-grids">
            <a href="#gal6">
              <img src="assets/images/b1.jpg" alt="news image" className="img-fluid"/>
            </a>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6 gallery-img-grid p-0">
          <div className="gallery-grids">
            <a href="#gal7">
              <img src="assets/images/b2.jpg" alt="news image" className="img-fluid"/>
            </a>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6 gallery-img-grid p-0">
          <div className="gallery-grids">
            <a href="#gal8">
              <img src="assets/images/b3.jpg" alt="news image" className="img-fluid"/>
            </a>
          </div>
        </div>
      </div>
      {/* <!-- popup--> */}
      <div id="gal1" className="popup-effect">
        <div className="popup">
          <img src="assets/images/ab1.jpg" alt="Popup Image" className="img-fluid" />
          <a className="close" href="#gallery">&times;</a>
        </div>
      </div>
      {/* <!-- //popup --> */}
      {/* <!-- popup--> */}
      <div id="gal2" className="popup-effect">
        <div className="popup">
          <img src="assets/images/ab2.jpg" alt="Popup Image" className="img-fluid" />
          <a className="close" href="#gallery">&times;</a>
        </div>
      </div>
      {/* <!-- //popup --> */}
      {/* <!-- popup--> */}
      <div id="gal3" className="popup-effect">
        <div className="popup">
          <img src="assets/images/blog3.jpg" alt="Popup Image" className="img-fluid" />
          <a className="close" href="#gallery">&times;</a>
        </div>
      </div>
      {/* <!-- //popup -->
      <!-- popup--> */}
      <div id="gal4" className="popup-effect">
        <div className="popup">
          <img src="assets/images/blog2.jpg" alt="Popup Image" className="img-fluid" />
          <a className="close" href="#gallery">&times;</a>
        </div>
      </div>
      {/* <!-- //popup -->
      <!-- popup--> */}
      <div id="gal5" className="popup-effect">
        <div className="popup">
          <img src="assets/images/blog1.jpg" alt="Popup Image" className="img-fluid" />
          <a className="close" href="#gallery">&times;</a>
        </div>
      </div>
      {/* <!-- //popup -->
      <!-- popup--> */}
      <div id="gal6" className="popup-effect">
        <div className="popup">
          <img src="assets/images/blog1.jpg" alt="Popup Image" className="img-fluid" />
          <a className="close" href="#gallery">&times;</a>
        </div>
      </div>
      {/* <!-- //popup --> */}
      {/* <!-- popup--> */}
      <div id="gal7" className="popup-effect">
        <div className="popup">
          <img src="assets/images/blog3.jpg" alt="Popup Image" className="img-fluid" />
          <a className="close" href="#gallery">&times;</a>
        </div>
      </div>
      {/* <!-- //popup --> */}
      {/* <!-- popup--> */}
      <div id="gal8" className="popup-effect">
        <div className="popup">
          <img src="assets/images/blog2.jpg" alt="Popup Image" className="img-fluid" />
          <a className="close" href="#gallery">&times;</a>
        </div>
      </div>
      {/* <!-- //popup --> */}
    </div>
  </section>
  {/* <!--//Gallery--> */}
    </>
)
}
