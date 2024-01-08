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

  // for the filter bar
  useEffect(() => {
    // Start with all recipes
    let filtered = recipes;

    // If there's a search term, filter the recipes
    if (searchTerm) {
      filtered = filtered.filter((recipe) => {
        // Check if the recipe title includes the search term
        const titleMatch =
          recipe.title &&
          recipe.title.toLowerCase().includes(searchTerm.toLowerCase());

        // Initialize categoryMatch as false
        let categoryMatch = false;

        // If the recipe category is an array, join it into a string and check if it includes the search term
        if (Array.isArray(recipe.category)) {
          categoryMatch = recipe.category
            .join(' ')
            .toLowerCase()
            .includes(searchTerm.toLowerCase());
        }
        // If the recipe category is a string, check if it includes the search term
        else if (typeof recipe.category === 'string') {
          categoryMatch = recipe.category
            .toLowerCase()
            .includes(searchTerm.toLowerCase());
        }

        // Return true if either titleMatch or categoryMatch is true
        return titleMatch || categoryMatch;
      });
    }

    // If there are selected categories, filter the recipes
    if (selectedCategories.length > 0) {
      filtered = filtered.filter((recipe) =>
        // Check if all selected categories are included in the recipe category
        selectedCategories.every((category) =>
          recipe.category.includes(category)
        )
      );
    }

    // Update the state with the filtered recipes
    setFilteredRecipes(filtered);
  }, [searchTerm, selectedCategories]); // This useEffect hook depends on searchTerm and selectedCategories, so it will run every time either of them changes

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
