import React from "react";
import {
  BrowserRouter as Router,
  Link,
  NavLink,
  Route,
  Switch,
} from "react-router-dom";
import HeaderComponent from "./components/HeaderComponent";
import Navigation from "./components/Navigation";
import AboutBlock from "./containers/AboutBlock";
import CheckoutForm from "./containers/CheckoutForm";
import FooterContainer from "./containers/FooterContainer";
import HeaderApp from "./containers/HeaderApp";
import Home from "./containers/Home";
import LoginForm from "./containers/LoginForm";

function Routes() {
  return (
    <div className="wrapper">
      <Router>
        <HeaderApp />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact>
            <Navigation />
            <AboutBlock />
          </Route>
          <Route path="/contacts" exact>
            <Navigation />
            <FooterContainer />
          </Route>
          <Route path="/checkout" exact>
            <Navigation />
            <CheckoutForm />
          </Route>
          <Route path="/login" exact>
            <Navigation />
            <LoginForm />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default Routes;
