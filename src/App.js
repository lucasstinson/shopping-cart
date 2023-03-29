import React, { useState, useEffect } from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import "./styles/App.css";
import "./styles/Shop.css";
import "./styles/Contact.css";
import "./styles/Home.css";
import "./styles/Nav.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./pages/Shop";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Checkout from "./pages/Checkout";
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
      price: 199.99,
      image: amdCPU,
    },
    {
      id: 1,
      title: "ASUS Z790-H Motherboard",
      price: 299.99,
      image: motherboard,
    },
    {
      id: 2,
      title: "Cooler Master CPU Cooler",
      price: 59.99,
      image: heatSink,
    },
    {
      id: 3,
      title: "ASUS GeForce RTX 4090",
      price: 1999.99,
      image: gpu,
    },
    {
      id: 4,
      title: "Seagate 2TB Hard Drive",
      price: 75.99,
      image: hardDrive,
    },
    {
      id: 5,
      title: "Glorious Mechanical Keyboard",
      price: 119.99,
      image: keyboard,
    },
    {
      id: 6,
      title: "SanDisk 64GB MicroSD Memory",
      price: 16.99,
      image: microSD,
    },
    {
      id: 7,
      title: 'HP X27qc 27" Curved Monitor',
      price: 199.99,
      image: monitor,
    },
    {
      id: 8,
      title: "MSI Aegis Gaming PC",
      price: 2399.99,
      image: customPC,
    },
    {
      id: 9,
      title: "EVGA 850 Watt Power Supply",
      price: 164.99,
      image: psu,
    },
    {
      id: 10,
      title: "Crucial 32GB DDR5-5200 RAM",
      price: 134.99,
      image: ram,
    },
    {
      id: 11,
      title: "Razer Basilisk Wired Mouse",
      price: 69.99,
      image: mouse,
    },
  ]);

  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop products={products} />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
        <Footer />
      </BrowserRouter>
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
