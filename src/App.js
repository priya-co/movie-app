import { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Search from './modules/Search/Search';
import SearchService from './modules/Search/searchService';
import SearchCard from './modules/SearchCard/SearchCard';
import Navbar from './modules/Layout/Navbar';
import SearchResult from './modules/SearchResults/SearchResult';

function App() {
  const [userInput, setUserInput] = useState('');
  const [searchType, setSearchType] = useState('movies');
  const [searchResults, setSearchResults] = useState([]);
  const [searchAnalytics, setSearchAnalytics] = useState([]);
  const [loading, setLoading] = useState(false);

  const serviceMapper = {
    movies: 'searchMovies',
    characters: 'searchCharacters',
    series: 'searchSeries',
  };

  const handleClick = () => {
    if (!userInput.length) {
      setLoading(true);
      alert('Please enter a valid keyword.');
      return;
    }
    const latestSearchAnalytics = [...searchAnalytics];
    if (searchAnalytics.length > 4) {
      latestSearchAnalytics.pop();
    }

    setSearchAnalytics([userInput, ...latestSearchAnalytics]);
    SearchService[serviceMapper[searchType]](userInput).then((data) => {
      setSearchResults(data);
      if (!data.length) {
        // setUserInput('');
        alert('Please enter another movie, series, or character name .');
      }
    });
  };

  const handleChange = (query) => {
    setUserInput(query);
    setSearchResults([]);
  };

  useEffect(() => {
    // log data for now
    console.log('searchAnalytics', searchAnalytics);
  }, [searchAnalytics]);

  return (
    <div className='App'>
      <Navbar
        setSearchType={setSearchType}
        userInput={userInput}
        handleChange={handleChange}
        handleClick={handleClick}
      />

      <SearchResult searchResults={searchResults} userInput={userInput} loading={loading} />
    </div>
  );
}
export default App;
