import React from 'react';
import { useState } from 'react';
import Search from '../../modules/Search/Search';
import SearchService from '../../modules/Search/searchService';
import SearchCard from '../../modules/SearchCard/SearchCard';
import './Navbar.css';
import Dancingloader from '../..//dancing.gif';

export default function Navbar() {
  const [userInput, setUserInput] = useState('');
  const [searchType, setSearchType] = useState('movies');
  const [searchResults, setSearchResults] = useState([]);
  const [searchAnalytics, setSearchAnalytics] = useState([]);

  const serviceMapper = {
    movies: 'searchMovies',
    characters: 'searchCharacters',
    series: 'searchSeries',
  };

  const handleClick = () => {
    if (!userInput.length) {
      alert('Please enter a valid keyword.');
      return;
    }
    setSearchAnalytics([userInput, ...searchAnalytics]);
    SearchService[serviceMapper[searchType]](userInput).then((data) => {
      setSearchResults(data);
    });
  };

  const handleChange = (query) => {
    setUserInput(query);
    setSearchResults([]);
  };

  return (
    <div>
      <div className='nav'>
        <Search onChange={handleChange} value={userInput} />
        <select
          className='select-type'
          name='searchType'
          id='searchType'
          onChange={(e) => setSearchType(e.target.value)}
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
        <button className='search-btn' onClick={handleClick}>
          Search
        </button>
      </div>
      <div className='search-wrapper'>
        {searchResults.length ? (
          <>
            <div className='sucess-msg'>
              Showing Search Results for{' '}
              <b>
                <i>{userInput}</i>
              </b>
            </div>
            <div className='list-items'>
              {searchResults.map((item) => (
                <SearchCard key={item.id} {...item} />
              ))}
            </div>
          </>
        ) : (
          <div>
            {!userInput.length ? (
              <div>
                <img className='dancing-img' src={Dancingloader} alt='' />
                <p className='initial-msg'>
                  There are no results yet. Please enter keyword to search or I will keep dancing ..
                </p>
              </div>
            ) : (
              <div className='no-found-msg'>There are no results yet with this keyword.</div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
