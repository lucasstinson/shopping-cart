# Shopping Cart React App

A simple fake store with a shopping cart. This application uses React hooks and React router.

## Project: Shopping Cart

The project is from The Odin Project [curriculum](https://www.theodinproject.com/lessons/node-path-javascript-shopping-cart). Or see the Assignment Below.

### Overview

#### **Features:**

- You add all identifying information such as name, phone number, email, location and github.
- You can add and delete your work experience.
- Your experience includes the company you work for, the title of your position, the date you started, the date you ended work there and a description about what the position entails.
- You can add and delete your education.
- Your education includes where you attended school, degree you received, the time you started school and when you finished.

#### **Tools:**

<p align="left"> 
<a href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" alt="html5" width="50" height="50"/> </a> 
<a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" alt="css3" width="50" height="50"/> </a>
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="50" height="50"/> </a>
<a href="https://reactjs.org/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" alt="react" width="50" height="50"/> </a>
<a href=https://reactrouter.com/en/main target="_blank"> <img src="./src/assets/images/react-router.svg" alt="react-router" width="50" height="50"/> </a>
</p>

#### **Areas of Improvement:**

-

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
