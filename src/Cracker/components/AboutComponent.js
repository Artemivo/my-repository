import React from "react";
import { useSelector } from "react-redux";
import { getTotalPrice } from "../redux/selectors/cart";
import AboutConstructor from "./AboutConstructor";

function AboutComponent() {
  const price = useSelector(getTotalPrice);

  return (
    <div className="about-component">
      <h2 className="about-block_title">ABOUT CRACKER</h2>
      <div className="about-block-img"></div>
      <p className="about-block_text">
        <span className="about-block_text-text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute
          irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
          fugiat nulla pariatur. Excepteur sint occaecat, sunt in culpa qui
          officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde
          omnis iste natus error sit voluptatem accusantium doloremque
          laudantium, architecto beatae vitae dicta sunt explicabo. Neque porro
          quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
          adipisci velit, sed quia non numquam eius modi tempora incidunt ut
          labore et dolore magnam aliquam quaerat voluptatem.
        </span>
        <span className="about-block_text-after">Cracker</span>
      </p>
      <div className="about-block_constructor-block">
        <h2 className="about-block_constructor-title">CRACKER CONSTRUCTOR</h2>
        <p className="about-block_constructor-current">
          CURRENT-VALUE: {Math.round(price*100)/100} &#8364;
        </p>
        <AboutConstructor />
      </div>
    </div>
  );
}

export default AboutComponent;
