// import React from 'react'
import { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Recipe from './Recipe';

const Icecreams = () => {
  const [recipes, setRecipes] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API}/recipes`);
      const data = response.data;
      const cookieRecipes = data.filter((recipe) =>
        Array.isArray(recipe.category)
          ? recipe.category.includes('Ice Cream')
          : recipe.category === 'Ice Cream'
      );
      setRecipes(cookieRecipes);
    } catch (error) {
      console.error('Error fetching data: ', error);
    }
  };
  //   try {
  //     const response = await axios.get(`${import.meta.env.VITE_API}/recipes`);
  //     const data = response.data;
  //     const icecreamRecipes = data.filter(
  //       (recipe) => recipe.category === 'Ice Cream'
  //     );
  //     setRecipes(icecreamRecipes);
  //   } catch (error) {
  //     console.error('Error fetching data: ', error);
  //   }
  // };

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
          <h1>ICE CREAM RECIPES</h1>
          <div className="horizontal-line"></div>
          <Link to="/category/icecreams" onClick={scrollToTop}>
            <h5>view more</h5>
          </Link>
        </div>

        <Recipe recipes={recipes} />
      </section>
    </Container>
  );
};

export default Icecreams;
