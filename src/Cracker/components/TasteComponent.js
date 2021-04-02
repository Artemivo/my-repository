import React, { useEffect, useState } from "react";
import Navigation from "./Navigation";

function TasteComponent() {
  return (
    <div>
      <nav className="taste-it-block_nav">
        <Navigation />
      </nav>
      <section>
      <h1 className="taste-it-block_header-title">
        mostly tastes with freshes
      </h1>
      <div className="taste-it-block_header">
        <p className="taste-it-block_header-text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
          ipsum dolor sit ame
        </p>
      </div>
      <button className="taste-it-block_button">TASTE IT</button>
      </section>
    </div>
  );
}

export default TasteComponent;
