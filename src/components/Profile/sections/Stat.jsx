// import React from 'react';
import { Col } from 'react-bootstrap';

const Stat = ({ recipe }) => {
  return (
    <>
      <div className="profile-stats">
        <div id="div-1">
          <h6>PREP TIME:</h6>
          <p>{recipe.prep}</p>
        </div>
        <div id="div-2">
          <h6>COOK TIME:</h6>
          <p>{recipe.cook}</p>
        </div>
        <div id="div-3">
          <h6>TOTAL TIME:</h6>
          <p>{recipe.total}</p>
        </div>
        <div id="div-4">
          <h6>SERVINGS:</h6>
          <p>{recipe.Serving}</p>
        </div>
      </div>
    </>
  );
};

export default Stat;
