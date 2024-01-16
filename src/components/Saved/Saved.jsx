import { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Saved.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

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
          <div id="saved-intro">
            <h1>Saved Recipes.</h1>
            <button
              className="d-none d-sm-flex saved-btn"
              onClick={deleteSavedRecipes}
            >
              Delete All
            </button>
          </div>

          <h4>Your Collections</h4>
          <button
            className="d-flex d-sm-none saved-btn-sm"
            onClick={deleteSavedRecipes}
          >
            Delete All
          </button>

          {savedRecipes.map((recipe, index) => (
            <div key={index}>
              <Link
                to={`/category/${
                  Array.isArray(recipe.category)
                    ? recipe.category[0].toLowerCase() // Use the first category instead of joining all
                    : recipe.category.toLowerCase()
                }/${recipe.id}`}
              >
                <Row className="saved-img-container">
                  <Col sm={12} md={4} lg={3} id>
                    <img src={recipe.image[0]} alt="" />
                  </Col>

                  <Col sm={12} md={8} lg={9} id="saved-img-intro">
                    <h2>{recipe.title}</h2>
                    <p>{recipe.description}</p>
                  </Col>
                </Row>
              </Link>
            </div>
          ))}
        </Col>
      </section>
    </Container>
  );
};

export default Saved;
