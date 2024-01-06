import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import axios from 'axios';
import Recipe from './Recipe';

const Desserts = () => {
  const [recipes, setRecipes] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API}/recipes`);
      const data = response.data;
      const dessertRecipes = data.filter((recipe) =>
        Array.isArray(recipe.category)
          ? recipe.category.includes('Desserts')
          : recipe.category === 'Desserts'
      );
      setRecipes(dessertRecipes);
    } catch (error) {
      console.error('Error fetching data: ', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // ScrollToTop
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <Container className="home-container">
      <section className="home-content">
        <div id="home-intro">
          <h1>DESSERT RECIPES</h1>
          <div className="horizontal-line"></div>
          <Link to="/category/desserts" onClick={scrollToTop}>
            <h5>view more</h5>
          </Link>
        </div>

        <Recipe recipes={recipes} />
      </section>
    </Container>
  );
};

export default Desserts;
