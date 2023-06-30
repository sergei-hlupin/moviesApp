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

  getRatedMovies = async (guestSessionToken, pageNumber) => {
    const url = `${this.baseUrl}guest_session/${guestSessionToken}/rated/movies?api_key=${this.apiKey}&page=${pageNumber}`;
    const result = await this.getDataFromServer(url);
    return result;
  };

  guestSession = async () => {
    const url = `${this.baseUrl}authentication/guest_session/new?api_key=${this.apiKey}`;
    const result = await this.getDataFromServer(url);
    return result;
  };

  getGenresList = async () => {
    const url = `${this.baseUrl}genre/movie/list?api_key=${this.apiKey}`;
    const result = await this.getDataFromServer(url);
    return result;
  };

  setRating = async (moveiId, guestSessionToken, value) => {
    const body = {
      value,
    };
    const url = `${this.baseUrl}movie/${moveiId}/rating?api_key=${this.apiKey}&guest_session_id=${guestSessionToken}`;
    await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json;charset=utf-8' },
      body: JSON.stringify(body),
    }).catch((err) => {
      // eslint-disable-next-line no-console
      console.error('Возникла проблема с fetch запросом: ', err.message);
    });
  };
}

export default Swapi;
