import React, { Component } from 'react';
import { Router } from "@reach/router"
import Nav from 'react-bootstrap/Nav'

import "./Navbar.css"
import Home from "../pages/Home.js"
import Projects from "../pages/Projects.js"

class Navbar extends Component {
  render() {
    return(
      <div>
        <Nav>
          <h1 className="navbar-logo">Nathaniel Liu</h1>
          <Nav.Item>
            <Nav.Link href='/'>Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href='/resume'>Resume</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href='/projects'>Projects</Nav.Link>
          </Nav.Item>
        </Nav>

        <Router>
          <Home path="/"/>
          <Projects path="/projects"/>
        </Router>
      </div>
    )
  }
}

export default Navbar;