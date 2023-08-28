import React, { useState } from "react";
import "../styles/Contact.scss";

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="contact-form">
      <h1 className="form-title">Contact Us</h1>
      {isSubmitted ? (
        <p className="success-message">Your request was sent!</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="form-field">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-field">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-field">
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows="4" required />
          </div>
          <div className="form-button">
            <button type="submit">Submit</button>
          </div>
        </form>
      )}
    </div>
  );
};

export default Contact;
