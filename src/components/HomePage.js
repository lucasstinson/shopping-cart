import React from "react";
import computerDepot from "../assets/images/computer-depot.jpeg";

const HomePage = () => {
  return (
    <div className="home-page-contents">
      <div className="home-page-header">
        <div className="tag-line-1">
          Everything you need to build a computer.
        </div>
      </div>
      <div className="banner-container">
        <img
          className="home-page-banner"
          src={computerDepot}
          alt="computer part warehouse"
        ></img>
        <div className="home-page-button-container">
          <div className="tag-line-2">
            Explore our products to get up an running immediately.
          </div>
          <button className="shop-button">Shop Now</button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
