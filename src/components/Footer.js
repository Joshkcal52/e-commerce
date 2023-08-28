import React from "react";
import "../styles/Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        1-800-THEBIN-W
        <p>&copy; {new Date().getFullYear()} THE BIN-All rights reserved.</p>
        1000 N 1000 S Orem Utah
      </div>
    </footer>
  );
};

export default Footer;
