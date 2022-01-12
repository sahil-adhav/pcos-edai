import React from "react";
import styleFooter from "./CSS/styleFooter.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <div>
      <footer className="w-100 py-4 flex-shrink-0">
        <div className="container py-4">
          <div className="row gy-4 gx-5">
            <div className="col-lg-4 col-md-6">
              <h5 className="h1 text-black font-footer-heading">
                <span className="spanTag">PCOS</span> <br /> COMPANION
              </h5>
              <p className="small text-muted">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt.
              </p>
              <p className="small text-muted mb-0">
                &copy; Copyrights. All rights reserved.{" "}
                <a
                  className="link footer-heading"
                  className="text-primary"
                  href="#"
                >
                  Pcoscompanion.com
                </a>
              </p>
            </div>
            <div className="col-lg-2 col-md-6">
              <h5 className="text-black mb-3">Quick links</h5>
              <ul className="foter-link list-unstyled text-muted">
                <li>
                  <a className="link" href="#">
                    Home
                  </a>
                </li>
                <li>
                  <a className="link" href="/about">
                    About
                  </a>
                </li>
                <li>
                  <a className="link" href="/blog">
                    Blogs
                  </a>
                </li>
                <li>
                  <a className="link" href="/diet">
                    Diet
                  </a>
                </li>
                <li>
                  <a className="link" href="/tracker">
                    Tracker
                  </a>
                </li>
                <li>
                  <a className="link" href="/tracker">
                    About Us
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-6">
              <h5 className="text-black mb-3">Follow Us</h5>
              <div class="social-container">
                <a
                  href="https://www.youtube.com/"
                  className="youtube social"
                >
                  <FontAwesomeIcon icon={faYoutube} size="2x" />
                </a>
                <br/>
                <a
                  href="https://www.facebook.com/"
                  className="facebook social"
                >
                  <FontAwesomeIcon icon={faFacebook} size="2x" />
                </a>
                <br/>
                <a
                  href="https://twitter.com/"
                  className="twitter social"
                >
                  <FontAwesomeIcon icon={faTwitter} size="2x" />
                </a>
                <br/>
                <a
                  href="https://www.instagram.com/"
                  className="instagram social"
                >
                  <FontAwesomeIcon icon={faInstagram} size="2x" />
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <h5 className="text-black mb-3">Newsletter</h5>
              <p className="small text-muted">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt.
              </p>
              <form action="#">
                <div className="input-group mb-3">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Recipient's username"
                    aria-label="Recipient's username"
                    aria-describedby="button-addon2"
                  />
                  <button
                    className="btn btn-primary"
                    id="button-addon2"
                    type="button"
                  >
                    <i className="fas fa-paper-plane"></i>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
