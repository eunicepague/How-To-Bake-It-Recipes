import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Recipe = ({ recipes }) => {
  // ScrollToTop
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <Row>
      {recipes.slice(0, 4).map((recipe, index) => (
        <Col
          key={index}
          className="home-img-container"
          xs={6}
          sm={6}
          md={3}
          lg={3}
        >
          <Link
            onClick={scrollToTop}
            to={`/category/${
              Array.isArray(recipe.category)
                ? recipe.category[0].toLowerCase()
                : recipe.category.toLowerCase()
            }/${recipe.id}`}
          >
            <div className="home-img-content">
              <img src={recipe.image[0]} alt={recipe.title} />
              <h5>{recipe.title}</h5>
            </div>
          </Link>
        </Col>
      ))}
    </Row>
  );
};

export default Recipe;
