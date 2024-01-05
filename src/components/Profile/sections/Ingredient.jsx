// import React from 'react'
import { Form } from 'react-bootstrap';

const Ingredient = ({ recipe }) => {
  return (
    <>
      <div id="profile-ingredient">
        <h3>Ingredients</h3>
        {recipe.ingredient.map((item, index) => (
          <div key={index}>
            <Form.Check
              className="form-check"
              type="checkbox"
              id={`ingredient-${index}`}
              label={item}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Ingredient;
