import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const NavbarComp = () => {
  const [total, setTotal] = useState(0);
  const quantities = useSelector(state => state.cart);

  useEffect(() => {
    const newTotal = quantities.reduce((sum, item) => {
      return sum + (Number(item.price) * Number(item.quantity));
    }, 0);
    setTotal(newTotal);
    console.log('Total updated:', newTotal);
  }, [quantities]);

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
              <Nav.Link as={Link} to="/about">About</Nav.Link>
            </Nav>

            <Button as={Link} to="/cart">
              Cart ({quantities.length} items) ${total.toFixed(2)}
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavbarComp;
