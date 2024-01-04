// import React from 'react';
import { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import axios from 'axios';
import Recipe from './recipe';

const Cakes = () => {
  const [recipes, setRecipes] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(import.meta.env.VITE_API);
      const data = response.data;
      console.log(data); // Log the data to inspect it
      const cakeRecipes = data.filter((recipe) => recipe.category === 'Cakes');
      setRecipes(cakeRecipes);
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
          <h1>CAKE RECIPES</h1>
          <div className="horizontal-line"></div>
          <h5>view more</h5>
        </div>

        <Recipe recipes={recipes} />
      </section>
    </Container>
  );
};

export default Cakes;
