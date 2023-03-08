import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../App.css";

const Home = () => {
  return (
    <div className="background-img1">
      <div className="main-content">
        <h1>Carto Canvas</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio
          doloremque veniam aut dolorum cupiditate, alias ex amet sequi rerum
          reiciendis magni omnis molestias culpa dolorem commodi vel a ut.
          Facilis.
        </p>
        <button className="btn btn-primary">
          <Link to="/login" className="removeUnderLine">
            Get started
          </Link>
        </button>
      </div>
    </div>
    // <MyCarousel />
  );
};

export default Home;
