import { useEffect, useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './Saved.css';
import axios from 'axios';

const Saved = () => {
  const [savedRecipes, setSavedRecipes] = useState([]);

  useEffect(() => {
    // Retrieve the user's data from local storage
    const user = JSON.parse(localStorage.getItem('user'));

    if (user && Array.isArray(user.savedRecipes)) {
      setSavedRecipes(user.savedRecipes);
    }
  }, []);

  const deleteSavedRecipes = async () => {
    const user = JSON.parse(localStorage.getItem('user'));
    const userId = user ? user.id : null;

    if (!userId) {
      console.error('No user ID found');
      return;
    }
    try {
      await axios.delete(
        `http://localhost:8000/api/users/${userId}/savedRecipes`
      );
      console.log('Saved recipes deleted successfully');

      // Update the user's savedRecipes in local storage
      user.savedRecipes = [];
      localStorage.setItem('user', JSON.stringify(user));

      // Update the savedRecipes state
      setSavedRecipes([]);
    } catch (error) {
      console.error('Error deleting saved recipes: ', error);
    }
  };

  return (
    <Container fluid className="saved-container">
      <section className="saved-content">
        <Col>
          <h1>Saved Recipes.</h1>
          <h4>Your Collections</h4>
          <Button onClick={deleteSavedRecipes}>Delete All Saved Recipes</Button>

          {savedRecipes.map((recipe, index) => (
            <Row className="saved-img-container" key={index}>
              <Col sm={12} md={4} lg={4}>
                <img src={recipe.image[0]} alt="" />
              </Col>

              <Col sm={12} md={8} lg={8} id="saved-img-intro">
                <h2>{recipe.title}</h2>
                <p>{recipe.description}</p>
              </Col>
            </Row>
          ))}
        </Col>
      </section>
    </Container>
  );
};

export default Saved;
