// src/components/Footer.js
import React from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Footer.css'; // Import the updated CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col md={6} className="footer-col">
            <h5>Connect with Us</h5>
            <Nav className="social-links">
              <Nav.Link href="https://facebook.com" target="_blank" aria-label="Facebook">
                <i className="fab fa-facebook-f"></i>
              </Nav.Link>
              <Nav.Link href="https://twitter.com" target="_blank" aria-label="Twitter">
                <i className="fab fa-twitter"></i>
              </Nav.Link>
              <Nav.Link href="https://instagram.com" target="_blank" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </Nav.Link>
              <Nav.Link href="https://linkedin.com" target="_blank" aria-label="LinkedIn">
                <i className="fab fa-linkedin-in"></i>
              </Nav.Link>
            </Nav>
          </Col>
          <Col md={6} className="footer-col">
            <h5>Links</h5>
            <Nav className="footer-links">
              <Nav.Link as={Link} to="/privacy">Privacy Policy</Nav.Link>
              <Nav.Link as={Link} to="/terms">Terms of Service</Nav.Link>
            </Nav>
          </Col>
        </Row>
        <Row>
          <Col className="text-center">
            <p>&copy; {new Date().getFullYear()} Growtopia. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
