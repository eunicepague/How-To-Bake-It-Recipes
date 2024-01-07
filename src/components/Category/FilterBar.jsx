import { useState, useEffect } from 'react';
import axios from 'axios';
import './Category.css';

import Search from './../../assets/search.png';
import Cancel from './../../assets/cancel.png';

const FilterBar = ({ handleSearch, handleReset }) => {
  // State for the input value
  const [inputValue, setInputValue] = useState('');

  // Function to handle input changes
  const handleInputChange = (e) => {
    // Update the input value state with the new input
    setInputValue(e.target.value);
  };

  // Function to handle cancel button clicks
  const handleCancelClick = () => {
    // Clear the input value state
    setInputValue('');
    handleReset();
  };

  // Function to handle search button clicks
  const handleSearchClick = () => {
    // Call the handleSearch function passed as a prop with the current input value
    handleSearch(inputValue);
  };

  return (
    <>
      <div id="filterBar">
        <div id="filterCategories-input-container">
          <input
            type="text"
            placeholder="Search"
            className="filterbar-input"
            value={inputValue} // Bind the input value to state
            onChange={handleInputChange} // Update state on input change
          />

          {inputValue && ( // Conditionally render the cancel button
            <img
              src={Cancel}
              id="filterBar-cancel"
              onClick={handleCancelClick} // Clear input on click
            />
          )}
        </div>

        <img src={Search} id="filterBar-search" onClick={handleSearchClick} />
      </div>
    </>
  );
};

export default FilterBar;
