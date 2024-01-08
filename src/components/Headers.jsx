import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

import Logo from './../assets/logo.png';

import './Headers.css';

const Headers = () => {
  // ScrollToTop
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <Navbar expand="lg" sticky="top" className="navbar">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img src={Logo} id="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          id="basic-navbar-nav"
          className="justify-content-center"
        >
          <Nav className="nav">
            <Nav.Link as={Link} to="/" onClick={scrollToTop}>
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about" onClick={scrollToTop}>
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/category" onClick={scrollToTop}>
              Menu
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Headers;
