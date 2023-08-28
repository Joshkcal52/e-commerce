import React, { useState } from "react";
import "../styles/App.scss";

export default function ProductCard(props) {
  const [modalProduct, setModalProduct] = useState(null);

  const openModal = (product) => {
    setModalProduct(product);
  };

  const closeModal = () => {
    setModalProduct(null);
  };

  // if (!products) {
  //   return <div>Loading...</div>;
  // }

  const handleAddToCart = (product) => {
    props.addToCart(product);
  };

  return (
    <div
      key={props.product.id}
      className="Products"
      onClick={() => openModal(props.product)}
    >
      <div className="Wrapper">
        <div
          className="itemImage"
          style={{ backgroundImage: `url(${props.product.image})` }}
        />
        <div className="Title">
          <p>
            {props.product.title.length > 28
              ? props.product.title.substring(0, 25) + "..."
              : props.product.title}
          </p>
          <p>${props.product.price}</p>
        </div>
        <div className="Description">
          {props.product.description.length > 90
            ? props.product.description.substring(0, 87) + "..."
            : props.product.description}
        </div>
        <div className="button-container">
          <button
            className="add-to-cart"
            onClick={() => handleAddToCart(props.product)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
    // {modalProduct && (
    //   <ProductModal product={modalProduct} onClose={closeModal} />
    // )}
  );
}
