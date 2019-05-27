import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import HomePage from '../src/pages/Home';
import Details from '../src/pages/Details';
import Favorite from '../src/pages/Favorite';




class App extends Component {
    render() {
        return (
            <BrowserRouter> 
              <Route exact path="/" component={HomePage} />
              <Route path="/Details" component={Details} />
              <Route path="/Favorite" component={Favorite} />
            </BrowserRouter>
            
        );
    }
}

export default App;
