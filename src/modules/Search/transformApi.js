const transformMovies = (data) => {
  const transformedData = [];
  data.map((item) => {
    transformedData.push({
      id: item.id,
      name: item.title,
      url: item.resourceURI,
      image: `${item.thumbnail?.path}/portrait_medium.${item.thumbnail?.extension}`,
      description: item.description,
      type: 'movie',
    });
  });
  return transformedData;
};
const transformSeries = (data) => {
  const transformedData = [];
  data.map((item) => {
    transformedData.push({
      id: item.id,
      name: item.title,
      url: item.resourceURI,
      image: `${item.thumbnail?.path}/portrait_medium.${item.thumbnail?.extension}`,
      description: item.description,
      type: 'series',
    });
  });
  return transformedData;
};

const transformCharacters = (data) => {
  const transformedData = [];
  data.map((item) => {
    transformedData.push({
      id: item.id,
      name: item.name,
      url: item.resourceURI,
      image: `${item.thumbnail?.path}/portrait_medium.${item.thumbnail?.extension}`,
      description: item.description,
      type: 'character',
    });
  });
  return transformedData;
};

export { transformMovies, transformSeries, transformCharacters };
