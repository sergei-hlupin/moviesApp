class Swapi {
  baseUrl = 'https://api.themoviedb.org/3/';

  apiKey = '6a1dd28e4c4724aa0ef6fcf4bb1d3815';

  getDataFromServer = async (url) => {
    try {
      const res = await fetch(url);
      if (!res.ok) {
        throw new Error(`${res.status}`);
      }
      return await res.json();
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error('Возникла проблема с fetch запросом: ', err.message);
      return err.message;
    }
  };

  searchMovies = async (searchQuery, pageNumber) => {
    const url = `${this.baseUrl}search/movie?api_key=${this.apiKey}&include_adult=false&query=${searchQuery}&page=${pageNumber}`;
    const result = await this.getDataFromServer(url);
    return result;
  };
}

export default Swapi;
