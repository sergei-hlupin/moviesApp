import React, { Component } from 'react';
import { Pagination, Empty, Alert, Spin, Space } from 'antd';
import Swapi from '../Swapi/Swapi';
import MoviesList from '../MoviesList/MoviesList';
import InputField from '../InputField/InputField';
import Header from '../Header/Header';
import GenresContext from '../GenresContext/GenresContext';
import NetworkState from '../NetworkState/NetworkState';

class AppMovies extends Component {
  swapi = new Swapi();

  state = {
    moviesList: [],
    isLoading: true,
    query: 'return',
    notFound: false,
    numberPage: 1,
    isError: false,
    totalPages: 0,
    genresList: [],
    guestSessionId: '',
    ratedFilm: [],
    tabPane: 1,
    width: window.innerWidth,
    network: false,
  };

  componentDidMount() {
    if (!localStorage.getItem('guestSessionId')) {
      this.createGuestSession();
    } else {
      this.setState({ guestSessionId: localStorage.getItem('guestSessionId') });
    }
    this.getMovies();
    this.getGenres();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions = () => {
    this.setState({ width: window.innerWidth });
  };

  createGuestSession = () => {
    this.swapi.guestSession().then((res) => {
      localStorage.setItem('guestSessionId', res.guest_session_id);
      this.setState({ guestSessionId: res.guest_session_id });
    });
  };

  getMovies = () => {
    const { query, numberPage } = this.state;
    this.setState({
      isLoading: true,
      notFound: false,
      isError: false,
    });
    this.swapi
      .searchMovies(query, numberPage)
      .then((res) => {
        if (res.results.length === 0) {
          this.setState({ notFound: true });
        }
        this.setState({ moviesList: res.results, isLoading: false, totalPages: res.total_pages });
      })
      .catch(() => this.setState({ isLoading: false, isError: true }));
  };

  getGenres = () => {
    this.swapi.getGenresList().then((res) => {
      this.setState({ genresList: res.genres });
    });
  };

  getRatedMovies = () => {
    const { guestSessionId, numberPage } = this.state;
    this.swapi
      .getRatedMovies(guestSessionId, numberPage)
      .then((res) => {
        if (res.results.length === 0) {
          this.setState({ notFound: true });
        } else {
          this.setState({ ratedFilm: res.results, isLoading: false, totalPages: res.total_pages });
        }
      })
      .catch(() => this.setState({ isLoading: false, isError: true }));
  };

  onQuery = (title) => {
    this.setState({ query: title }, () => this.getMovies());
  };

  onChangePage = (page) => {
    const { tabPane } = this.state;
    this.setState(
      {
        numberPage: page,
      },
      () => {
        if (tabPane === 1) {
          this.getMovies();
        } else {
          this.getRatedMovies();
        }
      },
    );
  };

  onChangeTab = (key) => {
    if (key === '1') {
      this.setState({ tabPane: Number(key), numberPage: 1 }, () => this.getMovies());
    }
    if (key === '2') {
      this.setState({ tabPane: Number(key), numberPage: 1 }, () => this.getRatedMovies());
    }
  };

  onNetworkState = () => {
    this.setState((prevState) => ({ network: !prevState.network }));
  };

  render() {
    const {
      moviesList,
      genresList,
      isLoading,
      notFound,
      isError,
      totalPages,
      numberPage,
      tabPane,
      ratedFilm,
      width,
      network,
    } = this.state;

    const error = isError ? (
      <Alert message="" description="произошла ошибка, обновите страницу" type="info" />
    ) : null;

    const notFoundFilms = notFound ? (
      <Empty />
    ) : (
      <MoviesList
        guestSessionId={this.state.guestSessionId}
        genresList={genresList}
        moviesList={moviesList}
        ratedFilm={ratedFilm}
        tabPane={tabPane}
        width={width}
      />
    );

    const search = tabPane === 1 ? <InputField onQuery={this.onQuery} /> : null;

    const spin =
      isLoading && !isError ? (
        <Spin tip="Loading...">
          <Alert message="" description="Loading content." type="info" />
        </Spin>
      ) : null;

    const pagination =
      !notFound && !isLoading && !isError ? (
        <Pagination
          defaultCurrent={1}
          current={numberPage}
          total={totalPages * 10}
          onChange={(page) => this.onChangePage(page)}
        />
      ) : null;

    const isNetwork = network ? <Alert className="alert alert-net" message="нет сети" /> : null;

    return (
      <div className="main">
        <GenresContext.Provider value={genresList}>
          <NetworkState onNetworkState={this.onNetworkState} />
          {isNetwork}
          <Header onChangeTab={this.onChangeTab} />
          {search}
          <Space direction="vertical" align="center">
            {error}
            {notFoundFilms}
            {spin}
            {pagination}
          </Space>
        </GenresContext.Provider>
      </div>
    );
  }
}

export default AppMovies;
