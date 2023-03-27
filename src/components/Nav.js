import React from "react";
import computer from "../assets/images/computer-tower.png";
import shoppingBag from "../assets/images/shopping-bag.png";

const Nav = () => {
  return (
    <div className="nav-bar">
      <div className="nav-logo">
        {/* <img src={computer} alt="computer logo" className="logo-img"></img> */}
        <h1 className="logo-title">Computer Depot</h1>
      </div>
      <div className="nav-links">
        <div className="home">Home</div>
        <div className="shop">Shop</div>
        <div className="contact">Contact</div>
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
