import React from "react";
import "../styles/App.scss";

const ProductModal = ({ product, onClose }) => {
  return (
    <div className="modalOverlay">
      <div className="modalContent">
        <button className="closeButton" onClick={onClose}>
          Close X
        </button>
        <div className="modalDetails">
          <img height="350px" src={product.image} alt={product.title} />
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <a href="/products" target="_blank" rel="noopener noreferrer">
            Learn more
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
