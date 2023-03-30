import React from "react";
// import amdCPU from "../assets/images/shop-items/amd-cpu.jpg";

const ShopPage = (props) => {
  console.log(props.products[0]);
  let shopItems = props.products.map((product) => (
    <div
      className="shop-item-container"
      data-item-id={product.id}
      key={product.id}
    >
      <img src={product.image} className="item-image" alt={product.title}></img>
      <div className="item-title">{product.title}</div>
      <div className="item-price">${product.price}</div>
      <button className="item-add">Add to Cart</button>
    </div>
  ));

  return (
    <div className="shop-page-content">
      <div className="shop-items-container">{shopItems}</div>
    </div>
  );
};

export default ShopPage;
