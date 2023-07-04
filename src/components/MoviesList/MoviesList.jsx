import React from 'react';
import { Row, Col } from 'antd';
import PropTypes from 'prop-types';
import Movie from '../Movie/Movie';

function MoviesList({ moviesList, guestSessionId, ratedFilm, tabPane, width }) {
  const dataMovie = tabPane === 1 ? moviesList : ratedFilm;
  const spanSize = width > 1010 ? 12 : 24;
  const gutterSize = spanSize === 12 ? 32 : 20;
  return (
    <Row gutter={[37, gutterSize]}>
      {dataMovie.map((item) => {
        return (
          <Col key={item.id} span={spanSize}>
            <Movie {...item} guestSessionId={guestSessionId} />
          </Col>
        );
      })}
    </Row>
  );
}

MoviesList.propTypes = {
  moviesList: PropTypes.arrayOf(PropTypes.object).isRequired,
  guestSessionId: PropTypes.string.isRequired,
  ratedFilm: PropTypes.arrayOf(PropTypes.object).isRequired,
  tabPane: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
};

export default MoviesList;
