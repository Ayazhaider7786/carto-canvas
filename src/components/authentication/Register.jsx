import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confromPassword, setConfromPassword] = useState("");
  const navigate = useNavigate();

  const loginAuth = (e) => {
    e.preventDefault();

    const validEmail = new RegExp(
      "^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$"
    );

    if (email == "" || !validEmail.test(email)) {
      alert("Invalid Email");
      return;
    }
    if (password.length < 6) {
      alert("Password Length Should be greater then 6");
      return;
    }
    if (password != confromPassword) {
      alert("Password and Confrom Password are Different");
      return;
    }
    alert("email is : ayaz \n Password is : ayaz");
    navigate("/login");
  };

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
          <div className="form-group">
            <label>Confrom Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              onChange={(e) => setConfromPassword(e.target.value)}
            />
          </div>
        </div>
        <div className="card-footer">
          <button className="btn btn-primary setCardBase" onClick={loginAuth}>
            Register
          </button>
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
