import { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import axios from 'axios';
import './../Category.css';

import DessertsIntro from './DessertsIntro';
import AllCategory from '../AllCategory';
import Related from './../../Home/sections/Related';

const Desserts = () => {
  const [recipes, setRecipies] = useState([]);
  const selectedCategory = ['Desserts', 'Chocolates', 'Cupcakes'];

  const fetchData = async () => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_API}/recipes`);
      const filteredCategories = res.data.filter(
        (recipe) =>
          (Array.isArray(recipe.category) &&
            recipe.category.some((cat) => selectedCategory.includes(cat))) ||
          (typeof recipe.category === 'string' &&
            selectedCategory.includes(recipe.category))
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
          <DessertsIntro categoryRecipes={recipes} />
          <div className="category-blk-line"></div>
          <AllCategory
            recipes={recipes}
            selectedCategories={['Desserts', 'Chocolates', 'Cupcakes']}
          />
        </section>
      </Container>

      <Related />
    </>
  );
};

export default Desserts;
