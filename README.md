# Shopping Cart React App

A simple fake store with a shopping cart. This application uses React hooks and React router.

## Project: Shopping Cart

The project is from The Odin Project [curriculum](https://www.theodinproject.com/lessons/node-path-javascript-shopping-cart), or see the Assignment Below.

A **live preview** of the project is [here](https://lucasstinson.github.io/shopping-cart/).

### Overview

#### **Features:**

- The computer shop allows a user to browse through computer parts and add or remove them from their cart based on their needs.
- Navigate through the home page, shop page, contact page, cart and checkout page.
- Each computer part can be added or removed from their cart in multiple locations.
  - Add any item from the shop page
  - Add or Remove any item from the shopping cart.
  - Add or Remove any item from the checkout page.
- The subtotal of each individual item and total of all items are shown in the cart and on the checkout page.
- Mobile friendly!

#### **Tools:**

<p align="left"> 
<a href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" alt="html5" width="50" height="50"/> </a> 
<a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" alt="css3" width="50" height="50"/> </a>
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="50" height="50"/> </a>
<a href="https://reactjs.org/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" alt="react" width="50" height="50"/> </a>
<a href=https://reactrouter.com/en/main target="_blank"> <img src="./src/assets/images/react-router.svg" alt="react-router" width="50" height="50"/> </a>
</p>

#### **Areas of Improvement:**

- The styling is on the plain side and should be revamped for a better user experience.
  - Clicking add to cart should be more responsive to show an item was added to the cart.
  - When clicking the cart button, just appears. A slide transition would provide a smoother and less abrupt feel.
  - The links to pages on the nav bar have minimal styling.
- The code could be refactored to remove any duplicate code.

### Assignment

<div class="lesson-content__panel" markdown="1">

1. Create a new project with `create-react-app` and get rid of the boilerplate as in the previous projects.
1. Think about the component and the folder structure. How could you set up your application? Which components or functionalities do you need?
1. You should have at least two pages (a homepage and a shop page, which includes your shopping cart). Let a user navigate between the pages with a navigation bar, which will be shown on both routes.
1. To your homepage, you can add whatever you'd like! A few images or information will be totally fine; it doesn't have to be something fancy. The main goal of the project is to focus on setting up the shopping cart. The homepage is there to practice routing using `react-router-dom`.
1. On your shopping cart route, a user should see a sticky bar (it can be just a top section as well), which displays the number of items currently in the cart. You should also have a button next to it where you can go to the cart to checkout and pay (however we are not going to implement this logic here).
1. Build individual card items for each of your products. Display an input field on it, which lets a user manually type in how many items they want to buy. Also, add an increment and decrement button next to it for fine-tuning. You can also display a title for each product as well as an "Add To Cart" button.
1. Once a user has submitted their order, the amount on the cart itself should adjust.
1. Make sure to test your app thoroughly using the React Testing Library. Take care that you don't directly test `react-router-dom`, since it is an external library and the developers working on it must have tested the library already.
1. As usual, style your application so you can show it off!
1. Lastly, push the project to GitHub! Follow [this link](https://create-react-app.dev/docs/deployment/#github-pages) for instructions on how to deploy React applications with client-side routing to Github Pages. Be aware that the page will stay blank, unless you provide a basename to the `<BrowserRouter />`. For a more detailed description, read this part of the [React Router docs](https://reactrouter.com/en/main/router-components/router).
</div>
