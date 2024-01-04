// import React from 'react';
import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';

import FB from './../../../assets/fb.png';
import IG from './../../../assets/instagram.png';
import Github from './../../../assets/github.png';
import Linkedin from './../../../assets/linkedin.png';

import './Author.css';
const Author = () => {
  const [chefs, setChefs] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API}/chefs`);
      const data = response.data;
      setChefs(data);
    } catch (err) {
      console.error('Error fetching data: ', err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Container fluid className="author-container">
      <section className="author-content">
        {chefs.map((chef, index) => (
          <Row key={index}>
            <Col id="author-img-container" sm={12} md={6} lg={5}>
              <div id="author-img-content">
                <img src={chef.image} />
              </div>
            </Col>
            <Col className="author-intro-container" sm={12} md={6} lg={7}>
              <div className="author-intro">
                <h5>Meet the Author</h5>
                <h1>{chef.name}</h1>
                <p>{chef.description}</p>
                <button id="author-btn">Read More</button>
                <div id="author-icons-container">
                  <img src={FB} />
                  <img src={IG} />
                  <img src={Github} />
                  <img src={Linkedin} />
                </div>
              </div>
            </Col>
          </Row>
        ))}
      </section>
    </Container>
  );
};

export default Author;
