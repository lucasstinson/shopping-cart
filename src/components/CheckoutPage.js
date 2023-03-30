import React from "react";
import { Link } from "react-router-dom";

const CheckoutPage = (props) => {
  const addItem = (e) => {
    let productID = e.target.parentNode.parentNode.dataset.itemId;
    props.addToCart(productID);
  };

  const deleteItem = (e) => {
    let productID = e.target.parentNode.parentNode.dataset.itemId;
    props.decreaseQuantity(productID);
  };

  let cartItems = props.cart.map((cart) => (
    <div
      className="checkout-item-container"
      data-item-id={cart.id}
      key={cart.id}
    >
      <img
        src={cart.image}
        className="checkout-item-image"
        alt={cart.title}
      ></img>
      <div className="checkout-item-title">{cart.title}</div>
      <div className="checkout-item-price">
        ${cart.price.toFixed(2) * cart.quantity}
      </div>
      <div className="checkout-quantity-details-container">
        <button className="checkout-item-remove" onClick={deleteItem}>
          -
        </button>
        <div className="checkout-item-quantity">{cart.quantity}</div>
        <button className="checkout-item-add" onClick={addItem}>
          +
        </button>
      </div>
    </div>
  ));

  return (
    <div className="checkout-page-content">
      <div className="checkout-items-container">{cartItems}</div>
      <div className="checkout-total-buttons">
        <div className="total">Total: ${props.total}</div>

        <button className="payment-button">Proceed to Payment</button>
        <Link to="/shop" className="back-to-shop-link">
          <button className="back-to-shop">Back to Shop</button>
        </Link>
      </div>
    </div>
  );
};

export default CheckoutPage;
