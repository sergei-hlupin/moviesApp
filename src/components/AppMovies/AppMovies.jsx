import React, { Component } from 'react';
import { Pagination, Empty, Alert, Spin, Space } from 'antd';
import Swapi from '../Swapi/Swapi';
import MoviesList from '../MoviesList/MoviesList';
import InputField from '../InputField/InputField';

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
  };

  componentDidMount() {
    this.getMovies();
  }

  getMovies = () => {
    const { query, numberPage } = this.state;
    this.swapi
      .searchMovies(query, numberPage)
      .then((res) => {
        if (res.results.length === 0) {
          this.setState({ notFound: true });
        } else {
          this.setState({ moviesList: res.results, isLoading: false, totalPages: res.total_pages });
        }
      })
      .catch(() => this.setState({ isLoading: false, isError: true }));
  };

  onQuery = (title) => {
    this.setState({ query: title }, () => this.getMovies());
  };

  onChangePage = (page) => {
    this.setState({ numberPage: page }, () => this.getMovies());
  };

  render() {
    const { moviesList, isLoading, notFound, isError, totalPages, numberPage } = this.state;
    const error = isError ? (
      <Alert message="" description="произошла ошибка, обновите страницу" type="info" />
    ) : null;
    const notFoundFilms = notFound ? <Empty /> : <MoviesList movies={moviesList} />;
    const spin =
      isLoading && !isError ? (
        <Spin tip="Loading...">
          <Alert message="" description="Loading content." type="info" />
        </Spin>
      ) : null;
    const pagination =
      !notFound && !isLoading ? (
        <Pagination
          defaultCurrent={1}
          current={numberPage}
          total={totalPages * 10}
          onChange={(page) => this.onChangePage(page)}
        />
      ) : null;
    return (
      <div className="main">
        <InputField onQuery={this.onQuery} />
        <Space direction="vertical" align="center">
          {error}
          {notFoundFilms}
          {spin}
          {pagination}
        </Space>
      </div>
    );
  }
}

export default AppMovies;
