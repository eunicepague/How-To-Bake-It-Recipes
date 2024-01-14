// import React from 'react';

import { Container, Row, Col } from 'react-bootstrap';
import './Saved.css';

const Saved = () => {
  return (
    <Container fluid className="saved-container">
      <section className="saved-content">
        <Col>
          <h1>Saved Recipes.</h1>
          <h4>Your Collections</h4>
          <div className="saved-img-container">
            <img src="https://i2.wp.com/lmld.org/wp-content/uploads/2021/06/Strawberry-Shortcake-B.jpg" />
            <p>sample title</p>
            <p>description</p>
            <p></p>
          </div>
        </Col>
      </section>
    </Container>
  );
};

export default Saved;
