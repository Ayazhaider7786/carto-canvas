import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import loginData from "./loginData";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginAuth = (e) => {
    e.preventDefault();

    if (loginData.email === "ayaz" && loginData.password === "ayaz") {
      navigate("/map");
    } else {
      alert("Invalid username or password");
    }
  };

  return (
    <div className="background-img2">
      <div className="card bg-transparent">
        <div className="card-header">
          <h4>Login</h4>
        </div>
        <div className="card-body">
          <div className="form-group">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
        <div className="card-footer">
          <button className="btn btn-primary setCardBase" onClick={loginAuth}>
            Login
          </button>
        </div>
        <div className="card-footer">
          <div className="setCardBase">
            Not Registered ?{" "}
            <Link to="/register" className="ankerRemoveUnderLine">
              Reister Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
