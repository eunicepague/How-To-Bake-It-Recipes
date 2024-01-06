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
  // Added selectedCategories state
  const [selectedCategories, setSelectedCategories] = useState([]);

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

  // Added handleCheck function
  const handleCheck = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  return (
    <>
      <Container className="categorys-container">
        <section className="categorys-content">
          <CategoriesIntro categoryRecipes={recipes} />
          <div className="category-blk-line"></div>
          {/* Passed handleCheck and selectedCategories as props to FilterCategories */}
          <FilterCategories
            handleCheck={handleCheck}
            selectedCategories={selectedCategories}
          />
          <div className="category-blk-line"></div>

          {/* Passed selectedCategories as a prop to AllCategory */}
          <AllCategory
            recipes={recipes}
            selectedCategories={selectedCategories}
          />
        </section>
      </Container>
      <Related />
    </>
  );
};

export default Categories;
