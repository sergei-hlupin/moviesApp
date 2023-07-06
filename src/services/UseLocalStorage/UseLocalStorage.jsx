class UseLocalStorage {
  getId = (id) => {
    return localStorage.getItem(id);
  };

  setValue = (id, value) => {
    try {
      localStorage.setItem(id, value);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log('localStorage.setItem(id, value)');
    }
  };
}

export default UseLocalStorage;
