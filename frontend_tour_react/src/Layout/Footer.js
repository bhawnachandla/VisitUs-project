export default function Footer(){
    return(
        <>
        {/* <!-- footer --> */}
  <footer className="py-lg-3 py-md-2 py-sm-3 py-2">
    <div className="container py-lg-4 py-md-4 py-sm-3 py-3">
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-6 footer-bottom-txt">
          <h2>
            <a href="index.html">VISITus</a>
          </h2>
          <p className="pt-lg-4 pt-3">© 2023 VISITus Tourism | All rights reserved</p>
          <p className="pt-lg-4 pt-3">Contact us:- 12345-67891</p>

        </div>
        <div className="col-lg-6 col-md-6 col-sm-6 footer-bottom-txt">
          <div className="footer-icons pt-lg-5 pt-md-4 mt-3">
          <ul>
                      <li>
                        <a href="#">
                          <span className="fa fa-music mr-lg-3"></span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span className="fa fa-house mr-lg-3"></span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span className="fa fa-rss mr-lg-3"></span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span className="fa fa-envelope mr-lg-3"></span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span className="fa fa-heart mr-lg-3"></span>
                        </a>
                      </li>
                    </ul>
          </div>
        </div>
      </div>
      {/* <!-- move icon --> */}
      <div className="text-center">
        {/* <a href="#home" className="move-top text-center mt-3">
          <span className="fa fa-arrow-up" aria-hidden="true"></span>
        </a> */}
      </div>
      {/* <!--//move icon --> */}
    </div>
  </footer>
  {/* <!--//footer --> */}
  {/* <!-- footer-copy-write --> */}
  <div className="footer-copy-write py-3">
    <div className="container py-2">
      <div className="bottem-txt-footer text-center">
        <p>
          {/* © 2019 Sail-Trip . All Rights Reserved | Design by */}
          {/* <a href="http://www.W3Layouts.com" target="_blank">W3Layouts</a> */}
        </p>
      </div>
    </div>
  </div>
  {/* <!--//footer-copy-write --> */}
        </>
    )
}