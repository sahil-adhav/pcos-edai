import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styleSignUp from "./CSS/styleSignUp.css";
import signup from "./images/signup.png";

const Signup = () => {
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password } = credentials;
    console.log(credentials);
    const response = await fetch("http://localhost:5000/api/auth/createuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    });
    const json = await response.json();
    console.log(json);

    // Save the auth token and redirect
    localStorage.setItem("token", json.authtoken);
    localStorage.setItem("inside", true);
    navigate("/blog");
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  return (
    <div className="container">
      <div className="left-signup">
        <img src={signup} alt="" className="signup-img"/>
      </div>
      <div className="right-signup">
        <form onSubmit={handleSubmit} className="form-signup">
          <div className="mb-3">
          <h1 className="login-heading">SIGNUP</h1>
            <label htmlFor="name" className="form-label text">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              onChange={onChange}
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label text">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              onChange={onChange}
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label text">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              name="password"
              onChange={onChange}
              id="password"
              minLength={5}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="cpassword" className="form-label text">
              Confirm Password
            </label>
            <input
              type="password"
              className="form-control"
              name="cpassword"
              onChange={onChange}
              id="cpassword"
              minLength={5}
              required
            />
          </div>

          <button type="submit" className="btn btn-color text text-color">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
