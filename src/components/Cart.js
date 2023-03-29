import React from "react";

const Cart = (props) => {
  let cartItems = props.cart.map((item) => (
    <div className="cart-item">
      <img src={item.image} className="cart-item-image" alt={item.title}></img>
      <div className="cart-item-details">
        <div className="cart-item-title">{item.title}</div>
        <div className="cart-item-price">${item.price}</div>
        <div className="count-container">
          <button className="add-one">+</button>
          <div className="cart-item-count">2</div>
          <button className="remove-one">-</button>
        </div>
      </div>
    </div>
  ));

  return (
    <div className="cart-container">
      <div className="cart">
        <h1 className="cart-title">Your Shopping Cart</h1>
        <div className="cart-items">{cartItems}</div>
        <div className="cart-buttons">
          <button className="checkout-button">CHECK OUT</button>
          <button className="close-button">CLOSE</button>
        </div>
      </div>
    </div>
  );
};
export default Cart;
