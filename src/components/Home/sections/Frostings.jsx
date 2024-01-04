// import React from 'react';
import { Container } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import Recipe from './recipe';
import axios from 'axios';

const Frostings = () => {
  const [recipes, setRecipes] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API}/recipes`);
      const data = response.data;
      const cookieRecipes = data.filter(
        (recipe) => recipe.category === 'Frostings'
      );
      setRecipes(cookieRecipes);
    } catch (error) {
      console.error('Error fetching data: ', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Container className="home-container">
      <section className="home-content">
        <div id="home-intro">
          <h1>FROSTING RECIPES</h1>
          <div className="horizontal-line"></div>
          <h5>view more</h5>
        </div>

        <Recipe recipes={recipes} />
      </section>
    </Container>
  );
};

export default Frostings;
