import React, { useState } from "react";
import "../styles/App.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../assets/images/theBinLogo.png";
import slogan from "../assets/images/theBinSlogan.png";
import DropdownContent from "./DropDown";

const Navbar = ({ categories, cartItems }) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleCategoryClick = (category) => {
    console.log(`Navigating to category: ${category}`);
  };

  if (!cartItems) {
    return null;
  }
  return (
    <div className="nav">
      <div className="logo">
        <a href="./" className="raccoon">
          <img height="100px" src={logo} alt="Logo" />
        </a>
        <a href="./" className="slogan">
          <img height="100px" src={slogan} alt="slogan" />
        </a>
      </div>
      <div className="navWrapper">
        <a href="./">
          <div className="menu">Home</div>
        </a>
        <a href="./products">
          <div
            className={`menu ${isDropdownOpen ? "activeMenuItem" : ""}`}
            onMouseEnter={handleDropdownToggle}
            onMouseLeave={handleDropdownToggle}
          >
            Products
            {isDropdownOpen && (
              <DropdownContent
                categories={categories}
                onClick={handleCategoryClick}
              />
            )}
          </div>
        </a>
        <a href="/contact">
          <div className="menu">Contact Us!</div>
        </a>
        <a href="/about">
          <div className="menu">About Us</div>
        </a>
        <a href="/cart">
          <div className="menu">
            <FontAwesomeIcon icon="fa-cart-shopping" />
            <span className="cart-count">({cartItems.length} items)</span>
          </div>
        </a>
      </div>
    </div>
  );
};
export default Navbar;
