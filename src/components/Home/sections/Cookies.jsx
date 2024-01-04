import { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import axios from 'axios';

import Recipe from './recipe';
import './Home.css';

const Cookies = () => {
  const [recipes, setRecipes] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API}/recipes`);
      const data = response.data;
      const cookieRecipes = data.filter((recipe) =>
        Array.isArray(recipe.category)
          ? recipe.category.includes('Cookies')
          : recipe.category === 'Cookies'
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
          <h1>COOKIE RECIPES</h1>
          <div className="horizontal-line"></div>
          <h5>view more</h5>
        </div>

        <Recipe recipes={recipes} />
      </section>
    </Container>
  );
};

export default Cookies;
