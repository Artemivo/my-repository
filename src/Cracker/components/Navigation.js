import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";

function Navigation() {
  useEffect(() => {
    const navWrapper = document.getElementById("nav");
    const parent = navWrapper.parentNode;
    if (parent.nodeName !== "NAV") {
      navWrapper.classList.add("nav-active");
    }
  }, []);
  return (
    <div className="nav-wrapper" id="nav">
      <ul className="taste-it-block_nav-list">
        <li className="nav-logo">
          <h2 className="header-logo_text">Cracker</h2>
          <div className="header-logo_icon">logo</div>
          <NavLink className="header-logo_icon-link" to="/"></NavLink>
        </li>
        <li className="taste-it-block_nav-list_item">
          <NavLink className="taste-it-block_nav-list_item-link" to="/">
            HOME
          </NavLink>
        </li>
        <li className="taste-it-block_nav-list_item">
          <NavLink className="taste-it-block_nav-list_item-link" to="/about">
            ABOUT US
          </NavLink>
        </li>
        <li className="taste-it-block_nav-list_item">
          <NavLink className="taste-it-block_nav-list_item-link" to="/contacts">
            CONTACTS
          </NavLink>
        </li>
        <li className="taste-it-block_nav-list_item">
          <NavLink className="taste-it-block_nav-list_item-link" to="/checkout">
            CHECKOUT
          </NavLink>
        </li>
        <li className="taste-it-block_nav-list_item">
          <NavLink className="taste-it-block_nav-list_item-link" to="login">
            ACCOUNT
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Navigation;
