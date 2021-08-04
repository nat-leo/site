import React, { Component } from 'react';
import {Router, Link} from "@reach/router"

import { MenuItems } from "./MenuItems";
import "./Navbar.css"
import Home from "../pages/Home.js"
import Projects from "../pages/Projects.js"

class Navbar extends Component {
  render() {
    return(
      <div>
        <nav className="NavbarItems">
          <h1 className="navbar-logo">Nathaniel Liu</h1>
          <Link to="/">Home</Link>
          <Link to="/resume">Resume</Link>
          <Link to="/projects">Projects</Link>
        </nav>

        <Router>
          <Home path="/"/>
          <Projects path="/projects"/>
        </Router>
      </div>
    )
  }
}

export default Navbar;