import React, { Component } from "react";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const loginAuth = (e) => {
    e.preventDefault();

    navigate("/map");
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
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Password"
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
