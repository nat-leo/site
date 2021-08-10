import React, { Component } from 'react';
import { Router } from "@reach/router"
import Nav from "react-bootstrap/Nav"

import "./Navbar.css"
import Home from "../pages/Home.js"
import Projects from "../pages/Projects.js"
import BruteForceApproximateStringMatching from '../projects/BruteForceApproximateStringMatching';

class Navbar extends Component {
  render() {
    return(
      <div>
        <Nav>
          <Nav.Item>
            <Nav.Link eventKey="disabled" disabled>Nathaniel Liu</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href='/'>Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href='resume'>Resume</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href='projects'>Projects</Nav.Link>
          </Nav.Item>
        </Nav>

        <Router>
          <Home path="/"/>
          <Projects path="projects/*"/>
          <BruteForceApproximateStringMatching path="/BruteForceASM"/>
        </Router>
      </div>
    )
  }
}

export default Navbar;