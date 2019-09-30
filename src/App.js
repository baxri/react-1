import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import axios from "axios";
import Navbar from "../src/components/Navbar";
import Home from "../src/components/Home";
import Details from "../src/components/Details";
import Favorites from "../src/components/Favorites";

class App extends Component {
  state = {
    books: []
  };
  componentDidMount() {
    axios
      .get(
        "https://www.googleapis.com/books/v1/volumes?q=harry&fbclid=IwAR0GNT0p1cF3NPkf81hy-ZSfPcGFGRK6WdAXWoBORurTiwrACCpPUHUOSgE"
      )
      .then(response => {
        this.setState({ books: response.data.items });
      })
      .catch(error => {
        console.log(error);
      });
  }
  updateState = book => {
    let books = [...this.state.books, book];
    this.setState({
      books: books
    });
  };

  render() {
    const { books } = this.state;
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <Route
            exact
            path="/"
            component={() => (
              <Home data={books} updateState={this.updateState} />
            )}
          />
          <Route path="/Details" component={Details} />
          <Route
            path="/Favorites"
            component={() => <Favorites data={books} />}
          />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
