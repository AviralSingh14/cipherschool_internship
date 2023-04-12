import React, { useState} from 'react';
import './SearchBar.css';

import { CiSearch, CiSliderHorizontal} from "react-icons/ci";
import { AiOutlineCloseCircle } from "react-icons/ai";

const SearchBar = () => {
  const [expanded, setExpanded] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [isFilterDropdownOpen, setIsFilterDropdownOpen] = useState(false);

  const handleSearchInputChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleFilterButtonClick = () => {
    setIsFilterDropdownOpen(!isFilterDropdownOpen);
  };

  const handleFilterOptionClick = (option) => {
    setSelectedFilter(option);
    setIsFilterDropdownOpen(false);
  };

  const handleSearchButtonClick = () => {
    setExpanded(true);
  };

  const handleCloseButtonClick = () => {
    setExpanded(false);
    setSearchText("");
    setSelectedFilter("");
  };

  return (
    <div className='search-bar'>
      <div className="search-bar-container">
        <div className="search-icon">
          <CiSearch/>
        </div>
        <input
          type="text"
          className="search-input"
          placeholder="Search and Learn"
          value={searchText}
          onChange={handleSearchInputChange}
        />
        <div className="filter-icon" onClick={handleFilterButtonClick}>
          <CiSliderHorizontal />
          {isFilterDropdownOpen && (
            <div className="filter-dropdown">
              <ul>
                <li onClick={() => handleFilterOptionClick('video')}>Video</li>
                  <li onClick={() => handleFilterOptionClick('course')}>Course</li>
                  <li onClick={() => handleFilterOptionClick('instructor')}>Instructor</li>
                  <li onClick={() => handleFilterOptionClick('all')}>All</li>
                </ul>
            </div>
          )}
        </div>
      </div>

      <div className="search-bar-container-small-devices">
        {expanded?(
          <div className='search-bar-expanded'>
            <CiSearch/>
            <input
              type="text"
              className="search-input"
              placeholder="Search and Learn"
              value={searchText}
              onChange={handleSearchInputChange}
            />
            <div className='button-expanded'>
              <div className="filter-icon" onClick={handleFilterButtonClick}>
                <CiSliderHorizontal />
                {isFilterDropdownOpen && (
                  <div className="filter-dropdown">
                    <ul>
                      <li onClick={() => handleFilterOptionClick('video')}>Video</li>
                        <li onClick={() => handleFilterOptionClick('course')}>Course</li>
                        <li onClick={() => handleFilterOptionClick('instructor')}>Instructor</li>
                        <li onClick={() => handleFilterOptionClick('all')}>All</li>
                      </ul>
                  </div>
                )}
              </div>
              <div className='search-icon' onClick={handleCloseButtonClick}>
                <AiOutlineCloseCircle/>
              </div>
            </div>
          </div>
        ):(
          <div className='search-small'>
            <div className="search-icon" onClick={handleSearchButtonClick}>
              <CiSearch/>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchBar;