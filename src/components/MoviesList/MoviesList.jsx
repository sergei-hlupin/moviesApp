import React from 'react';
import { Row, Col } from 'antd';
import Movie from '../Movie/Movie';

function MoviesList({ moviesList, genresList, guestSessionId, ratedFilm, TabPane }) {
  const dataMovie = TabPane === 1 ? moviesList : ratedFilm;
  return (
    <Row gutter={[37, 32]}>
      {dataMovie.map((item) => {
        <Col span={12} />;
        return (
          <Col key={item.id} span={12}>
            <Movie {...item} genresList={genresList} guestSessionId={guestSessionId} />
          </Col>
        );
      })}
    </Row>
  );
}

export default MoviesList;
