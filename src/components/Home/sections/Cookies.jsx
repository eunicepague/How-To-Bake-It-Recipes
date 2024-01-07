import { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Recipe from './Recipe';
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

  // ScrollToTop
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <Container className="home-container">
      <section className="home-content">
        <div id="home-intro">
          <h1>COOKIES RECIPES</h1>
          <div className="horizontal-line"></div>
          <Link to="/category/cookies" onClick={scrollToTop}>
            <h5>view more</h5>
          </Link>
        </div>

        <Recipe recipes={recipes} />
      </section>
    </Container>
  );
};

export default Cookies;
