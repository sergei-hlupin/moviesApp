class Swapi {
  baseUrl = process.env.REACT_APP_URL;

  getDataFromServer = async (url) => {
    try {
      const apiKey = `&api_key=${process.env.REACT_APP_Api}`;
      const res = await fetch(url + apiKey);
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
    const queries = {
      query: searchQuery,
      page: pageNumber,
    };
    const params = new URLSearchParams(queries);
    const url = new URL('search/movie', this.baseUrl);
    url.search = params.toString();
    const result = await this.getDataFromServer(url);
    return result;
  };

  getRatedMovies = async (guestSessionToken, pageNumber) => {
    const url = `${this.baseUrl}guest_session/${guestSessionToken}/rated/movies?&page=${pageNumber}`;
    const result = await this.getDataFromServer(url);
    return result;
  };

  guestSession = async () => {
    const url = `${this.baseUrl}authentication/guest_session/new?`;
    const result = await this.getDataFromServer(url);
    return result;
  };

  getGenresList = async () => {
    const url = `${this.baseUrl}genre/movie/list?`;
    const result = await this.getDataFromServer(url);
    return result;
  };

  setRating = async (moveiId, guestSessionToken, value) => {
    const body = {
      value,
    };
    const url = `${this.baseUrl}movie/${moveiId}/rating?&api_key=${process.env.REACT_APP_Api}&guest_session_id=${guestSessionToken}`;
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
