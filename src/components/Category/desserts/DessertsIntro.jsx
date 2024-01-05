import { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import axios from 'axios';

const DessertsIntro = () => {
  const [recipes, setRecipes] = useState([]);
  const selectedCategory = 'Desserts'; // The category you want to target

  const fetchData = async () => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_API}/categories`);
      const data = res.data;
      const filteredRecipes = data.filter(
        (recipe) => recipe.type === selectedCategory
      );
      setRecipes(filteredRecipes);
    } catch (err) {
      console.error('Error fetching data: ', err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <Row className="row">
        {recipes.map((recipe, index) => (
          <Row key={index}>
            <Col id="categorys-text" sm={6} md={8} lg={8}>
              <h1>{recipe.title}</h1>
              <p>{recipe.description}</p>
            </Col>
            <Col className="categorys-img-content" sm={6} md={4} lg={4}>
              <img src={recipe.images[0]} />
            </Col>
          </Row>
        ))}
      </Row>
    </>
  );
};

export default DessertsIntro;
