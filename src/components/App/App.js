import React from 'react';
import './App.css';
import Header from '../Header/Header.js';
import Home from '../Home/Home.js';
import Portfolio from '../Portfolio/Portfolio.js';
import Contact from '../Contact/Contact.js';
import Footer from '../Footer/Footer.js';
import {
  HashRouter as Router,
  Route
} from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      <Header/>
    <Route
      exact
      path="/"
      component={Home}
    />
        <Route
          exact
          path="/portfolio"
          component={Portfolio}
        />
        <Route
          exact
          path="/contact"
          component={Contact}
        />
    <Footer/>
    </div>
    </Router>
  );
}

export default App;
