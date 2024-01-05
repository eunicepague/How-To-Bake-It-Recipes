// import React from 'react'

const Instruction = ({ recipe }) => {
  return (
    <>
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
    </>
  );
};

export default Instruction;
