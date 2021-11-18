import React from 'react'

export default function Footer() {
    return (
        <div>
            <footer className="w-100 py-4 flex-shrink-0">
      <div className="container py-4">
          <div className="row gy-4 gx-5">
              <div className="col-lg-4 col-md-6">
                  <h5 className="h1 text-black">PCOS <br/> COMPANION</h5>
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
