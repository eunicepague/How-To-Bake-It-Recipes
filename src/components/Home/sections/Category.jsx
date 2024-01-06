import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import { Link } from 'react-router-dom';
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

  // ScrollToTop
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <Container className="category-container" id="home">
      <section className="category-content">
        <Row>
          {categories.map((category, index) => (
            <Col key={index} className="category-img-container">
              <Link
                to={`/category/${category.type.toLowerCase()}`}
                onClick={scrollToTop}
              >
                <div className="category-img-content">
                  <img src={category.images} />
                  <h6>{category.type}</h6>
                </div>
              </Link>
            </Col>
          ))}
        </Row>
      </section>
    </Container>
  );
};

export default Category;
