// import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Offcanvas from 'react-bootstrap/Offcanvas';
import axios from 'axios';

import Logo from './../../../assets/logo.png';

import Search from './../../../assets/search.png';
import Cancel from './../../../assets/cancel.png';
import { useState, useEffect } from 'react';

const Hero = ({ handleReset }) => {
  const [inputValue, setInputValue] = useState('');
  const [show, setShow] = useState(false);
  const [recipes, setRecipes] = useState([]);
  const [filteredRecipes, setFilteredRecipes] = useState([]);

  // Function to handle input changes
  const handleInputChange = (e) => {
    // Update the input value state with the new input
    setInputValue(e.target.value);
  };

  // Function to handle cancel button clicks
  const handleCancelClick = () => {
    // Clear the input value state
    setInputValue('');
    handleReset();
  };

  const handleClose = () => setShow(false);
  const handleShow = async () => {
    // Only fetch and filter the recipes if inputValue is not an empty string
    if (inputValue.trim() !== '') {
      try {
        const res = await axios.get(`${import.meta.env.VITE_API}/recipes`);
        const data = res.data;
        setRecipes(data);
        const filtered = data.filter((recipe) => {
          const titleMatch =
            recipe.title &&
            recipe.title.toLowerCase().includes(inputValue.toLowerCase());
          let categoryMatch = false;
          if (Array.isArray(recipe.category)) {
            categoryMatch = recipe.category
              .join(' ')
              .toLowerCase()
              .includes(inputValue.toLowerCase());
          } else if (typeof recipe.category === 'string') {
            categoryMatch = recipe.category
              .toLowerCase()
              .includes(inputValue.toLowerCase());
          }
          return titleMatch || categoryMatch;
        });
        setFilteredRecipes(filtered);
        // Show the Offcanvas
        setShow(true);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    }
  };

  const fetchData = async () => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_API}/recipes`);
      const data = res.data;
      setRecipes(data);
      setFilteredRecipes(data);
    } catch (error) {
      console.error('Error fetching data: ', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // for capitalization only
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <Container fluid className="hero-container">
      <section className="hero-content">
        <Row>
          <Col id="hero-img-container">
            <img src={Logo} id="hero-logo" />

            <Col id="hero-input-container">
              <div id="input-wrapper">
                <input
                  type="text"
                  id="hero-input"
                  value={inputValue}
                  onChange={handleInputChange}
                />
                {inputValue && (
                  <img
                    src={Cancel}
                    id="hero-cancel"
                    onClick={handleCancelClick}
                  />
                )}
              </div>
              <img src={Search} id="filterBar-search" onClick={handleShow} />
            </Col>
          </Col>
        </Row>
      </section>

      <Offcanvas
        show={show}
        onHide={handleClose}
        placement="bottom"
        backdrop="static"
        style={{ height: '60vh' }}
      >
        <Offcanvas.Header closeButton>
          <Container>
            <h1>
              {inputValue
                ? `${capitalizeFirstLetter(inputValue)} Results`
                : `Results`}
            </h1>
          </Container>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Container className="offcanvas-img-container">
            {filteredRecipes.map((recipe) => (
              <div key={recipe.id} className="offcanvas-img-content">
                <img src={recipe.image[0]} />
                <h6>{recipe.title}</h6>
              </div>
            ))}
          </Container>
        </Offcanvas.Body>
      </Offcanvas>
    </Container>
  );
};

export default Hero;
