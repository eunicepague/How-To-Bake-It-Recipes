import { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import axios from 'axios';
import './../Category.css';

import AllCategory from './../AllCategory';
import IceCreamsIntro from './IceCreamsIntro';
import Related from './../../Home/sections/Related';

const IceCreams = () => {
  const [recipes, setRecipies] = useState([]);

  const fetchData = async () => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_API}/recipes`);
      const filteredCategories = res.data.filter((recipe) =>
        recipe.category.includes('Ice Cream')
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
          <IceCreamsIntro categoryRecipes={recipes} />
          <div className="category-blk-line"></div>
          <AllCategory recipes={recipes} selectedCategories={['Ice Cream']} />
        </section>
      </Container>

      <Related />
    </>
  );
};

export default IceCreams;
