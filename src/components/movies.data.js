
async function fetchData(){
   
  const url = 'https://imdb236.p.rapidapi.com/imdb/most-popular-movies';
  const options = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': '0a32c506a4msh4c67fdb0f9f0c8dp17bc63jsnc027d26be12e',
      'x-rapidapi-host': 'imdb236.p.rapidapi.com'
    }
  };
  try {
    const response = await fetch(url, options);
    return response.json();
  } catch (error) {
    console.error("erro detected",  error);
    return error;
  }
  
}


export default fetchData;