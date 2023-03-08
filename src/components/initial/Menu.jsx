import React, { Component } from "react";

const Menu = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light px-2">
      <div className="d-flex w-100 justify-content-between">
        {/* use to create space betwwen brand and ul,li items */}
        <a className="navbar-brand" href="#">
          Carto Canvas
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="/">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="_blank">
              Features
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="_blank">
              Pricing
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/login">
              Login
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Menu;
