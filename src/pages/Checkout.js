import React from "react";
import CheckoutPage from "../components/CheckoutPage";

const Checkout = (props) => {
  return (
    <div className="Checkout-container">
      <h1 className="checkout-page-title">Check Out</h1>
      <CheckoutPage
        cart={props.cart}
        total={props.total}
        decreaseQuantity={props.decreaseQuantity}
        addToCart={props.addToCart}
      />
    </div>
  );
};

export default Checkout;
