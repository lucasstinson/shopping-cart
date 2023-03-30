import React from "react";

const ShopPage = (props) => {
  const addItem = (e) => {
    let productID = e.target.parentNode.dataset.itemId;
    props.addToCart(productID);
  };

  let shopItems = props.products.map((product) => (
    <div
      className="shop-item-container"
      data-item-id={product.id}
      key={product.id}
    >
      <img src={product.image} className="item-image" alt={product.title}></img>
      <div className="item-title">{product.title}</div>
      <div className="item-price">${product.price.toFixed(2)}</div>
      <button className="item-add" onClick={addItem}>
        Add to Cart
      </button>
    </div>
  ));

  return (
    <div className="shop-page-content">
      <div className="shop-items-container">{shopItems}</div>
    </div>
  );
};

export default ShopPage;
