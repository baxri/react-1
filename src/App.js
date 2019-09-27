import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from "../src/components/Navbar";
import Home from "../src/components/Home";
import Details from "../src/components/Details";
import Favorites from "../src/components/Favorites";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route path="/Details" component={Details} />
          <Route path="/Favorites" component={Favorites} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
