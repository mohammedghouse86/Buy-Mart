import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectGrandTotal } from './Store/cartslice';

const NavbarComp = () => {
  
  const quantities = useSelector(state => state.cart);
  const grandTotal = useSelector(selectGrandTotal);



  return (
    <div>
      <Navbar fixed="top" expand="lg" className="bg-dark navbar-dark" style={{ height: '50px' }}>
        <Container fluid>
          <Navbar.Brand as={Link} to="/">BUY MART</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link as={Link} to="/testing">Testing</Nav.Link>
              <Nav.Link as={Link} to="/about">About</Nav.Link>
            </Nav>

            <Button as={Link} to="/cart">
              Cart ({quantities.length} items) ${grandTotal.toFixed(2)}
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavbarComp;
