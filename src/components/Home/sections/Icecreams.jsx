// import React from 'react'
import { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import axios from 'axios';
import Recipe from './recipe';

const Icecreams = () => {
  const [recipes, setRecipes] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(import.meta.env.VITE_API);
      const data = response.data;
      const icecreamRecipes = data.filter(
        (recipe) => recipe.category === 'Ice Cream'
      );
      setRecipes(icecreamRecipes);
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
          <h1>ICE CREAM RECIPES</h1>
          <div className="horizontal-line"></div>
          <h5>view more</h5>
        </div>

        <Recipe recipes={recipes} />
      </section>
    </Container>
  );
};

export default Icecreams;
