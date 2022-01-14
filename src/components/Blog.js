import React from "react";

import styleBlog from "./CSS/styleBlog.css";
import Notes from "./Notes";

export default function Blog() {
  return (
    <div>
      <header>
        <h1 className="heading__blogs">Blogs</h1>
        <h3 className="heading__blogs__tagline">
          Share and Read stories of others.
        </h3>
      </header>

      <div className="container">
        <Notes />
      </div>

      {/* <main>
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
    </main> */}
    </div>
  );
}
