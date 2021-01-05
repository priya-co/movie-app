import axios from 'axios';
import { transformMovies, transformSeries, transformCharacters } from './transformApi';
const baseUrl = 'https://gateway.marvel.com:443/v1/public';
const apiKey = '85ce7fcbee474c0ebb336f49051bdd75';

const SearchService = {
  searchMovies: (userQuery) => {
    const query = `${baseUrl}/comics?titleStartsWith=${userQuery}&apikey=${apiKey}`;
    return axios.get(query).then((data) => {
      return transformMovies(data.data.data.results);
    });
  },
  searchCharacters: (userQuery) => {
    const query = `${baseUrl}/characters?nameStartsWith=${userQuery}&apikey=${apiKey}`;
    return axios.get(query).then((data) => {
      return transformCharacters(data.data.data.results);
    });
  },
  searchSeries: (userQuery) => {
    const query = `${baseUrl}/series?titleStartsWith=${userQuery}&apikey=${apiKey}`;
    return axios.get(query).then((data) => {
      return transformSeries(data.data.data.results);
    });
  },
};

export default SearchService;
