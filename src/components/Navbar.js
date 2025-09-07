import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import the CSS file for Navbar styling

const NavBar = () => {
  return (
    <Navbar className="custom-navbar" expand="lg">
      <Navbar.Brand as={Link} to="/" className="navbar-brand">
        <img
          src="/Nursery/nurserylogo.png" // Replace with the path to your logo image
          alt="Plant Nursery Logo"
          className="navbar-logo"
        />
        Growtopia
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/about">About</Nav.Link>
          <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
          
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
