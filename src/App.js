import React, { useState, useEffect } from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Shop from "./pages/Shop";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Checkout from "./pages/Checkout";
import Cart from "./components/Cart";
import "./styles/App.css";
import "./styles/Shop.css";
import "./styles/Contact.css";
import "./styles/Home.css";
import "./styles/Nav.css";
import "./styles/Cart.css";
import "./styles/Checkout.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import amdCPU from "./assets/images/shop-items/amd-cpu.jpg";
import motherboard from "./assets/images/shop-items/asus-mobo.jpg";
import heatSink from "./assets/images/shop-items/cpu-heat-sink.jpg";
import gpu from "./assets/images/shop-items/gpu.jpg";
import hardDrive from "./assets/images/shop-items/hard-drive.jpg";
import keyboard from "./assets/images/shop-items/keyboard.jpg";
import microSD from "./assets/images/shop-items/micro-sd.jpg";
import monitor from "./assets/images/shop-items/monitor.jpg";
import customPC from "./assets/images/shop-items/pre-built.jpg";
import psu from "./assets/images/shop-items/psu.jpg";
import ram from "./assets/images/shop-items/ram-stick.jpg";
import mouse from "./assets/images/shop-items/razer-mouse.jpg";

const App = () => {
  const [products, setProducts] = useState([
    {
      id: 0,
      title: "AMD Ryzen 7 5800X Processor",
      price: 200.0,
      image: amdCPU,
    },
    {
      id: 1,
      title: "ASUS Z790-H Motherboard",
      price: 300.0,
      image: motherboard,
    },
    {
      id: 2,
      title: "Cooler Master CPU Cooler",
      price: 60.0,
      image: heatSink,
    },
    {
      id: 3,
      title: "ASUS GeForce RTX 4090",
      price: 1450.0,
      image: gpu,
    },
    {
      id: 4,
      title: "Seagate 2TB Hard Drive",
      price: 75.0,
      image: hardDrive,
    },
    {
      id: 5,
      title: "Glorious Mechanical Keyboard",
      price: 120.0,
      image: keyboard,
    },
    {
      id: 6,
      title: "SanDisk 64GB MicroSD Memory",
      price: 17.0,
      image: microSD,
    },
    {
      id: 7,
      title: 'HP X27qc 27" Curved Monitor',
      price: 200.0,
      image: monitor,
    },
    {
      id: 8,
      title: "MSI Aegis Gaming PC",
      price: 2100.0,
      image: customPC,
    },
    {
      id: 9,
      title: "EVGA 850 Watt Power Supply",
      price: 165.0,
      image: psu,
    },
    {
      id: 10,
      title: "Crucial 32GB DDR5-5200 RAM",
      price: 135.0,
      image: ram,
    },
    {
      id: 11,
      title: "Razer Basilisk Wired Mouse",
      price: 70.0,
      image: mouse,
    },
  ]);

  const [cart, setCart] = useState([]);

  const [cartTotal, setCartTotal] = useState(0);

  const total = () => {
    let value = 0;
    if (cart.length > 0) {
      for (let i = 0; i < cart.length; i++) {
        value += cart[i].price * cart[i].quantity;
      }
    } else {
      value = 0;
    }
    setCartTotal(value.toFixed(2));
  };

  useEffect(() => {
    total();
  }, [cart]);

  const addToCart = (productID) => {
    let product = getProduct(productID);

    // create a basic new product going to the cart
    const newCartItem = {
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.image,
      quantity: 1,
    };

    // if theres nothing in the cart, add the product
    if (cart.length === 0) {
      setCart([newCartItem]);
      // else if this product is in the cart, update the quantity
    } else if (isItemInCart(productID)) {
      setCart(increaseQuantity(cart[cartIndex(productID)]));
      // if its not in the cart, add the product to the cart
    } else {
      setCart([...cart, newCartItem]);
    }
  };

  const getProduct = (productID) => {
    for (let i = 0; i < products.length; i++) {
      if (products[i].id == productID) {
        return products[i];
      }
    }
  };

  const cartIndex = (productID) => {
    for (let i = 0; i < cart.length; i++) {
      if (cart[i].id == productID) {
        return i;
      }
    }
  };

  const isItemInCart = (productID) => {
    for (let i = 0; i < cart.length; i++) {
      if (cart[i].id == productID) {
        return true;
      }
    }
    return false;
  };

  const increaseQuantity = (product) => {
    const newCartItem = {
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.image,
      quantity: product.quantity + 1,
    };

    const firstSlice = cart.slice(0, cartIndex(product.id));
    const secondSlice = cart.slice(cartIndex(product.id) + 1);

    const newCart = [...firstSlice, newCartItem, ...secondSlice];
    return newCart;
  };

  const decreaseQuantity = (productID) => {
    // find the item in the cart by using the product ID
    let productIndex = cartIndex(productID);
    let product = cart[productIndex];

    let newCartItem = {
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.image,
      quantity: product.quantity - 1,
    };

    // once you get the object, decrease the quanity by 1
    let newCart;
    const firstSlice = cart.slice(0, productIndex);
    const secondSlice = cart.slice(productIndex + 1);

    // if the quantity == 0, remove the array
    if (newCartItem.quantity == 0) {
      newCart = [...firstSlice, ...secondSlice];
    } else {
      newCart = [...firstSlice, newCartItem, ...secondSlice];
    }
    setCart(newCart);
  };

  const [openCart, setOpenCart] = useState("cart-container-hidden");

  const toggleCart = () => {
    if (openCart == "cart-container-hidden") {
      setOpenCart("cart-container");
    } else {
      setOpenCart("cart-container-hidden");
    }
  };

  return (
    <div className="App">
      <HashRouter>
        <Nav cart={cart} toggleCart={toggleCart} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/shop"
            element={
              <Shop
                products={products}
                addToCart={addToCart}
                decreaseQuantity={decreaseQuantity}
              />
            }
          />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/checkout"
            element={
              <Checkout
                cart={cart}
                total={cartTotal}
                decreaseQuantity={decreaseQuantity}
                addToCart={addToCart}
              />
            }
          />
        </Routes>
        <Footer />
        <Cart
          products={products}
          cart={cart}
          total={cartTotal}
          addToCart={addToCart}
          decreaseQuantity={decreaseQuantity}
          openCart={openCart}
          toggleCart={toggleCart}
        />
      </HashRouter>
    </div>
  );
};

export default App;

// Create a computer store shop application. The website should
// have a nav bar, home page, shop/catalog page, checkout page.

// The nav bar on the top of the page should display at all times
// and have a shop name & logo, links to home, shop, contact and
// a shopping cart that will show how many items in the cart.

// Home page should be a taste of what the website is selling
// and include tag line, and a button to the shop page.

// shop should list out each item that is being sold with an add
// to cart button on the bottom of the item.
// flex to center grid to display the actual items.

// contact lists contact information (github logo with link to github)

// when you click on the shopping cart button on the top, it will slide
// from the right side. Include items in cart (quantity, cost, an add
// more, delete more, remove item, the total) a button to checkout/close.

// The checkout should look exactly like the cart but as a page.
// It should include buttons such as Proceed to payment / Back to shop.

// footer can incldue github logo Developed by lucasstinson
