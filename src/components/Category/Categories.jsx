// Categories.js
import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import { Link } from 'react-router-dom';

import AllCategory from './AllCategory';
import CategoriesIntro from './CategoriesIntro';
import Related from './../Home/sections/Related';
import FilterCategories from './FilterCategories';
import FilterBar from './FilterBar';

const Categories = () => {
  const [recipes, setRecipies] = useState([]);
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const fetchData = async () => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_API}/recipes`);
      const data = res.data;
      setRecipies(data);
      setFilteredRecipes(data);
    } catch (error) {
      console.error('Error fetching data: ', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleCheck = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const handleSearch = (searchTerm) => {
    setSearchTerm(searchTerm);
  };

  const handleReset = () => {
    setSearchTerm('');
    setSelectedCategories([]);
  };

  useEffect(() => {
    let filtered = recipes;

    if (searchTerm) {
      filtered = filtered.filter(
        (recipe) =>
          recipe.title &&
          typeof recipe.title === 'string' &&
          recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedCategories.length > 0) {
      filtered = filtered.filter((recipe) =>
        selectedCategories.every((category) =>
          recipe.category.includes(category)
        )
      );
    }

    setFilteredRecipes(filtered);
  }, [searchTerm, selectedCategories]);

  return (
    <>
      <Container className="categorys-container">
        <section className="categorys-content">
          <CategoriesIntro categoryRecipes={filteredRecipes} />
          <div className="category-blk-line"></div>
          <FilterCategories
            handleCheck={handleCheck}
            selectedCategories={selectedCategories}
            handleSearch={handleSearch}
            handleReset={handleReset}
          />
          <div className="category-blk-line"></div>
          <AllCategory
            recipes={filteredRecipes}
            selectedCategories={selectedCategories}
          />
        </section>
      </Container>
      <Related />
    </>
  );
};

export default Categories;
