// import React from 'react';
import { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import axios from 'axios';

import Recipe from './Recipe';

const Related = () => {
  const [relatedRecipes, setRelatedRecipes] = useState([]); // renamed to relatedRecipes

  const fetchData = async () => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_API}/recipes`);
      const data = res.data;

      // for random array
      data.sort(() => Math.random() - 0.5);
      setRelatedRecipes(data); // use setRelatedRecipes here
    } catch (err) {
      console.error('Error fetching data: ', err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Container className="home-container">
      <section className="home-content">
        <div id="home-intro">
          <h1>Related Recipes</h1>
          <div className="horizontal-line"></div>
          {/* <h5>view more</h5> */}
        </div>
        <Recipe recipes={relatedRecipes} />
      </section>
    </Container>
  );
};

export default Related;
