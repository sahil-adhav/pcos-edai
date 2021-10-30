import React from 'react'

export default function Navbar() {
    return (
        <div id="navi">
           <nav className="navbar navbar-expand-lg navbar-dark">

        <a className="navbar-brand" href="">
          PCOS Companion
        </a>

        <div>
          
          <button id="contactbtn" type="button" className="btn btn-lg btn-outline-light">Contact us</button>
        </div>

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02">
          <span className="navbar-toggler-icon"></span>
        </button>

        
      </nav>


        </div>
    )
}
