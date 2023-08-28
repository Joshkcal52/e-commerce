import React, { useState } from "react";
import "../styles/Home.scss";

const Home = () => {
  return (
    <div className="backgroundImage">
      <div className="contentWrap">
        <h3>
          "I'ma take your grandpa's style, I'ma take your grandpa's style No,
          for real, ask your grandpa, can I have his hand-me-downs?"-Macklemore
        </h3>
        <h2>Come Pop Some Tags in Our Thrift BIN!</h2>
        <img
          src="https://www.fdgoods.com/cdn/shop/products/M7102_1024x733.jpeg?v=1509637830"
          alt="Thrift Shop"
          width="500px"
        ></img>
      </div>
      <div className="homeDiv">
        <div className="topWrap">
          <a href="/jewelery" className="category-link">
            <div className="jewelery">
              <img
                src="https://ion.r2net.com/images/HomePage/SpecialGalleriesBanner/N/Mobile/Vertical/DiamondStuds.jpg"
                alt="ringPhoto"
                className="rounded-image"
              ></img>
              <span className="category-text">Jewelry</span>
            </div>
          </a>
          <a href="/womensClothes" className="category-link">
            <div className="womensClothes">
              <img
                src="https://www.mychicobsession.com/wp-content/uploads/2022/01/striped-top-outfit-5-of-6-1-scaled.jpg"
                alt="womenPhoto"
                className="rounded-image"
              ></img>
              <span className="category-text">Women's Apparel</span>
            </div>
          </a>
        </div>
        <div className="bottomWrap">
          <a href="/mensClothes" className="category-link">
            <div className="mensClothes">
              <img
                src="https://images.ctfassets.net/ydv6sq0kb5bw/2ic6Xcy6QrExeCfMPyhBWV/28bd28e1f40f503f10c31e6b5bfb5bc7/shutterstock_1562565562__1_.jpg?fit=fill&q=75&fm=webp&f=face&w=1920&h=2688"
                alt="menPhoto"
                className="rounded-image"
              ></img>
              <span className="category-text">Men's Apparel</span>
            </div>
          </a>
          <a href="/electronics" className="category-link">
            <div className="electronics">
              <img
                src="https://images.pexels.com/photos/792345/pexels-photo-792345.jpeg?cs=srgb&dl=pexels-willian-justen-de-vasconcellos-792345.jpg&fm=jpg"
                alt="electronicsPhoto"
                className="rounded-image"
              ></img>
              <span className="category-text">Electronics</span>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
