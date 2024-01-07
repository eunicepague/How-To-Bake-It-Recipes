import { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import axios from 'axios';
import './../Category.css';

import AllCategory from './../AllCategory';
import CakeIntro from './CakeIntro';
import Related from './../../Home/sections/Related';

const Cakes = () => {
  const [recipes, setRecipies] = useState([]);

  const fetchData = async () => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_API}/recipes`);
      const filteredCategories = res.data.filter((recipe) =>
        recipe.category.includes('Cakes')
      );
      setRecipies(filteredCategories);
    } catch (err) {
      console.error('Error fetching data: ', err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Container className="categorys-container">
        <section className="categorys-content">
          <CakeIntro categoryRecipes={recipes} />
          <div className="category-blk-line"></div>
          <AllCategory recipes={recipes} selectedCategories={['Cakes']} />
        </section>
      </Container>
      <Related />
    </>
  );
};

export default Cakes;
