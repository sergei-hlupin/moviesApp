const response = await fetch(
  'https://api.themoviedb.org/3/search/movie?query=return&include_adult=false&language=en-US&page=1&api_key=6a1dd28e4c4724aa0ef6fcf4bb1d3815',
);
const responseJson = response.json();
console.log(responseJson.results);
