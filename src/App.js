import React from "react";
import Nav from "./components/Nav";
import "./styles/app.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./pages/Shop";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Checkout from "./pages/Checkout";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
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
