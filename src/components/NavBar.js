import React from 'react';
import { Link } from 'react-router-dom';
import * as ReactBootstrap from 'react-bootstrap';


const NavBar = () => {
  return (
    <>
      <ReactBootstrap.Navbar collapseOnSelect expand="lg" variant="dark" className="main-navBar">
        <ReactBootstrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <ReactBootstrap.Navbar.Collapse id="responsive-navbar-nav">
          <ReactBootstrap.Nav className="mr-auto">
          <Link className="nav-font my-auto" to="/">HOME</Link>
            <Link className="nav-font my-auto" to="/projects">PROJECTS</Link>
            <Link to="/about" className="nav-font my-auto">ABOUT</Link>
            <Link to="/get-involved" className="nav-font my-auto" >GET INVOLVED</Link>
            <Link to="/talk" className="nav-font my-auto">TALK</Link>
            <Link to="/lab" className="nav-font my-auto">BUILD A PROJECT</Link>
            <ReactBootstrap.NavDropdown title="NEWS" id="collasible-nav-dropdown" className="nav-font">
              <ReactBootstrap.NavDropdown.Item className="nav-font-dropdown" href="#action/3.1">DAILY ZOONIVERSE</ReactBootstrap.NavDropdown.Item>
              <ReactBootstrap.NavDropdown.Item className="nav-font-dropdown" href="#action/3.2">BLOG</ReactBootstrap.NavDropdown.Item>
            </ReactBootstrap.NavDropdown>
          </ReactBootstrap.Nav>
          <ReactBootstrap.Nav>            
          </ReactBootstrap.Nav>
        </ReactBootstrap.Navbar.Collapse>
      </ReactBootstrap.Navbar>
    </>
  )
}


export default NavBar;