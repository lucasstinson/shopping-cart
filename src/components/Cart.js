import React from "react";

const Cart = () => {
  return (
    <div className="cart-container">
      <div className="cart">
        <h1 className="cart-title">Your Shopping Cart</h1>
        <div className="cart-items">
          <div className="cart-item"></div>
        </div>
        <div className="cart-buttons">
          <button className="checkout-button">CHECKOUT</button>
          <button className="close-button">CLOSE</button>
        </div>
      </div>
    </div>
  );
};
export default Cart;
