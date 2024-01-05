import { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import axios from 'axios';
import './../Category.css';
import AllCategory from './../AllCategory';
import CookiesIntro from './CookiesIntro';
import Related from './../../Home/sections/Related';

const Cookies = () => {
  const [recipes, setRecipies] = useState([]);

  const fetchData = async () => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_API}/recipes`);
      const filteredCategories = res.data.filter((recipe) =>
        recipe.category.includes('Cookies')
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
      <Container fluid className="categorys-container">
        <section className="categorys-content">
          <CookiesIntro categoryRecipes={recipes} />
          <div className="category-blk-line"></div>
          <AllCategory recipes={recipes} />
        </section>
      </Container>

      <Related />
    </>
  );
};

export default Cookies;
