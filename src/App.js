import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "./App.css";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Services from "./Services";
import NavBar from "./NavBar";
import Footer from "./Footer";

function App() {
  return (
    <div className="app">
      <Router>
        <NavBar />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/service">
            <Services />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
