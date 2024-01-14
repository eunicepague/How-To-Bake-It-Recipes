import { useContext, useState } from 'react';
import {
  Container,
  Nav,
  Navbar,
  NavDropdown,
  Offcanvas,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from './UserContext';

import Logo from './../assets/logo.png';

import './Headers.css';

const Headers = () => {
  const { isLoggedIn, username, setIsLoggedIn, setUsername } =
    useContext(UserContext);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const logout = () => {
    //clear user session
    alert('You have successfully logged out!');
    setIsLoggedIn(false);
    setUsername('');

    //Clear the user's login state from local storage
    localStorage.removeItem('user');
  };

  // ScrollToTop
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
      <Navbar expand="lg" sticky="top" className="navbar">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img src={Logo} id="logo" />
          </Navbar.Brand>

          <button
            onClick={handleShow}
            id="headers-toggle"
            className="d-flex d-lg-none"
          >
            launch
          </button>
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

              <span className="login-register">
                {isLoggedIn ? (
                  <>
                    <NavDropdown
                      title={`Hello, ${
                        username.charAt(0).toUpperCase() + username.slice(1)
                      }!`}
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
                    <Nav.Link as={Link} to="/login" onClick={scrollToTop}>
                      Login
                    </Nav.Link>
                    <Nav.Link as={Link} to="/register" onClick={scrollToTop}>
                      Register
                    </Nav.Link>
                  </>
                )}
              </span>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          {isLoggedIn ? (
            <Nav.Link as={Link} to="/profile" onClick={scrollToTop}>
              {`Hello, ${
                username.charAt(0).toUpperCase() + username.slice(1)
              }!`}
            </Nav.Link>
          ) : (
            ''
          )}
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="headers-offcanvas">
            {isLoggedIn ? (
              <>
                <Nav.Link as={Link} to="/" onClick={scrollToTop}>
                  Home
                </Nav.Link>
                <Nav.Link as={Link} to="/about" onClick={scrollToTop}>
                  About
                </Nav.Link>
                <Nav.Link as={Link} to="/category" onClick={scrollToTop}>
                  Menu
                </Nav.Link>
                <Nav.Link as={Link} to="/profile" onClick={scrollToTop}>
                  Saved Recipes
                </Nav.Link>
                <Nav.Link as={Link} to="/" onClick={logout}>
                  Logout
                </Nav.Link>
              </>
            ) : (
              <>
                <Nav.Link as={Link} to="/" onClick={scrollToTop}>
                  Home
                </Nav.Link>
                <Nav.Link as={Link} to="/about" onClick={scrollToTop}>
                  About
                </Nav.Link>
                <Nav.Link as={Link} to="/category" onClick={scrollToTop}>
                  Menu
                </Nav.Link>
                <Nav.Link as={Link} to="/profile" onClick={scrollToTop}>
                  Saved Recipes
                </Nav.Link>
                <Nav.Link as={Link} to="/login" onClick={scrollToTop}>
                  Login
                </Nav.Link>
                <Nav.Link as={Link} to="/register" onClick={scrollToTop}>
                  Register
                </Nav.Link>
              </>
            )}
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Headers;
