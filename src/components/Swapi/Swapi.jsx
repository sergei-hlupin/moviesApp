class Swapi {
  // eslint-disable-next-line class-methods-use-this
  async getResource(url) {
    const options = { method: 'GET', headers: { accept: 'application/json' } };
    const res = await fetch(url, options);
    if (!res.ok) {
      throw new Error(`error: ${res.status}`);
    }
    return res.json();
  }
}

export default Swapi;
