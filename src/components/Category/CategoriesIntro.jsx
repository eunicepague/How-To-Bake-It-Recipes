// import React from 'react';
import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';

import './Category.css';

const CategoriesIntro = () => {
  return (
    <>
      <Row className="row">
        <Row>
          <Col id="categorys-text" sm={6} md={8} lg={8}>
            <h1>All Recipes</h1>
            <p>
              Recipe Index for all recipes on How To Bake It. Find the best easy
              recipes perfect for the busy home cook! Easy cakes, cookies, pies
              recipes and more!
            </p>
          </Col>
          <Col className="categorys-img-content" sm={6} md={4} lg={4}>
            <img src="https://expertphotography.b-cdn.net/wp-content/uploads/2019/04/dessert-photography-tips-cake.jpg" />
          </Col>
        </Row>
      </Row>
    </>
  );
};

export default CategoriesIntro;
