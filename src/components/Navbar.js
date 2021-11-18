import React from 'react'

export default function Navbar() {
    return (
        <div>
           <nav className="navbar">
      
      <div className="logo">
        PCOS <br/>
        COMPANION
      </div>
      
      <ul className="nav-links">
        
        <input type="checkbox" id="checkbox_toggle" />
        <label for="checkbox_toggle" className="hamburger">&#9776;</label>
        
        <div className="menu">
          <li><a href="/">HOME</a></li>
          <li><a href="/about">ABOUT</a></li>
          <li><a href="/blog">BLOG</a></li>
          <li><a href="/diet">DIET</a></li>
          <li><a href="/tracker">TRACKER</a></li>
          <li><button className="btn__logout" type="submit">LOGOUT</button></li>
        </div>
      </ul>
    </nav>


        </div>
    )
}
