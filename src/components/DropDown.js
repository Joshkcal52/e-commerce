import React from "react";

const DropdownContent = ({ categories }) => {
  return (
    <div className="dropdownContent">
      <a href="/products" className="dropdownItem">
        All Categories
      </a>
      {categories.map((category, index) => (
        <a
          key={index}
          href={`/${
            category === "jewelery"
              ? "jewelery"
              : category === "men's clothing"
              ? "mensClothes"
              : category === "women's clothing"
              ? "womensClothes"
              : category === "electronics"
              ? "electronics"
              : ""
          }`}
          className="dropdownItem"
        >
          {category}
        </a>
      ))}
    </div>
  );
};

export default DropdownContent;
