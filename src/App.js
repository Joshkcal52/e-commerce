import React, { useState, useEffect } from "react";
import "./styles/App.scss";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home.js";
import Products from "./components/Products.js";
import Navbar from "./components/Navbar.js";
import Footer from "./components/Footer.js";
import Contact from "./components/Contact.js";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import JeweleryFetch from "./components/JeweleryFetch";
import ElectronicsFetch from "./components/ElectronicsFetch.js";
import MClothingFetch from "./components/MClothingFetch.js";
import WomensClothingFetch from "./components/WClothingFetch.js";
import About from "./components/About.js";
import Cart from "./components/Cart.js";
library.add(faCartShopping);

function App() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  const removeFromCart = (itemToRemove) => {
    const updatedCart = cartItems.filter((item) => item.id !== itemToRemove.id);
    setCartItems(updatedCart);
    sessionStorage.setItem("cartItems", JSON.stringify(updatedCart));
  };
  useEffect(() => {
    Promise.all([
      fetch("https://fakestoreapi.com/products"),
      fetch("https://fakestoreapi.com/products/categories"),
    ])
      .then(([productsResponse, categoriesResponse]) =>
        Promise.all([productsResponse.json(), categoriesResponse.json()])
      )
      .then(([productsData, categoriesData]) => {
        setProducts(productsData);
        setCategories(categoriesData);
        console.log(categoriesData);

        const storedCartItems = sessionStorage.getItem("cartItems");
        if (storedCartItems) {
          setCartItems(JSON.parse(storedCartItems));
        }
      })
      .catch((err) => {
        console.error("Get Product Error: ", err);
      });
  }, []);

  const addToCart = (product) => {
    const updatedCart = [...cartItems, product];
    setCartItems(updatedCart);
    sessionStorage.setItem("cartItems", JSON.stringify(updatedCart));
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar categories={categories} cartItems={cartItems} />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/products" exact>
            <Products products={products} addToCart={addToCart} />
          </Route>
          <Route path="/contact" exact>
            <Contact />
          </Route>
          <Route path="/jewelery" exact>
            <JeweleryFetch addToCart={addToCart} />
          </Route>
          <Route path="/electronics" exact>
            <ElectronicsFetch addToCart={addToCart} />
          </Route>
          <Route path="/mensClothes" exact>
            <MClothingFetch addToCart={addToCart} />
          </Route>
          <Route path="/womensClothes" exact>
            <WomensClothingFetch addToCart={addToCart} />
          </Route>
          <Route path="/about" exact>
            <About />
          </Route>
          <Route path="/cart" exact>
            <Cart
              products={products}
              cartItems={cartItems}
              removeFromCart={removeFromCart}
            />
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
