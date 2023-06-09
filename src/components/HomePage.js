import React from "react";
import { Link } from "react-router-dom";
import computerDepot from "../assets/images/computer-depot.jpeg";

const HomePage = () => {
  return (
    <div className="home-page-contents">
      <div className="banner-container">
        <Link to="/shop">
          <img
            className="home-page-banner"
            src={computerDepot}
            alt="computer part warehouse"
          ></img>
        </Link>
        <div className="home-page-button-container">
          <div className="home-page-header">
            <div className="tag-line-1">
              Everything you need to build a computer.
            </div>
          </div>
          <div className="tag-line-2">
            Explore our products and get up and running.
          </div>
          <Link to="/shop">
            <button className="shop-button">Shop Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
