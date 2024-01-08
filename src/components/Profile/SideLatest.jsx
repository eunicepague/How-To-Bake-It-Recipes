// import React from 'react';
import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';

import { Link } from 'react-router-dom';
import './SideAbout.css';

const SideLatest = () => {
  const [recipes, setRecipes] = useState([]);

  const fetchData = async () => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_API}/recipes`);
      const data = res.data;
      console.log('API response data: ', data); // Log the API response data

      const latestRecipes = data.filter(
        (recipe) =>
          Array.isArray(recipe.category) && recipe.category.includes('Latests')
      );
      setRecipes(latestRecipes);
    } catch (err) {
      console.error('Error fetching data: ', err);
      // Set recipes to null to indicate that there was an error
      setRecipes(null);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Container fluid className="side-container">
        <section className="home-content">
          <div id="home-intro">
            <h1>Latest</h1>
            <div className="horizontal-line"></div>
            <Link to="/category/cakes">
              <h5></h5>
            </Link>
          </div>
        </section>
      </Container>

      <div className="latest-container">
        {recipes.map((recipe, index) => (
          <div key={index} id="latest-img-content">
            <Link
              to={`/category/${
                Array.isArray(recipe.category)
                  ? recipe.category[0].toLowerCase() // Use the first category instead of joining all
                  : recipe.category.toLowerCase()
              }/${recipe.id}`}
            >
              <img src={recipe.image[0]} />
              <h6>{recipe.title}</h6>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default SideLatest;
