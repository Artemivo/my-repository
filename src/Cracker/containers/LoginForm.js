import React from "react";

function LoginForm() {
  return (
    <div className="check-out-form-block">
      <form className="check-out-form">
        <input type="text" placeholder="Email" className="check-out-input" />

        <input
          type="password"
          placeholder="*******"
          className="check-out-input"
        />

        <button
          className="cart-checkout-button"
          onClick={(e) => e.preventDefault()}
        >
          LOGIN
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
