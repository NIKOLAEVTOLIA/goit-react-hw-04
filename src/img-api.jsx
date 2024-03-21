import axios from 'axios';

const fetchImages = async (query, page) => {
  const response = await axios.get(`https://api.unsplash.com/search/photos`, {
    params: {
      query: query,
      page: page,
      per_page: 9,
      client_id: 'SarzJCkD829wclZEjb0TYcKuckT1QmEAqjGh09XrHxQ',
    },
  });
  return {
    results: response.data.results,
    total: response.data.total,
  };
};

export { fetchImages };
