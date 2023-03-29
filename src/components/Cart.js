import React from "react";

const Cart = (props) => {
  return (
    <div className="cart-container">
      <div className="cart">
        <h1 className="cart-title">Your Shopping Cart</h1>
        <div className="cart-items">
          <div className="cart-item">
            <img
              src={props.products[0].image}
              className="cart-item-image"
              alt={props.products[0].title}
            ></img>
            <div className="cart-item-details">
              <div className="cart-item-title">{props.products[0].title}</div>
              <div className="cart-item-price">${props.products[0].price}</div>
              <div className="count-container">
                <button className="add-one">+</button>
                <div className="cart-item-count">2</div>
                <button className="remove-one">-</button>
              </div>
            </div>
          </div>
          <div className="cart-item">
            <img
              src={props.products[0].image}
              className="cart-item-image"
              alt={props.products[0].title}
            ></img>
            <div className="cart-item-details">
              <div className="cart-item-title">{props.products[0].title}</div>
              <div className="cart-item-price">${props.products[0].price}</div>
              <div className="count-container">
                <button className="add-one">+</button>
                <div className="cart-item-count">2</div>
                <button className="remove-one">-</button>
              </div>
            </div>
          </div>
          <div className="cart-item">
            <img
              src={props.products[0].image}
              className="cart-item-image"
              alt={props.products[0].title}
            ></img>
            <div className="cart-item-details">
              <div className="cart-item-title">{props.products[0].title}</div>
              <div className="cart-item-price">${props.products[0].price}</div>
              <div className="count-container">
                <button className="add-one">+</button>
                <div className="cart-item-count">2</div>
                <button className="remove-one">-</button>
              </div>
            </div>
          </div>
          <div className="cart-item">
            <img
              src={props.products[0].image}
              className="cart-item-image"
              alt={props.products[0].title}
            ></img>
            <div className="cart-item-details">
              <div className="cart-item-title">{props.products[0].title}</div>
              <div className="cart-item-price">${props.products[0].price}</div>
              <div className="count-container">
                <button className="add-one">+</button>
                <div className="cart-item-count">2</div>
                <button className="remove-one">-</button>
              </div>
            </div>
          </div>
          <div className="cart-item">
            <img
              src={props.products[0].image}
              className="cart-item-image"
              alt={props.products[0].title}
            ></img>
            <div className="cart-item-details">
              <div className="cart-item-title">{props.products[0].title}</div>
              <div className="cart-item-price">${props.products[0].price}</div>
              <div className="count-container">
                <button className="add-one">+</button>
                <div className="cart-item-count">2</div>
                <button className="remove-one">-</button>
              </div>
            </div>
          </div>
        </div>
        <div className="cart-buttons">
          <button className="checkout-button">CHECK OUT</button>
          <button className="close-button">CLOSE</button>
        </div>
      </div>
    </div>
  );
};
export default Cart;
