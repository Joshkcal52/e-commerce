import React, { useState, useEffect } from "react";

const Filter = ({ setCategory }) => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((err) => console.log("Category Fetch Error", err));
  }, []);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCategory(category); // Notify parent component about the category change
  };

  return (
    <div className="filter">
      <div className="dropdownContent">
        <div className="dropdownItem" onClick={() => handleCategoryChange("")}>
          All Products
        </div>
        {categories.map((category) => (
          <div
            key={category}
            className="dropdownItem"
            onClick={() => handleCategoryChange(category)}
          >
            {category}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Filter;
