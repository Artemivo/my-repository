import React from "react";
import { useSelector } from "react-redux";
import { getTotalPrice } from "../redux/selectors/cart";

function CheckoutForm() {
  const products = useSelector((state) => state.products);
  const price = useSelector(getTotalPrice);

  return (
    <div className="check-out-form-block">
      <div className="">
        <p className="cart-item_list-amount_info-item">
          TOTAL : {Math.round(price * 100) / 100} &#8364;
        </p>
        <form className="check-out-form">
          <input
            type="text"
            placeholder="First name"
            className="check-out-input"
          />

          <input
            type="text"
            placeholder="Last name"
            className="check-out-input"
          />
          <input type="text" placeholder="Email" className="check-out-input" />

          <input type="text" placeholder="Phone" className="check-out-input" />

          <textarea
            name="message"
            id=""
            cols="30"
            rows="10"
            className="check-out-input-message"
          ></textarea>
          <button
            className="cart-checkout-button"
            onClick={(e) => e.preventDefault()}
          >
            SEND
          </button>
        </form>
      </div>
    </div>
  );
}

export default CheckoutForm;
