import React from 'react'
import Navbar from './Navbar'
import styleHome from './CSS/styleHome.css'
import pcosImg from './images/pcosImg.jpg'
import developer from './images/developer.png'
import cosmetic from './images/cosmetic.png'
import overview from './images/overview.png'
import irregular from './images/irregular.png'
import girl from './images/girl.png'



export default function Homepage() {
    
    return (
        
        <div>
        <Navbar/>
        <section id="title">
    <div className="container-fluid">

      <div className="row">
        <div className="col-lg-6">
        <div className="row">
            <h1 className="heading">Your companion through tough times.</h1>
        </div>

        <div className="row">
            <button id="loginbtn" type="button" className="btn btn-lg btn-outline-light">Login</button>
          <button id="loginbtn" type="button" className="btn btn-lg btn-outline-light">About PCOS</button>
          <button id="loginbtn" type="button" className="btn btn-lg btn-outline-light">Blog</button>
          <button id="loginbtn" type="button" className="btn btn-lg btn-outline-light">Diet</button>
        </div>

          </div>
        <div className="col-lg-6">

          <img width="740" height="500" src={girl} className="response"alt="iphone-mockup"/>

        </div>
      </div>

    </div>
</section>
        
        



        
        



        <section id="testimonials">
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <h1 className="heading">Who can get PCOS?</h1>
      <p>PCOS normally affects women once they start having menstrual cycles or hit the age of puberty (typically around age 11).</p>
    </div>
    <div className="carousel-item">
      <h1 className="heading">Is there a cure for PCOS?</h1>
      <p>No, there isn’t. It can be managed with the appropriate treatment at a fertility clinic.</p>
    </div>
    <div className="carousel-item">
      <h1 className="heading">Can PCOS affect you fertility?</h1>
      <p>It might. Because it is a hormonal imbalance, it can hamper normal ovulation and cause female infertility as well as sub-fertility.</p>
    </div>
    <div className="carousel-item">
      <h1 className="heading">Is it true that pregnancy cures PCOS?</h1>
      <p>Unfortunately, no. However, it is quite common for a woman with PCOS to have a cessation of symptoms while she is pregnant, and many women have improvement and more normal menstrual cycles after having been pregnant.</p>
    </div>
    <div className="carousel-item">
      <h1 className="heading">What does PCOS mean?</h1>
      <p>PCOS stands for Polycystic Ovary Syndrome.</p>
    </div>
    <div className="carousel-item">
      <h1 className="heading">What causes PCOS?</h1>
      <p>Presently, the exact cause of PCOS is unknown. Some experts lean toward the theory that it might be a genetic, inherited condition since women who have it are more likely to have a sister or mother who also has it.</p>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
</section>



<section id="title1">
    <div className="container-fluid">

      <div className="row">
        <div className="col-lg-6">
        
            <img width="740" height="500" src={girl} className="response"alt="iphone-mockup"/>

          </div>
        <div className="col-lg-6">

          <h3 className="heading">COS Awareness Association is a non-profit organization dedicated to the advocacy of polycystic ovarian syndrome (PCOS).</h3>
        

        <div className="row">
            <button id="loginbtn" type="button" className="btn btn-lg btn-outline-light">Join a Campign!</button>
          
        </div>

        </div>
      </div>

    </div>
</section>




<footer id="foot" className="w-100 py-4 flex-shrink-0">
      <div className="container py-4">
          <div className="row gy-4 gx-5">
              <div className="col-lg-4 col-md-6">
                  <h5 className="h1 text-white">PCOS  COMPANION</h5>
                  <p className="small text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
                  <p className="small text-muted mb-0">&copy; Copyrights. All rights reserved. <a  className="link footer-heading" className="text-primary" href="#">Pcoscompanion.com</a></p>
              </div>
              <div className="col-lg-2 col-md-6">
                  <h5 className="text-black mb-3">Quick links</h5>
                  <ul className="foter-link list-unstyled text-muted">
                      <li><a className="link" href="#">Home</a></li>
                      <li><a className="link" href="#">About</a></li>
                      <li><a className="link" href="#">Blogs</a></li>
                      <li><a className="link" href="#">Diet</a></li>
                      <li><a className="link" href="#">Tracker</a></li>
                  </ul>
              </div>
              <div className="col-lg-2 col-md-6">
                  <h5 className="text-black mb-3">Quick links</h5>
                  <ul className="list-unstyled text-muted">
                      <li><a className="link" href="#">Home</a></li>
                      <li><a className="link" href="#">About</a></li>
                      <li><a className="link" href="#">Blogs</a></li>
                      <li><a className="link" href="#">Diet</a></li>
                      <li><a className="link"  href="#">Tracker</a></li>
                  </ul>
              </div>
              <div className="col-lg-4 col-md-6">
                  <h5 className="text-black mb-3">Newsletter</h5>
                  <p className="small text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
                  <form action="#">
                      <div className="input-group mb-3">
                          <input className="form-control" type="text" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2"/>
                          <button className="btn btn-primary" id="button-addon2" type="button"><i className="fas fa-paper-plane"></i></button>
                      </div>
                  </form>
              </div>
          </div>
      </div>
  </footer>

        
        
        </div>
       
    )
}
