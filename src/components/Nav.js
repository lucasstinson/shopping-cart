import React from "react";
import { Link } from "react-router-dom";
import computer from "../assets/images/computer-tower.png";
import shoppingBag from "../assets/images/shopping-bag.png";

const Nav = () => {
  return (
    <div className="nav-bar">
      <div className="nav-logo">
        <Link to="/">
          {/* <img src={computer} alt="computer logo" className="logo-img"></img> */}
          <h1 className="logo-title">Computer Depot</h1>
        </Link>
      </div>
      <div className="nav-links">
        <Link to="/" className="home">
          Home
        </Link>
        <Link to="/shop" className="shop">
          Shop
        </Link>
        <Link to="/contact" className="contact">
          Contact
        </Link>
        <div className="shopping-cart-container">
          <img
            src={shoppingBag}
            className="shopping-bag"
            alt="shopping bag"
          ></img>
          <div className="cart-count"></div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
