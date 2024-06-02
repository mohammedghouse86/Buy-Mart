import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import  {Link}  from 'react-router-dom';

const NavbarComp = () => {
  return (
    <div>
       <Navbar expand="lg" className="bg-dark-body-tertiary">
      <Container fluid>
        <Navbar.Brand to="/" as={Link}>BUY MART</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link to="/about" as={Link}>About</Nav.Link>
            
          </Nav>

            <Button  ><Nav.Link to="/cart" as={Link}>Cart</Nav.Link></Button>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default NavbarComp
