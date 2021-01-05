import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Search from './modules/Search/Search';
import SearchService from './modules/Search/searchService';
import SearchCard from './modules/SearchCard/SearchCard';
import Navbar from './modules/Layout/Navbar';

function App() {
  const [userInput, setUserInput] = useState('');
  const [searchType, setSearchType] = useState('movies');
  const [searchResults, setSearchResults] = useState([]);
  const [searchAnalytics, setSearchAnalytics] = useState([]);

  return (
    <div className='App'>
      <Navbar />
    </div>
  );
}
export default App;
