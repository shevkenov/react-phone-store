import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import Modal from "./components/Modal";
import Navbar from "./components/Navbar";
import Details from "./components/Details";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import Default from "./components/Default";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
          <Switch>
            <Route exact path="/" component={ProductList} />
            <Route exact path="/details" component={Details} />
            <Route exact path="/cart" component={Cart} />
            <Route component={Default} />
          </Switch>
          <Modal>
          </Modal>
      </React.Fragment>
    );
  }
}

export default App;
