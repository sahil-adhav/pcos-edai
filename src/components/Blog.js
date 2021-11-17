import React from 'react'
// import styleBlog from './CSS/styleBlog.css'

export default function Blog() {
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
    <header>
      <h1 className="heading__blogs">Blogs</h1>
      <h3 className="heading__blogs__tagline">Share and Read stories of others.</h3>
    </header>
    <main>
      <section className="Left">
        <img
          className="blog__img center"
          src="https://images.pexels.com/photos/1105166/pexels-photo-1105166.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          alt=""
        />
        <h3 className="Category__heading">DIET</h3>
        <h2 className="CategoryTitle__heading">Why do you need more Magnesium?</h2>
        <p className="Category__desc">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.Lorem Ipsum is simply dummy text of the printing and
          typesetting industry.
        </p>
        <p className="Date">MICHAEL SCOTT • AUG 22, 2021</p>
      </section>
      <section className="Right">
        <h2 className="Category__heading__topic">Featured</h2>
        <div className="container">
          <div className="Topic">
            <h3 className="Topic__heading">MENTAL HEALTH</h3>
            <p>
              <strong>
                Ipsum is simply dummy text of the printing and typesetting
                industry.</strong>
            </p>
            <p className="Date__topic">MICHAEL SCOTT • AUG 22, 2021</p>
          </div>
          <div className="Topic__img">
            <img
              className="Topic___img"
              src="https://images.pexels.com/photos/2383009/pexels-photo-2383009.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt=""
            />
          </div>
          <div className="Topic">
            <h3 className="Topic__heading">MENTAL HEALTH</h3>
            <p>
              <strong>
                Ipsum is simply dummy text of the printing and typesetting
                industry.</strong>
            </p>
            <p className="Date__topic">MICHAEL SCOTT • AUG 22, 2021</p>
          </div>
          <div className="Topic__img">
            <img
              className="Topic___img"
              src="https://images.pexels.com/photos/2383009/pexels-photo-2383009.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt=""
            />
          </div>
          <div className="Topic">
            <h3 className="Topic__heading">MENTAL HEALTH</h3>
            <p>
              <strong>
                Ipsum is simply dummy text of the printing and typesetting
                industry.</strong>
            </p>
            <p className="Date__topic">MICHAEL SCOTT • AUG 22, 2021</p>
          </div>
          <div className="Topic__img">
            <img
              className="Topic___img"
              src="https://images.pexels.com/photos/2383009/pexels-photo-2383009.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt=""
            />
          </div>
        </div>
      </section>
    </main>
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
