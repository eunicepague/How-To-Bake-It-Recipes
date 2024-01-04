import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';

import './Category.css';

const Category = () => {
  const [categories, setCategories] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API}/categories`
      );
      const data = response.data;
      setCategories(data);

      console.log(data);
    } catch (error) {
      console.error('Error fetching data: ', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Container className="category-container">
      <section className="category-content">
        <Row>
          {categories.map((category, index) => (
            <Col key={index} className="category-img-container">
              <div className="category-img-content">
                <img src={category.images} />
                <h6>{category.type}</h6>
              </div>
            </Col>
          ))}
        </Row>
      </section>
    </Container>
  );
};

export default Category;
