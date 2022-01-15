import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styleLoginNew from "./CSS/styleLoginNew.css";
import login from "./images/login.png";

const Login = (props) => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      }),
    });
    const json = await response.json();
    console.log(json);
    if (json.success) {
      // Save the auth token and redirect
      localStorage.setItem("token", json.authtoken);
      localStorage.setItem("inside", true);
      navigate("/blog");
    } else {
      alert("Invalid credentials");
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <div className="container">
      <div className="left-login">
          <img src={login} alt="" className="login-img"/>
      </div>
      <div className="right-login">
        <form onSubmit={handleSubmit} className="form-login">
          <div className="mb-3">
              <h1 className="login-heading">LOGIN</h1>
            <label htmlFor="email" className="form-label text">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              value={credentials.email}
              onChange={onChange}
              id="email"
              name="email"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" className="form-text text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label text">
              Password
            </label>
            <input
              type="password"
              className="form-control "
              value={credentials.password}
              onChange={onChange}
              name="password"
              id="password"
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

export default Login;
