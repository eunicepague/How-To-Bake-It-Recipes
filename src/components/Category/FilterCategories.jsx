import { useState, useEffect } from 'react';
import { Container, Dropdown, Form } from 'react-bootstrap';
import axios from 'axios';
import './Category.css';

// Added handleCheck and selectedCategories as props
const FilterCategories = ({ handleCheck, selectedCategories }) => {
  const [recipes, setRecipes] = useState([]);

  const fetchData = async () => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_API}/recipes`);
      const data = res.data;
      setRecipes(data);
    } catch (err) {
      console.error('Error fetching data: ', err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Get unique categories
  const categories = [
    ...new Set(
      recipes.flatMap((recipe) =>
        Array.isArray(recipe.category) ? recipe.category : [recipe.category]
      )
    ),
  ];

  return (
    <>
      <Container className="filterCategories-container">
        <section className="filterCategories-content">
          <div>
            <Dropdown autoClose="outside">
              <Dropdown.Toggle id="dropdown-basic">Category</Dropdown.Toggle>

              <Dropdown.Menu>
                {categories.map(
                  (category, index) =>
                    category && (
                      <Dropdown.Item as="div" key={index}>
                        {/* Added onChange and checked attributes to Form.Check */}
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
