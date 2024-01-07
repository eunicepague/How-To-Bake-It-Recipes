// FilterCategories.js
import { useState, useEffect } from 'react';
import { Container, Dropdown, Form } from 'react-bootstrap';
import axios from 'axios';
import './Category.css';

import FilterBar from './FilterBar';

const FilterCategories = ({
  handleCheck,
  selectedCategories,
  handleSearch,
  handleReset,
}) => {
  const [recipes, setRecipes] = useState([]);
  const [filteredRecipes, setFilteredRecipes] = useState([]);

  const fetchData = async () => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_API}/recipes`);
      const data = res.data;
      setRecipes(data);
      setFilteredRecipes(data);
    } catch (err) {
      console.error('Error fetching data: ', err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const categories = [
    ...new Set(
      filteredRecipes.flatMap((recipe) =>
        Array.isArray(recipe.category) ? recipe.category : [recipe.category]
      )
    ),
  ];

  return (
    <>
      <Container className="filterCategories-container">
        <section className="filterCategories-content">
          <FilterBar handleSearch={handleSearch} handleReset={handleReset} />
          <div>
            <Dropdown autoClose="outside">
              <Dropdown.Toggle id="dropdown-basic" className="custom-dropdown">
                Category
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {categories.map(
                  (category, index) =>
                    category && (
                      <Dropdown.Item as="div" key={index}>
                        <Form.Check
                          className="form-check no-line-through"
                          type="checkbox"
                          id={`category-${index}`}
                          label={category}
                          onChange={() => handleCheck(category)}
                          checked={selectedCategories.includes(category)}
                        />
                      </Dropdown.Item>
                    )
                )}
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </section>
      </Container>
    </>
  );
};

export default FilterCategories;
