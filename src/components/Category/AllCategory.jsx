import { Link } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import './Category.css';

// Added selectedCategories as a prop
const AllCategory = ({ recipes, selectedCategories }) => {
  // Filter the recipes based on the selected categories
  const filteredRecipes = recipes.filter((recipe) =>
    selectedCategories.some((category) => recipe.category.includes(category))
  );

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
          <Link to={`/category/${recipe.category}/${recipe.id}`}>
            <img src={recipe.image[0]} />
            <h6>{recipe.title}</h6>
          </Link>
        </Col>
      ))}
    </Row>
  );
};

export default AllCategory;
