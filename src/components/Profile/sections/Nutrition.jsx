// import React from 'react'

const Nutrition = ({ recipe }) => {
  const nutritionEntries = Object.entries(recipe.nutrition);

  return (
    <div className="nutrition-container">
      <h3>Nutrition</h3>
      <div id="profile-nutrition">
        {Object.entries(recipe.nutrition).map(([key, value], index) => (
          <p key={index}>
            <strong> {key}:</strong> {value}{' '}
            {index !== nutritionEntries.length - 1 ? '|' : ''}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Nutrition;
