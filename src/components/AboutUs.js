import React from "react";
import styleAboutUs from "./CSS/styleAboutUs.css";
import motivation_img from "./images/motivation_img.png";
import card_sahil from "./images/card_sahil.png";
import vaishnavi from "./images/vaishnavi.png";
import vaishnavi2 from "./images/vaishnavi.jpeg";
import sans from "./images/sans.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import aaditi from "./images/aaditi.jpeg";
import aditya from "./images/aditya.jpeg";
import ayush from "./images/ayush.png";

export default function AboutUs() {
  return (
    <div>
      <section id="aboutUs_page">
        <h1 className="heading_aboutUs">About Us</h1>
        <div className="motivation">
          <div className="imgMotivation">
            <img src={motivation_img} alt="img" className="imageMotivation" />
          </div>
          <div className="textMotivation">
            <h4 className="textHeading">Our Motivation</h4>
            <p className="text">
            Our Website aims at enabling an evaluation system in order for women to analyze their symptoms through some basic questions and get clarity upon the need of further medical counseling. Polycystic ovary syndrome (PCOS) is a health problem that affects 1 in 10 women of childbearing age and can lead to infertility in the worst case. Women with PCOS can experience irregular menstrual bleeding, heavy menstrual bleeding, excessive hair, acne, abdominal pain, difficulty in pregnancy, and thick, dark, velvety spots on the skin. 
            </p>
          </div>
        </div>
        <div className="ourTeam">
          <h2 className="ourTeamHeading">Meet Our Team</h2>
          <div className="cardContainer">
            <div className="cards-aboutus">
              <div className="cardImg">
                <img src={card_sahil} className="img_card" />
              </div>
              <div className="cardText">
                <h4 className="nameHeading">Sahil Adhav</h4>
                <p className="aboutContent">
                  I’m a web & software developer from Pune, India. I’m currently
                  studying at VIT Pune. I love to research, design wireframes
                  and prototypes, to code, build websites and web applications.
                </p>

                <div class="socialContainer">
                  <a
                    href="https://www.linkedin.com/in/sahiladhav/"
                    target="_blank"
                    class="myButton-aboutUs"
                    download
                  >
                    CONTACT SAHIL
                  </a>
                </div>
              </div>
            </div>
            <div className="cards-aboutus">
              <div className="cardImg">
                <img src={aditya} className="img_card" />
              </div>
              <div className="cardText">
                <h4 className="nameHeading">Aditya Sood</h4>
                <p className="aboutContent">
                  Hii, I am Aditya Sood, currently studying in Vishwakarma Institute of Technology,   Pune. I love to code and design wireframes. I am web and App developer.  Learning new things, hard working. 
                </p>
                <div class="socialContainer">
                  <a
                    href="https://www.linkedin.com/in/aditya-sood-9133441b3/"
                    target="_blank"
                    class="myButton-aboutUs"
                    download
                  >
                    CONTACT ADITYA
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="cardContainer">
            <div className="cards-aboutus">
              <div className="cardImg">
                <img src={aaditi} className="img_card" />
              </div>
              <div className="cardText">
                <h4 className="nameHeading">Aaditi Badgujar</h4>
                <p className="aboutContent">
                  I’m a web & software developer from Pune, India. I’m currently
                  studying at VIT Pune. I love to research, design wireframes
                  and prototypes, to code, build websites and web applications.
                </p>
                <div class="socialContainer">
                  <a
                    href="https://www.linkedin.com/in/aaditi-badgujar-6b05001ba/"
                    target="_blank"
                    class="myButton-aboutUs"
                    download
                  >
                    CONTACT AADITI
                  </a>
                </div>
              </div>
            </div>
            <div className="cards-aboutus">
              <div className="cardImg">
                <img src={ayush} className="img_card" />
              </div>
              <div className="cardText">
                <h4 className="nameHeading">Ayush Prasad</h4>
                <p className="aboutContent">
                  I’m a web & software developer from Pune, India. I’m currently
                  studying at VIT Pune. I love to research, design wireframes
                  and prototypes, to code, build websites and web applications.
                </p>
                <div class="socialContainer">
                  <a
                    href="https://www.linkedin.com/in/ayush-prasad-5482741a1/"
                    target="_blank"
                    class="myButton-aboutUs"
                    download
                  >
                    CONTACT AYUSH
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="ourTeam">
          <h2 className="ourTeamHeading testimonial">Testimonials</h2>
          <div className="cardContainer">
            <div className="cards-aboutus">
              <div className="cardImg">
                <img src={vaishnavi} className="img_card vasihnavi" />
              </div>
              <div className="cardText">
                <h4 className="nameHeading">Vaishnavi Chumbalkar</h4>
                <p className="aboutContent italics">
                "It's wonderful to see  engineers of the century to work and research on an issue like PCOS out of interest, which is so crucial at this point when changes in lifestyle are causing various health related problems."

                </p>
              </div>
            </div>
            <div className="cards-aboutus">
              <div className="cardImg">
                <img src={sans} className="img_card vasihnavi" />
              </div>
              <div className="cardText">
                <h4 className="nameHeading">Sanskruti Dhanwate</h4>
                <p className="aboutContent italics">
                "It feels good to see more people take notice of and spread awareness about PCOS ♥️. It is important to work towards the betterment of health and making people aware about the condition through which we can bring a change."
                </p>

                
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
