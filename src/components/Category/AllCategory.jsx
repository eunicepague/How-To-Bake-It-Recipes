import { Link } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import './Category.css';

// Added selectedCategories as a prop
const AllCategory = ({ recipes, selectedCategories }) => {
  // Added filteredRecipes to filter the recipes based on selectedCategories
  const filteredRecipes = selectedCategories.length
    ? recipes.filter((recipe) =>
        selectedCategories.every((category) =>
          recipe.category.includes(category)
        )
      )
    : recipes;

  return (
    <Row className="categorys-all-container">
      {/* Use filteredRecipes instead of recipes */}
      {filteredRecipes.map((recipe) => (
        <Col
          key={recipe.id}
          className="categorys-all-content"
          xs={6}
          sm={6}
          md={3}
          lg={3}
        >
          <Link to={`/profiles/${recipe.id}`}>
            <img src={recipe.image[0]} />
            <h6>{recipe.title}</h6>
          </Link>
        </Col>
      ))}
    </Row>
  );
};

export default AllCategory;
