import { Row, Col } from 'react-bootstrap';

const Recipe = ({ recipes }) => (
  <Row>
    {recipes.slice(0, 4).map((recipe, index) => (
      <Col key={index} className="home-img-container" sm={6} md={3} lg={3}>
        <div className="home-img-content">
          <img src={recipe.image[0]} alt={recipe.title} />
          <h5>{recipe.title}</h5>
        </div>
      </Col>
    ))}
  </Row>
);

export default Recipe;
