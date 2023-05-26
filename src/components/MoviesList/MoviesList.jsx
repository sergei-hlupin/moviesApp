import React from 'react';
import { Row, Col } from 'antd';
import Movie from '../Movie/Movie';

function MoviesList({ movies }) {
  return (
    <Row gutter={[37, 32]}>
      {movies.map((item) => {
        <Col span={12} />;
        const { id, ...itemsProps } = item;
        return (
          <Col key={item.id} span={12}>
            <Movie {...itemsProps} />
          </Col>
        );
      })}
    </Row>
  );
}

export default MoviesList;
