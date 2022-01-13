import React from "react";
// import Navbar from './Navbar'
import styleHome from "./CSS/styleHome.css";
import girl from "./images/girl.png";
import banner1 from "./images/banner1.png";
import banner2 from "./images/banner2.png";
import banner3 from "./images/banner3.png";
import pic1 from "./images/pic1.png";
import pic2 from "./images/pic2.png";
import pic3 from "./images/pic3.png";
import pic4 from "./images/pic4.png";
import pic5 from "./images/pic5.png";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function Homepage() {
  return (
    <div>
      <section id="images__slider">
        <div className="ImagesHome">
          <img
            width="100%"
            height="90%"
            src={banner2}
            className="response"
            alt="iphone-mockup"
          />
        </div>
      </section>
      {/* <section id="title">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6">
              <div className="row">
                <h1 className="heading title_heading">Your companion through tough times.</h1>
              </div>

              <div className="row">
                <button
                  id="loginbtn"
                  type="button"
                  onClick="/login"
                  className="btn btn-lg btn-outline-dark"
                >
                  Login
                </button>
                <button
                  id="loginbtn"
                  type="button"
                  className="btn btn-lg btn-outline-dark"
                >
                  About PCOS
                </button>
                <button
                  id="loginbtn"
                  type="button"
                  className="btn btn-lg btn-outline-dark"
                >
                  Blog
                </button>
                <button
                  id="loginbtn"
                  type="button"
                  className="btn btn-lg btn-outline-dark"
                >
                  Diet
                </button>
              </div>
            </div>
            <div className="col-lg-6">
              <img
                width="740"
                height="500"
                src={girl}
                className="response"
                alt="iphone-mockup"
              />
            </div>
          </div>
        </div>
      </section> */}

      <section id="testimonials">
        <div
          id="carouselExampleControls"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <h1 className="heading">Who can get PCOS?</h1>
              <p className="answer">
                PCOS normally affects women once they start having menstrual
                cycles or hit the age of puberty (typically around age 11).
              </p>
            </div>
            <div className="carousel-item">
              <h1 className="heading">Is there a cure for PCOS?</h1>
              <p className="answer">
                No, there isn’t. It can be managed with the appropriate
                treatment at a fertility clinic.
              </p>
            </div>
            <div className="carousel-item">
              <h1 className="heading">Can PCOS affect you fertility?</h1>
              <p className="answer">
                It might. Because it is a hormonal imbalance, it can hamper
                normal ovulation and cause female infertility as well as
                sub-fertility.
              </p>
            </div>
            <div className="carousel-item">
              <h1 className="heading">Is it true that pregnancy cures PCOS?</h1>
              <p className="answer">
                Unfortunately, no. However, it is quite common for a woman with
                PCOS to have a cessation of symptoms while she is pregnant, and
                many women have improvement and more normal menstrual cycles
                after having been pregnant.
              </p>
            </div>
            <div className="carousel-item">
              <h1 className="heading">What does PCOS mean?</h1>
              <p className="answer">
                PCOS stands for Polycystic Ovary Syndrome.
              </p>
            </div>
            <div className="carousel-item">
              <h1 className="heading">What causes PCOS?</h1>
              <p className="answer">
                Presently, the exact cause of PCOS is unknown. Some experts lean
                toward the theory that it might be a genetic, inherited
                condition since women who have it are more likely to have a
                sister or mother who also has it.
              </p>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>

      {/* <section id="title1">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6">
              <img
                width="740"
                height="500"
                src={girl}
                className="response"
                alt="iphone-mockup"
              />
            </div>
            <div className="col-lg-6">
              <h3 className="heading">
                COS Awareness Association is a non-profit organization dedicated
                to the advocacy of polycystic ovarian syndrome (PCOS).
              </h3>

              <div className="row">
                <button
                  id="loginbtn"
                  type="button"
                  className="btn btn-lg btn-outline-dark"
                >
                  Join a Campaign!
                </button>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <section id="images__slider">
        <div className="ImagesHome">
          <img
            width="100%"
            height="90%"
            src={banner3}
            className="response"
            alt="iphone-mockup"
          />
        </div>
      </section>

      <section id="cards__home">
        <div class="cards_homePage">
          <div class="cards">
            <div class="card" style={{ width: "18rem" }}>
              <img
                src={pic3}
                class="cards___image"
              />
              <div class="card-body">
                <h5 class="card-title">ABOUT PCOS</h5>
                <p class="card-text">
                  Polycystic Ovarian Syndrome (PCOS) is a common endocrine
                  system disorder affecting about 12-18% of women in the
                  reproductive age. content.
                </p>
                <a href="/about" class="myButton">
                  Read More
                </a>
              </div>
            </div>
          </div>
          <div class="cards">
            <div class="card" style={{ width: "18rem" }}>
              <img
                src={pic4}
                class="cards___image"
              />
              <div class="card-body">
                <h5 class="card-title">DIET</h5>
                <p class="card-text">
                Learn how you can lose weight, gain energy, and improve your quality of life through dietary improvements. Small changes can make a big difference in living with PCOS.
                </p>
                <a href="/diet" class="myButton">
                  Read More
                </a>
              </div>
            </div>
          </div>
          <div class="cards">
            <div class="card" style={{ width: "18rem" }}>
              <img
                src={pic2}
                class="cards___image"
              />
              <div class="card-body">
                <h5 class="card-title">BLOGS</h5>
                <p class="card-text">
                The information that will keep you informed, inspired and control your PCOS.
                </p>
                <a href="/blog" class="myButton">
                  Read More
                </a>
              </div>
            </div>
          </div>
          <div class="cards">
            <div class="card" style={{ width: "18rem" }}>
              <img
                src={pic5}
                class="cards___image"
              />
              <div class="card-body">
                <h5 class="card-title">ABOUT US</h5>
                <p class="card-text">
                ‘PCOS COMPANION’ has been created  to spread awareness about this lesser known condition and get more women diagnosed.
                </p>
                <a href="/tracker" class="myButton">
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
