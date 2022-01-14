import React from "react";
import pcos_logo from "./images/pcos_logo.png";
import styleNavbar from "./CSS/styleNavbar.css";
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
  const navigate = useNavigate();
  const handleLogout = ()=>{
    localStorage.removeItem('inside');
    navigate('/');
  }
  return (
    <div>
      <nav className="navbar">
        <div className="logo">
          <div className="logo_pic">
            <img src={pcos_logo} className="pcos_logo" />
          </div>
          <div className="logo_name">
            <p><span className="spanTag">PCOS</span> <br />
            COMPANION</p>
          </div>
        </div>

        <ul className="nav-links">
          <input type="checkbox" id="checkbox_toggle" />
          <label for="checkbox_toggle" className="hamburger">
            &#9776;
          </label>

          <div className="menu">
            <li>
              <a href="/">HOME</a>
            </li>
            <li>
              <a href="/about_us">ABOUT</a>
            </li>
            <li>
              <a href="/about">ABOUT PCOS</a>
            </li>
            <li>
              <a href="/blog">BLOG</a>
            </li>
            <li>
              <a href="/diet">DIET</a>
            </li>
            <li>
              <a href="/user">Become a contributor</a>
            </li>
            
            <li>
              {!localStorage.getItem('inside')?
              <div>
                <a href="/signup">Sign Up</a>
                <a style={{marginLeft:"20px"}} href="/login">Login</a>
              </div>
              
              :<button onClick={handleLogout} className="btn__logout" >LOGOUT</button>}
            </li>
          </div>
        </ul>
      </nav>
    </div>
  );
}
