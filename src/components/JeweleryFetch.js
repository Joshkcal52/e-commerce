import React, { useState, useEffect } from "react";
import ProductModal from "./ProductModal";

const JeweleryFetch = (addToCart) => {
  const [products, setProducts] = useState([]);
  const [modalProduct, setModalProduct] = useState(null);

  const openModal = (product) => {
    setModalProduct(product);
  };

  const closeModal = () => {
    setModalProduct(null);
  };

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        const jewelery = json.filter(
          (product) => product.category === "jewelery"
        );
        setProducts(jewelery);
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  if (!products) {
    return <div>Loading...</div>;
  }

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  return (
    <div className="mainWrapper">
      <div className="productGrid">
        {products.map((product, index) => (
          <div
            key={index}
            className="Products"
            onClick={() => openModal(product)}
          >
            <div className="Wrapper">
              <div className="itemImage">
                <img
                  height="150px"
                  width="100px"
                  src={product.image}
                  alt="Product Image"
                />
              </div>
              <div className="Title">
                <p>{product.title}</p>
                <p>{product.price}</p>
              </div>
              <div className="Description">
                <p>
                  {product.description.length > 100
                    ? product.description.substring(0, 100) + "..."
                    : product.description}
                </p>
              </div>
              <button onClick={() => handleAddToCart(product)}>
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
      {modalProduct && (
        <ProductModal product={modalProduct} onClose={closeModal} />
      )}
    </div>
  );
};

export default JeweleryFetch;
