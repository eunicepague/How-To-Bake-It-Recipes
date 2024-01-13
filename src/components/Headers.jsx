import { useContext } from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from './UserContext';

import Logo from './../assets/logo.png';

import './Headers.css';

const Headers = () => {
  const { isLoggedIn, username, setIsLoggedIn, setUsername } =
    useContext(UserContext);

  const logout = () => {
    //clear user session
    setIsLoggedIn(false);
    setUsername('');
  };

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
            {/* <Nav.Link as={Link} to="/category" onClick={scrollToTop}>
              Saved Recipes
            </Nav.Link> */}

            <span className="login-register">
              {isLoggedIn ? (
                <>
                  <NavDropdown
                    title={`Hello, ${username}!`}
                    id="basic-nav-dropdown"
                  >
                    <NavDropdown.Item as={Link} to="/" onClick={logout}>
                      Logout
                    </NavDropdown.Item>
                  </NavDropdown>

                  <Nav.Link as={Link} to="/profile" onClick={scrollToTop}>
                    Saved Recipes
                  </Nav.Link>

                  {/* <Nav.Link as={Link} to="/profile" onClick={scrollToTop}>
                    {username}
                  </Nav.Link> */}

                  {/* <Nav.Link as={Link} to="/" onClick={logout}>
                    Logout
                  </Nav.Link> */}
                </>
              ) : (
                <>
                  <Nav.Link as={Link} to="/register" onClick={scrollToTop}>
                    Register
                  </Nav.Link>
                  <Nav.Link as={Link} to="/login" onClick={scrollToTop}>
                    Login
                  </Nav.Link>
                </>
              )}
            </span>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Headers;
