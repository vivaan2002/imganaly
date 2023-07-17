import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navbarcal = () => {
  return (
    <Navbar bg="dark" variant="dark">
        <Navbar.Brand to="/">Image Reader</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">About Us</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact Us</Nav.Link>
            <Nav.Link as={Link} to="/faq">FAQ</Nav.Link>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
  )
}

export default Navbarcal
