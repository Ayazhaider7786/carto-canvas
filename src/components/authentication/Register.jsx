import React, { Component } from "react";
import { Link } from "react-router-dom";
const Register = () => {
  return (
    <div className="background-img2">
      <div className="card bg-transparent">
        <div className="card-header">
          <h4>Register</h4>
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
          <div className="form-group">
            <label>Confrom Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Password"
            />
          </div>
        </div>
        <div className="card-footer">
          <button className="btn btn-primary setCardBase">Register</button>
        </div>
        <div className="card-footer">
          <div className="setCardBase">
            already Registered ?{" "}
            <Link to="/login" className="ankerRemoveUnderLine">
              Login From Here
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
