import { Link } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import './Category.css';

const AllCategory = ({ recipes }) => {
  return (
    <Row className="categorys-all-container">
      {recipes.map((recipe) => (
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
