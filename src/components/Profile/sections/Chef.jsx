// import React from 'react'
import { Row, Col } from 'react-bootstrap';
import axios from 'axios';

const Chef = ({ recipe, userId, savedRecipes }) => {
  const saveRecipe = async () => {
    // Retrieve the user's data from local storage
    const user = JSON.parse(localStorage.getItem('user'));

    if (!user) {
      alert('User not logged in!');
      return;
    }

    // Fetch the recipe object from the external API
    const response = await axios.get(
      `https://cakedata.onrender.com/recipes/${recipe.id}`
    );
    const recipeObject = response.data;

    // Add the recipe ID to the recipe object
    recipeObject.id = recipe.id;

    // Check if user.savedRecipes is an array, if not initialize it as an array
    if (!Array.isArray(user.savedRecipes)) {
      user.savedRecipes = [];
    }

    // Check if the recipe is already in the savedRecipes array
    const isRecipeSaved = user.savedRecipes.some(
      (savedRecipe) => savedRecipe.id === recipeObject.id
    );

    if (isRecipeSaved) {
      alert('Recipe is already saved!');
      return;
    }

    // Save the recipe object to the user's savedRecipes in local storage
    const updatedUser = {
      ...user,
      savedRecipes: [...user.savedRecipes, recipeObject],
    };

    localStorage.setItem('user', JSON.stringify(updatedUser));

    try {
      await axios.put(
        `http://localhost:8000/api/users/${user.id}/savedRecipes`,
        {
          savedRecipes: updatedUser.savedRecipes,
        }
      );
      alert('Recipe saved!');
    } catch (err) {
      console.error('Error saving recipe: ', err);
    }
  };

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
                <button onClick={saveRecipe}>Save</button>
              </div>
            </Col>
          </Row>
        </section>
      </div>
    </>
  );
};

export default Chef;
