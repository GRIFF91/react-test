import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import home from "./pages/home";
import about from "./pages/about";
import contact from "./pages/contact";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          

          <Route exact path="/" component={home} />
          <Route exact path="/about" component={about} />
          <Route exact path="/contact" component={contact} />

        </div>
      </Router>
    );
  }
}

export default App;