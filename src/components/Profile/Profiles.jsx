import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import './Profiles.css';

import Chef from './sections/Chef';
import Stat from './sections/Stat';
import Equipment from './sections/Equipment';
import Ingredient from './sections/Ingredient';
import Instruction from './sections/Instruction';
import Nutrition from './sections/Nutrition';

import About from './../About/About';
import SideAbout from './SideAbout';
import Related from '../Home/sections/Related';
import RelatedRecipe from '../Home/sections/RelatedRecipe';
import SideLatest from './SideLatest';
import Comments from './comments/Comments';

const Profiles = () => {
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
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <>
      <Container fluid className="profile-container">
        <section className="profile-content">
          <Row>
            {recipe && (
              <Col className="profile-left" sm={12} md={12} lg={8}>
                <div className="profile-info-container">
                  <Chef recipe={recipe} />
                  <Stat recipe={recipe} />
                  {recipe.equipment && <Equipment recipe={recipe} />}
                  <Ingredient recipe={recipe} />
                  <Instruction recipe={recipe} />
                  <Nutrition recipe={recipe} />

                  <div className="profile-join">
                    <div className="profile-join-content">
                      <h1>Join today & start saving your favorite recipes</h1>
                      <h5>
                        Create an account to easily save your favorite recipes.
                      </h5>

                      <button>Save Recipe</button>
                    </div>
                  </div>
                </div>
              </Col>
            )}
            <Col
              sm={12}
              md={12}
              lg={4}
              className="d-sm-none d-lg-flex profile-about"
            >
              <Col>
                <SideAbout />

                <SideLatest />
              </Col>
            </Col>
          </Row>
        </section>
      </Container>

      {/* <About /> */}
      <Related recipes={RelatedRecipe} />
      <Comments recipeId={id} />
    </>
  );
};

export default Profiles;
