import { Link } from "react-router-dom"; 

export default function Service() {
  return (
    <>
      {/* <!-- service --> */}
      <section className="service py-lg-4 py-md-3 py-sm-3 py-3" id="service">
        <div className="container-fluid py-lg-5 py-md-4 py-sm-4 py-3 mt-5 p-5">
          <div className="row">
            <div className="col-lg-4 main-title-text mt-5 p-5">
              <h3 className="title">Themes You Can Explore</h3>
            </div>
            <div className="col-lg-8 mt-5 p-5">
              <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-6 service-grid-wthree text-center ">
                  <div className="ser-fashion-grid">
                    <div className="about-icon mb-md-4 mb-3 ">
                      <span className="fa fa-heart" aria-hidden="true"></span>
                    </div>
                    <div className="ser-sevice-grid ">
                      <h4 className="pb-3">WILDLIFE</h4>

                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 service-grid-wthree text-center">
                  <div className="ser-fashion-grid">
                    <div className="about-icon mb-md-4 mb-3">
                      <span className="fa fa-picture-o" aria-hidden="true"></span>
                    </div>
                    <div className="ser-sevice-grid">
                      <h4 className="pb-3">HERITAGE</h4>
                      {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nibh urna</p> */}
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 service-grid-wthree text-center">
                  <div className="ser-fashion-grid">
                    <div className="about-icon mb-md-4 mb-3">
                      <span className="fa fa-bank" aria-hidden="true"></span>
                    </div>
                    <div className="ser-sevice-grid">
                      <h4 className="pb-3">PILGRIMAGE</h4>
                      {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nibh urna</p> */}
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 mt-lg-4 mt-3 service-grid-wthree text-center">
                  <div className="ser-fashion-grid">
                    <div className="about-icon mb-md-4 mb-3">
                      <span className="fa fa-cab" aria-hidden="true"></span>
                    </div>
                    <div className="ser-sevice-grid">
                      <h4 className="pb-3">HILLSTATION</h4>
                      {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nibh urna</p> */}
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 mt-lg-4 mt-3 service-grid-wthree text-center">
                  <div className="ser-fashion-grid">
                    <div className="about-icon mb-md-4 mb-3">
                      <span className="fa fa-binoculars" aria-hidden="true"></span>
                    </div>
                    <div className="ser-sevice-grid">
                      <h4 className="pb-3">ADVENTURE</h4>
                      {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nibh urna</p> */}
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 mt-lg-4 mt-3 service-grid-wthree text-center">
                  <div className="ser-fashion-grid">
                    <div className="about-icon mb-md-4 mb-3">
                      <span className="fa fa-glass" aria-hidden="true"></span>
                    </div>
                    <div className="ser-sevice-grid">
                      <h4 className="pb-3">BEACH</h4>
                      {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nibh urna</p> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--//service --> */}
      {/* <!-- Booking-here --> */}
      <section className="booking py-lg-4 py-md-3 py-sm-3 py-3">
        <div className="container py-lg-5 py-md-4 py-sm-4 py-3">
          <div className="booking-here text-center">
            <h5>Let's book a Perfect Hotel for you & your family</h5>
            {/* <p className="mt-lg-4 mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit.Vestibulum nibh urna Lorem ipsum dolor sit amet, consectetur
              adipiscing elit.Vestibulum nibh urna</p> */}
            <div className="view-buttn mt-md-4 mt-sm-4 mt-3">
           

            <Link to="/contact"> <a href="contact.html" className="btn">Book Here</a></Link>
            </div>
          </div>
        </div>
      </section>
      {/* <!--//Booking-here --> */}
      {/* <!-- price --> */}
      <section className="price py-lg-4 py-md-3 py-sm-3 py-3" id="price">
        <div className="container-fluid                   py-lg-5 py-md-4 py-sm-4 py-3">
          <div className="row">
            <div className="col-lg-8">
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-6 pricing-grid">
                  <div className=" w3ls-bottom">
                    <span className="fa fa-credit-card mb-lg-5 mb-md-4 mb-3" aria-hidden="true"></span>
                    <h4 className="mb-lg-4 mb-md-3 mb-3">Package 1 (North-East)</h4>
                    <p>This package offers exploring North-East side of India which covers Kashmir, Punjab, Delhi, Assam, Sikkim and Nagaland.</p>
                    <h4 className="pt-3"> Rs 35,000/-
                     
                    </h4>
                    <div className="view-buttn mt-md-4 mt-sm-4 mt-3">
                      {/* <a href="contact.html" className="btn">Book Here</a> */}
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 pricing-grid">
                  <div className=" w3ls-bottom">
                    <span className="fa fa-credit-card mb-lg-5 mb-md-4 mb-3" aria-hidden="true"></span>
                    <h4 className="mb-lg-4 mb-md-3 mb-3">Package 2 (South-West)</h4>
                    <p>This package offers exploring South-West side of India which covers Andhra Pradesh,Kerala, and Tamil Nadu.</p>
                    <h4 className="pt-3">Rs 35,000/-
                      {/* <span className="sup-doller">$</span> */}
                    </h4>
                    <div className="view-buttn mt-md-4 mt-sm-4 mt-3">
                      {/* <a href="contact.html" className="btn">Book Here</a> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 main-title-text">
              <h3 className="title">Our Pricing Package</h3>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- price --> */}

      {/* <!-- Booking-here --> */}
      <section className="booking py-lg-4 py-md-3 py-sm-3 py-3">
        <div className="container py-lg-5 py-md-4 py-sm-4 py-3">
          <div className="booking-here text-center">
            <h5>Let's book a Perfect Hotel for you & your family</h5>
            {/* <p className="mt-lg-4 mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit.Vestibulum nibh urna Lorem ipsum dolor sit amet, consectetur
              adipiscing elit.Vestibulum nibh urna</p> */}
            <div className="view-buttn mt-md-4 mt-sm-4 mt-3">
           

            <Link to="/contact"> <a href="contact.html" className="btn">Book Here</a></Link>
            </div>
          </div>
        </div>
      </section>
      {/* <!--//Booking-here --> */}

      {/* <!-- service --> */}
      <section className="service py-lg-4 py-md-3 py-sm-3 py-3" id="service">
        <div className="container-fluid py-lg-5 py-md-4 py-sm-4 py-3 mt-5 p-5">
          <div className="row">
            <div className="col-lg-4 main-title-text mt-5 p-5">
              <h3 className="title">Packages as per the Location</h3>
            </div>
            <div className="col-lg-8 mt-5 p-5">
              <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-6 service-grid-wthree text-center ">
                  <div className="ser-fashion-grid">
                    <div className="about-icon mb-md-4 mb-3 ">
                      <span className="fa fa-heart" aria-hidden="true"></span>
                    </div>
                    <div className="ser-sevice-grid ">
                      <h4 className="pb-3">ASSAM</h4>

                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 service-grid-wthree text-center">
                  <div className="ser-fashion-grid">
                    <div className="about-icon mb-md-4 mb-3">
                      <span className="fa fa-picture-o" aria-hidden="true"></span>
                    </div>
                    <div className="ser-sevice-grid">
                      <h4 className="pb-3">DELHI</h4>
                      {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nibh urna</p> */}
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 service-grid-wthree text-center">
                  <div className="ser-fashion-grid">
                    <div className="about-icon mb-md-4 mb-3">
                      <span className="fa fa-bank" aria-hidden="true"></span>
                    </div>
                    <div className="ser-sevice-grid">
                      <h4 className="pb-3">KASHMIR</h4>
                      {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nibh urna</p> */}
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 mt-lg-4 mt-3 service-grid-wthree text-center">
                  <div className="ser-fashion-grid">
                    <div className="about-icon mb-md-4 mb-3">
                      <span className="fa fa-cab" aria-hidden="true"></span>
                    </div>
                    <div className="ser-sevice-grid">
                      <h4 className="pb-3">GUJRAT</h4>
                      {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nibh urna</p> */}
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 mt-lg-4 mt-3 service-grid-wthree text-center">
                  <div className="ser-fashion-grid">
                    <div className="about-icon mb-md-4 mb-3">
                      <span className="fa fa-binoculars" aria-hidden="true"></span>
                    </div>
                    <div className="ser-sevice-grid">
                      <h4 className="pb-3">KERELA</h4>
                      {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nibh urna</p> */}
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 mt-lg-4 mt-3 service-grid-wthree text-center">
                  <div className="ser-fashion-grid">
                    <div className="about-icon mb-md-4 mb-3">
                      <span className="fa fa-glass" aria-hidden="true"></span>
                    </div>
                    <div className="ser-sevice-grid">
                      <h4 className="pb-3">GOA</h4>
                      {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nibh urna</p> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--//service --> */}
    </>
  )
}