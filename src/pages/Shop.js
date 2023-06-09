import React from "react";
import ShopPage from "../components/ShopPage";

const Shop = (props) => {
  return (
    <div className="shop-container">
      <ShopPage products={props.products} addToCart={props.addToCart} />
    </div>
  );
};

export default Shop;
