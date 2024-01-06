// import React from 'react';

import { useState, useEffect } from 'react';
import { Container, Col, Dropdown, Form } from 'react-bootstrap';
import axios from 'axios';
import './Category.css';

const FilterCategories = () => {
  const [categories, setCategories] = useState([]);

  const fetchData = async () => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_API}/categories`);
      const data = res.data;
      setCategories(data);
    } catch (err) {
      console.error('Error fetching data: ', err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // const

  return (
    <>
      <Container className="filterCategories-container">
        <section className="filterCategories-content">
          <div>
            <Dropdown autoClose="outside">
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Dropdown Button
              </Dropdown.Toggle>

              <Dropdown.Menu>
                {categories.map((category, index) => (
                  <Dropdown.Item as="div" key={index}>
                    <Form.Check
                      className="form-check no-line-through"
                      type="checkbox"
                      id={category.id}
                      label={category.type}
                    />
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </section>
      </Container>
    </>
  );
};

export default FilterCategories;
