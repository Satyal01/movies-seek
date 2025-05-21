

async function fetchData() {

  // const url = 'https://imdb236.p.rapidapi.com/imdb/most-popular-movies';
  // const options = {
  //   method: 'GET',
  //   headers: {
  //     'x-rapidapi-key': import.meta.env.MOVIE_API_KEY,
  //     'x-rapidapi-host': 'imdb236.p.rapidapi.com'
  //   }
  // };
  //   const response = await fetch(url, options);
  //   return response.json();

  const url = 'https://imdb236.p.rapidapi.com/api/imdb/top250-movies';
  const options = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': import.meta.env.VITE_MOVIE_API_KEY,
      'x-rapidapi-host': 'imdb236.p.rapidapi.com'
    }
  };

  try {
    const response = await fetch(url, options);
    return response.json();
  } catch (error) {
    console.error(error);
  }

}


export default fetchData;