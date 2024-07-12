import { Link } from "react-router-dom"; 

export default function Main() {
  return (
    <>


      <div className="main-top" id="home">

        {/* <!-- banner --> */}
        <div className="main-banner">
          <div className="container-fluid">
            <div className="style-banner ">
              <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-3">
                  <div className="social-icons">
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
                <div className="col-lg-8 col-md-8 col-sm-9">
                  <div className="banner-right-txt">
                    {/* <h4>Fun and Adventure</h4>
                    <h4>With Joyful Trip to India</h4> */}
                    <div className="two-demo-button mt-lg-4 mt-md-3 mt-3">
                      {/* <p>“India will reveal to you the places in your heart that must be purified.” </p> */}
                    </div>
                    {/* <div className="view-buttn mt-md-4 mt-sm-4 mt-3">
                      <a href="single.html" className="btn">Read More</a>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- //banner --> */}
      {/* <!-- about --> */}
      <section className="about py-lg-4 py-md-3 py-sm-3 py-3" id="about">
        <div className="container-fluid p-5 py-lg-5 py-md-4 py-sm-4 py-3">
          <div className="row">
            <div className="col-lg-4 about-imgs-txt">
              <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-3 text-center">
                  <div className="about-span-txt">
                    {/* <span className="fa fa-handshake-o" aria-hidden="true"></span> */}
                  </div>
                </div>
                <div className="about-w3layouts-left col-lg-9 col-md-9 col-sm-9">
                  <h6 className="mb-lg-3 mb-2">ALL ABOUT</h6>
                  <p>Interesting and Intriguing, India offers incredible holiday experiences through  its cultural, topography, and wildlife diversity. With these amazing and unique experiences, this south Asian country conveniently finds its way into the world tourism map as one of the finest destinations for a holistic vacation.</p>
                </div>
              </div>
              <div className="row my-lg-5 my-md-4 my-3">
                <div className="about-w3layouts-left col-lg-9 col-md-9 col-sm-9">
                  <h6 className="mb-lg-3 mb-2">INDIA</h6>
                  <p>India establishes its identity as the country of architectural masterpieces, making it an ideal travel destination to plan a heritage tour in the world. While Taj Mahal makes for the major draw on an India tour, there are a plethora of monuments and edifices in every India travel guide displaying the fine architecture and grandiose of different eras in the country.</p>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-3 text-center">
                  <div className="about-span-txt">
                    {/* <span className="fa fa-superpowers" aria-hidden="true"></span> */}
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-3 col-md-3 col-sm-3 text-center">
                  <div className="about-span-txt">
                    {/* <span className="fa fa-binoculars" aria-hidden="true"></span> */}
                  </div>
                </div>
                {/* <div className="about-w3layouts-left col-lg-9 col-md-9 col-sm-9">
              <h6 className="mb-lg-3 mb-2">INDIA</h6>
              <p>The diverse Indian topography adorned with the impressive Himalayas; long stretches of coastline; expansive hot, cold and white salt deserts; dense forests; alpine meadows and lakes; and scenic waterfalls pique the tourists’ interest.

</p>
            </div> */}
              </div>
            </div>
            <div className="col-lg-4 col-md-6 about-imgs-txt">
              <img src="assets/images/a2.jpg" alt="news image" className="img-fluid" />
            </div>
            <div className="col-lg-4 col-md-6 text-right about-two-grids">
              <h3 className="title mb-md-4 mb-sm-3 mb-3">What Is Our History</h3>
              <div className="about-para-txt">
                <p>The Indian subcontinent, the great landmass of South Asia, is the home of one of the world’s oldest and most influential civilizations. In this article, the subcontinent, which for historical purposes is usually called simply “India,” is understood to comprise the areas of not only the present-day Republic of India but also the republics of Pakistan (partitioned from India in 1947) and Bangladesh (which formed the eastern part of Pakistan until its independence in 1971). For the histories of these latter two countries since their creation, see Pakistan and Bangladesh.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- //about --> */}
      {/* <!-- counter-reset --> */}
      <section className="counter-reset">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-4 count-wthree-num text-center">
              <h5 className="mb-lg-4 mb-md-4 mb-3">Art & Culture</h5>
              <h4 className="mb-3">  </h4>
              <p>Indian art consists of a variety of art forms, including painting, sculpture, pottery, and textile arts such as woven silk. Geographically, it spans the entire Indian subcontinent, including what is now India, Pakistan, Bangladesh, Sri Lanka, Nepal, and at times eastern Afghanistan. </p>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4 count-wthree-num text-center color-one">
              <h5 className="mb-lg-4 mb-md-4 mb-3">Adventure & Sports</h5>
              <h4 className="mb-3"></h4>
              <p>India isn’t just about exploring the exclusive, vibrant, authentic and magnificent places but also a captivating land for adventure junkies. Its huge spread of geographical diversity makes it an ideal destination for thrill-seekers.</p>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4 count-wthree-num text-center color-two">
              <h5 className="mb-lg-4 mb-md-4 mb-3">Shopping & Fun</h5>
              <h4 className="mb-3"></h4>
              <p>Shopping in India is not always as bland as a visit to the neighbourhood shopping mall and swiping your debit card. Colourful, crowded and teeming with possibilities depending on your bargaining powers, visit the following shopping destinations in India to satisfy your inner shopaholic.</p>
            </div>
          </div>
        </div>
      </section>
      {/* <!--//counter-reset --> */}
      {/* <!-- service --> */}
      <section className="service py-lg-4 py-md-3 py-sm-3 py-3" id="service">
        <div className="container-fluid py-lg-5 py-md-4 py-sm-4 py-3">
          <div className="row">
            <div className="col-lg-3 main-title-text pt-3">
              <h3 className="title">Themes You Can Explore</h3>
            </div>
            <div className="col-lg-9">
              <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-6 service-grid-wthree text-center">
                  <div className="ser-fashion-grid">
                    <div className="about-icon mb-md-4 mb-3">
                      <span className="fa fa-heart" aria-hidden="true"></span>
                    </div>
                    <div className="ser-sevice-grid">
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
      {/* <!--blog --> */}
      <section className="blog" id="blog">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-8 ">
              <div className="blog-wthree-list">
                <div className="blog-date-time mb-2">
                  {/* <ul>
                    <li>
                      <a href="single.html">July 2020/7</a>
                    </li>
                    <li>
                      <a href="single.html">Comments 5</a>
                    </li>
                  </ul> */}
                </div>
                {/* <h4 className="mb-3">
                  <a href="single.html">Lorem ipsum dolor</a>
                </h4> */}
                {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Vestibulum nibh urna Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit.Vestibulum nibh urna</p> */}
                <div className="view-buttn mt-md-4 mt-sm-4 mt-3">
                  {/* <a href="single.html" className="btn">Read More</a> */}
                </div>
              </div>
            </div>
            <div className="col-lg-4 main-title-text">
              <h3 className="title">Our Latest News & Blog</h3>
            </div>
          </div>
          <div className="row mt-lg-4 mt-3">
            <div className="col-lg-6 blog-two-two">
              <div className="blog-date-time mb-2">
                {/* <ul>
                  <li>
                    <a href="single.html">July 2020/7</a>
                  </li>
                  <li>
                    <a href="single.html">Comments 5</a>
                  </li>
                </ul> */}
              </div>
              <h4 className="mb-3">
                <a href="single.html">TAJ MAHAL</a>
              </h4>
              <p>The Taj Mahal(Crown of the Palace') is an Islamic ivory-white marble mausoleum on the right bank of the river Yamuna in Agra, Uttar Pradesh, India. It was commissioned in 1631 by the fifth Mughal emperor, Shah Jahan to house the tomb of his favourite wife, Mumtaz Mahal; it also houses the tomb of Shah Jahan himself. The tomb is the centrepiece of a 17-hectare (42-acre) complex, which includes a mosque and a guest house, and is set in formal gardens bounded on three sides by a crenellated wall.</p>
              <div className="view-buttn mt-md-4 mt-sm-4 mt-3">
                {/* <a href="single.html" className="btn">Read More</a> */}
              </div>
            </div>
            <div className="col-lg-6">
              <img src="assets/images/d1.jpg" alt="news image" className="img-fluid" />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <img src="assets/images/d5.jpg" alt="news image" className="img-fluid" />
            </div>
            <div className="col-lg-6 blog-two-two">
              <div className="blog-date-time mb-2">
                <ul>
                  {/* <li>
                    <a href="single.html">Jan 2023</a>
                  </li>
                  <li>
                    <a href="single.html">Comments 5</a>
                  </li> */}
                </ul>
              </div>
              <h4 className="mb-3">
                <a href="single.html">LOTUS TEMPLE</a>
              </h4>
              <p>The Lotus Temple, located in Delhi, India, is a Bahai House of Worship that was dedicated in December 1986. Notable for its lotus like shape, it has become a prominent attraction in the city. Like all Bahai Houses of Worship, the Lotus Temple is open to all, regardless of religion or any other qualification. The building is composed of 27 free-standing marble-clad "petals" arranged in clusters of three to form nine sides, with nine doors opening onto a central hall with a height of slightly over 34 meters and a capacity of 1,300 people.</p>
              {/* <div className="view-buttn mt-md-4 mt-sm-4 mt-3">
                <a href="single.html" className="btn">Read More</a>
              </div> */}
            </div>
          </div>
        </div>
      </section>
      {/* <!--//blog--> */}
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
      

    </>
  )
}
