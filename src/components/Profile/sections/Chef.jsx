// import React from 'react'
import { Row, Col } from 'react-bootstrap';

const Chef = ({ recipe }) => {
  return (
    <>
      <div id="profile-intro">
        <section className="profile-chef-content">
          <Row>
            <Col className="text-col" sm={6} md={6} lg={7}>
              <h1>{recipe.title}</h1>
              <h5>{recipe.chef}</h5>
              <p>{recipe.description}</p>
            </Col>
            <Col className="image-col" sm={6} md={6} lg={5}>
              <div className="image-content">
                <img src={recipe.image[0]} alt="" />
              </div>
              <div className="chef-btn-container">
                <button>Print</button>
                <button>Save</button>
              </div>
            </Col>
          </Row>
        </section>
      </div>
    </>
  );
};

export default Chef;
