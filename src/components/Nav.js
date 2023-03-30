import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import computer from "../assets/images/computer-tower.png";
import shoppingBag from "../assets/images/shopping-bag.png";

const Nav = (props) => {
  const [visibile, setVisible] = useState("");
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    let quantity = 0;
    if (props.cart.length == 0) {
      quantity = 0;
    } else {
      for (let i = 0; i < props.cart.length; i++) {
        quantity += props.cart[i].quantity;
      }
    }
    setQuantity(quantity);
    if (quantity > 0) {
      setVisible("cart-count");
    } else {
      setVisible("cart-count-hidden");
    }
  }, [props.cart]);

  return (
    <div className="nav-bar">
      <div className="nav-logo">
        <Link to="/">
          <img src={computer} alt="computer logo" className="logo-img"></img>
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
        <div className="shopping-cart-container" onClick={props.toggleCart}>
          <img
            src={shoppingBag}
            className="shopping-bag"
            alt="shopping bag"
          ></img>
          <div className={visibile}>{quantity}</div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
