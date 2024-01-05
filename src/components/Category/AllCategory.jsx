import { Row, Col } from 'react-bootstrap';
import './Category.css';

const AllCategory = ({ recipes }) => {
  return (
    <Row className="row">
      <Col className="categorys-all-container">
        {recipes.map((recipe) => (
          <Col
            key={recipe.id}
            className="categorys-all-content"
            xs={6}
            sm={6}
            md={3}
            lg={3}
          >
            <img src={recipe.image[0]} />
            <h6>{recipe.title}</h6>
          </Col>
        ))}
      </Col>
    </Row>
  );
};

export default AllCategory;
