import React from 'react';
import debounce from 'lodash.debounce';
import './Search.css';

export default function Search(props) {
  const handleChange = (e) => {
    props.onChange(e.target.value);
  };

  return (
    <div className='search-container'>
      <span>
        <i class='fa fa-search search-icon' aria-hidden='true'></i>
      </span>
      <input
        className='search-box'
        type='text'
        placeholder='Search Movies,Charecters or Series'
        onChange={debounce(handleChange, 500)}
        value={props.userInput}
      />
    </div>
  );
}
