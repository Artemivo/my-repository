import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getTotalPrice } from "../redux/selectors/cart";
import soybean from "../img/icon/soybean.png";
import sesame from "../img/icon/sesame.png";
import wheat from "../img/icon/wheat.png";
import corn from "../img/icon/corn.png";
import CartItem from "./CartItem";

function HeaderComponent() {
  const [showCart, setShowCart] = useState(false);
  const products = useSelector((state) => state.products);
  const price = useSelector(getTotalPrice);

  

  return (
    <div className="header-container">
      <div className="header-logo">
        <h2 className="header-logo_text">Cracker</h2>
        <div className="header-logo_icon">logo</div>
      </div>
      <div className="header-cart">
        <div onClick={() => setShowCart(!showCart)} className="header-cart_logo">
          <p className="header-cart_logo-count">{products.length}</p>
        </div>
        <p className="header-cart_total-price">
          <span className="header-cart_total-price_text">TOTAL :</span> {Math.round(price*100)/100}{" "}
          &#8364;
        </p>
        <div className="header-cart_details-block">
          <p
            onClick={() => setShowCart(!showCart)}
            className="header-cart_details"
          >
            DETAILS
          </p>
          {showCart && (
            <div className="cart">
                
              <button
                onClick={() => setShowCart(!showCart)}
                className="cart-button-close"
              >
                X
              </button>
              <ul className="cart-list">
                <li className="cart-list-item-header">
                  <img src={soybean} alt="" className="cart-list-icon"></img>
                  <img src={sesame} alt="" className="cart-list-icon"></img>
                  <img src={wheat} alt="" className="cart-list-icon"></img>
                  <img src={corn} alt="" className="cart-list-icon"></img>
                </li>
                {products.length===0 && <p className="cart-item_list-amount_info-item">Your cart is empty, go and buy something</p>}
                {products &&
                  products.map((product) => (
                    <CartItem key={product.id} item={product} />
                  )) }
              </ul>
              <div className="cart-total">
                <p className="cart-item_list-amount_info-item">
                  TOTAL : {Math.round(price*100)/100} &#8364;
                </p>
                <button className="cart-checkout-button">CHECKOUT</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default HeaderComponent;
