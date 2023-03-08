import React from "react";
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../../App.css";

const MyCarousel = () => {
  return (
    <>
      <Carousel controls={false}>
        <Carousel.Item>
          <img className="d-block w-100 background-img-size background-img1" />
          <Carousel.Caption className=".main-content">
            <h1>Carto Canvas</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio
              doloremque veniam aut dolorum cupiditate, alias ex amet sequi
              rerum reiciendis magni omnis molestias culpa dolorem commodi vel a
              ut. Facilis.
            </p>
            <button classNameName="btn btn-primary">
              <Link to="/Login" classNameName="removeUnderLine">
                Get started
              </Link>
            </button>

            {/* <button className="btn btn-primary">
              <Link to="/Login" className="removeUnderLine">
                Get started
              </Link>
            </button> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 background-img-size background-img2" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 background-img-size background-img3" />
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default MyCarousel;
