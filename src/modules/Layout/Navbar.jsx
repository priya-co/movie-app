import React from 'react';
import { useState } from 'react';
import Search from '../../modules/Search/Search';
import SearchService from '../../modules/Search/searchService';

import './Navbar.css';

export default function Navbar(props) {
  return (
    <div>
      <div className='nav'>
        <Search onChange={props.handleChange} value={props.userInput} />
        <select
          className='select-type'
          name='searchType'
          id='searchType'
          onChange={(e) => props.setSearchType(e.target.value)}
        >
          <option value='movies' default>
            Movies
          </option>
          <option value='characters' default>
            Characters
          </option>
          <option value='series' default>
            Series
          </option>
        </select>
        <button className='search-btn' onClick={props.handleClick}>
          Search
        </button>
      </div>
    </div>
  );
}
