import React from "react";
import { Link } from "react-router-dom";

const Cart = (props) => {
  const addItem = (e) => {
    let productID = e.target.parentNode.parentNode.parentNode.dataset.itemId;
    props.addToCart(productID);
  };

  const deleteItem = (e) => {
    let productID = e.target.parentNode.parentNode.parentNode.dataset.itemId;
    props.decreaseQuantity(productID);
  };

  let cartItems = [];
  if (props.cart.length > 0) {
    cartItems = props.cart.map((item) => (
      <div className="cart-item" data-item-id={item.id} key={item.id}>
        <img
          src={item.image}
          className="cart-item-image"
          alt={item.title}
        ></img>

        <div className="cart-item-details">
          <div className="cart-item-title">{item.title}</div>
          <div className="cart-item-price">
            ${(item.price * item.quantity).toFixed(2)}
          </div>
          <div className="count-container">
            <button className="cart-remove" onClick={deleteItem}>
              -
            </button>
            <div className="cart-item-count">{item.quantity}</div>

            <button className="cart-add" onClick={addItem}>
              +
            </button>
          </div>
        </div>
      </div>
    ));
  }

  return (
    <div className={props.openCart}>
      <div className="cart-background" onClick={props.toggleCart}></div>
      <div className="cart">
        <h1 className="cart-title">Your Shopping Cart</h1>
        <div className="cart-items">{cartItems}</div>
        <div className="cart-buttons">
          <div className="total">Total: ${props.total}</div>
          <button className="checkout-button">CHECK OUT</button>
          <button className="close-button" onClick={props.toggleCart}>
            CLOSE
          </button>
        </div>
      </div>
    </div>
  );
};
export default Cart;
