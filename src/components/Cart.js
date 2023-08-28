import React from "react";
import "../styles/App.scss";

const Cart = ({ cartItems, products, removeFromCart }) => {
  if (!products) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Cart</h2>
      <div className="mainWrapper">
        <div className="productGrid">
          {cartItems.map((item, index) => (
            <div key={index} className="Products">
              <div className="Wrapper">
                <div className="itemImage">
                  <img
                    height="150px"
                    width="100px"
                    src={item.image}
                    alt="Product Image"
                  />
                </div>
                <div className="Title">
                  <p>{item.title}</p>
                  <p>{item.price}</p>
                </div>
                <div className="Description">
                  <p>
                    {item.description.length > 100
                      ? item.description.substring(0, 100) + "..."
                      : item.description}
                  </p>
                </div>
                <button onClick={() => removeFromCart(item)}>Remove</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cart;
