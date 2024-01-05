// import React from 'react'

const Equipment = ({ recipe }) => {
  return (
    <>
      <div id="profile-equipment">
        <h3>Equipment</h3>
        <p>{recipe.equipment}</p>
      </div>
    </>
  );
};

export default Equipment;
