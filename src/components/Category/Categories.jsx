// import React from 'react';
import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import { Link } from 'react-router-dom';

import AllCategory from './AllCategory';
import CategoriesIntro from './CategoriesIntro';
import Related from './../Home/sections/Related';
import FilterCategories from './FilterCategories';

const Categories = () => {
  const [recipes, setRecipies] = useState([]);

  const fetchData = async () => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_API}/recipes`);
      const data = res.data;
      setRecipies(data);
    } catch (error) {
      console.error('Error fetching data: ', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Container className="categorys-container">
        <section className="categorys-content">
          <CategoriesIntro categoryRecipes={recipes} />
          <div className="category-blk-line"></div>
          <FilterCategories />
          <div className="category-blk-line"></div>

          <AllCategory recipes={recipes} />
        </section>
      </Container>
      <Related />
    </>
  );
};

export default Categories;
