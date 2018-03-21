import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import home from "./pages/home/home";
import about from "./pages/about/about";
import contact from "./pages/contact/contact";

import Navbar from "./components/header/header";
import Nav from "./components/footer/footer";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />

          <Route exact path="/" component={home} />
          <Route  path="/about" component={about} />
          <Route  path="/contact" component={contact} />

          <Nav />
        </div>
      </Router>
    );
  }
}

export default App;