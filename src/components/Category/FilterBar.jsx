import { useState, useEffect } from 'react';
import { Container, Dropdown, Form } from 'react-bootstrap';
import axios from 'axios';
import './Category.css';

import Search from './../../assets/search.png';
import Cancel from './../../assets/cancel.png';

const FilterBar = () => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleCancelClick = () => {
    setInputValue('');
  };

  return (
    <>
      <div id="filterBar">
        <div id="filterCategories-input-container">
          <input
            type="text"
            placeholder="Search"
            className="filterbar-input"
            value={inputValue} //bind the input value to state
            onChange={handleInputChange}
          />

          {inputValue && ( //Conditionally render the cancel button
            <img
              src={Cancel}
              id="filterBar-cancel"
              onClick={handleCancelClick}
            />
          )}
        </div>

        <img src={Search} id="filterBar-search" />
      </div>
    </>
  );
};

export default FilterBar;
