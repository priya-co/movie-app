import axios from 'axios';
import { transformMovies, transformSeries, transformCharacters } from './transformApi';
const baseUrl = 'https://gateway.marvel.com:443/v1/public';
const apiKey = '85ce7fcbee474c0ebb336f49051bdd75';

const SearchService = {
  searchMovies: (userQuery) => {
    const query = `${baseUrl}/comics?titleStartsWith=${userQuery}&apikey=${apiKey}`;
    return axios.get(query).then(({ status, data }) => {
      debugger;
      if (status === 200) {
        return transformMovies(data.data.results);
      }

      // @ToDO render error specific components to the page
      if (status === 400) {
        alert('Bad Request');
      }
      if (status === 401) {
        alert('Authentication error');
      }
      if (status === 500) {
        alert(' Internal server error');
      }
    });
  },
  searchCharacters: (userQuery) => {
    const query = `${baseUrl}/characters?nameStartsWith=${userQuery}&apikey=${apiKey}`;
    return axios
      .get(query)
      .then((data) => {
        return transformCharacters(data.data.data.results);
      })
      .catch((err) => alert(err));
  },
  searchSeries: (userQuery) => {
    const query = `${baseUrl}/series?titleStartsWith=${userQuery}&apikey=${apiKey}`;
    return axios
      .get(query)
      .then((data) => {
        return transformSeries(data.data.data.results);
      })
      .catch((err) => alert(err));
  },
};

export default SearchService;
