// import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import './Profile.css';
const Profile = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  const fetchRecipe = async () => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_API}/recipes/${id}`);
      const data = res.data;
      setRecipe(data);
    } catch (err) {
      console.error('Error fetching data: ', err);
    }
  };

  useEffect(() => {
    fetchRecipe();
  }, [id]);

  return (
    <Container fluid className="profile-container">
      <section className="profile-content">
        <Row>
          {recipe && (
            <Col className="profile-left" lg={8}>
              <div className="profile-info-container">
                <div id="profile-intro">
                  <Col lg={8}>
                    <h1>{recipe.title}</h1>
                    <p>{recipe.chef}</p>
                    <p>{recipe.description}</p>
                  </Col>
                  <Col lg={4}>
                    <img src={recipe.image[0]} alt="" />
                  </Col>
                </div>

                <div className="profile-stats">
                  <div id="div-1">
                    <p>PREP TIME:</p>
                    <p>{recipe.prep}</p>
                  </div>
                  <div id="div-2">
                    <p>COOK TIME:</p>
                    <p>{recipe.cook}</p>
                  </div>
                  <div id="div-3">
                    <p>TOTAL TIME:</p>
                    <p>{recipe.total}</p>
                  </div>
                  <div id="div-1">
                    <p>SERVINGS:</p>
                    <p>{recipe.serving}</p>
                  </div>
                </div>

                <div id="profile-equipment">
                  <h3>Equipment</h3>
                  <p>{recipe.equipment}</p>
                </div>

                <div id="profile-ingredients">
                  <h3>Ingredients</h3>
                  {recipe.ingredient.map((item, index) => (
                    <ul key={index}>
                      <li>{item}</li>
                    </ul>
                  ))}
                </div>

                <div id="profile-instructions">
                  <h3>Instructions</h3>
                  {recipe.instruction.map((step, index) => {
                    const [stepNumber, instrcution] = Object.entries(step)[0];
                    return (
                      <p key={index}>
                        <strong>{stepNumber}: </strong> {instrcution}
                      </p>
                    );
                  })}
                </div>

                <div id="profile-nutrition">
                  <h3>Nutrition</h3>
                  <p>sample</p>
                  <p>sample</p>
                  <p>sample</p>
                  <p>sample</p>
                </div>
              </div>
            </Col>
          )}

          <Col lg={4}>for the author</Col>
        </Row>
      </section>
    </Container>
  );
};

export default Profile;
