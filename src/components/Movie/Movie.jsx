import React, { useContext } from 'react';
import format from 'date-fns/format';
import PropTypes from 'prop-types';
import RateStar from '../RateStar/RateStar';
import './Movie.css';
import GenresContext from '../GenresContext/GenresContext';

function Movie({
  title,
  overview,
  backdrop_path,
  release_date,
  genre_ids,
  id,
  popularity,
  guestSessionId,
}) {
  let date = 'No release date is specified';
  if (release_date) {
    date = format(new Date(release_date), 'MMMM dd, yyyy');
  }
  let imgPath =
    'https://sun1-19.userapi.com/impg/Npn2NZRfUfZlI9kaB6geY2MP4FN9ZznLExzCAA/DRC-B8nqwjM.jpg?size=520x0&quality=95&sign=0c721830dbb097d535a6ee29947bca46';
  if (backdrop_path) {
    imgPath = `https://image.tmdb.org/t/p/w500${backdrop_path}`;
  }
  let newOverview = 'not description';
  if (overview) {
    newOverview = `${overview.replace(/^(.{150}[^\s]*).*/, '$1')}  ...`;
  }
  const genresList = useContext(GenresContext);
  const genre = [];
  genre_ids.forEach((item1) => {
    return genresList.forEach((item2) => {
      if (item2.id === item1) {
        genre.push(item2);
      }
    });
  });
  let colorRate = '#E90000';
  if (popularity > 0 && popularity < 3) {
    colorRate = '#E90000';
  }
  if (popularity > 3 && popularity < 5) {
    colorRate = '#E97E00';
  }
  if (popularity > 5 && popularity < 7) {
    colorRate = '#E9D100';
  }
  if (popularity > 7) {
    colorRate = '#66E900';
  }

  return (
    <div className="card">
      <div className="card-wraper">
        <img src={imgPath} alt="фото" />
        <div className="card-description">
          <h5 className="title">
            {title}
            <span style={{ borderColor: colorRate }} className="color-rate">
              {popularity.toFixed(1)}
            </span>
          </h5>
          <span className="data">{date}</span>
          <div className="genres">
            {genre.map((item) => {
              return <span key={item.id}>{item.name}</span>;
            })}
          </div>
        </div>
      </div>
      <div className="card-overview">
        <p className="overview">{newOverview}</p>
        <RateStar id={id} guestSessionId={guestSessionId} />
      </div>
    </div>
  );
}

Movie.propTypes = {
  title: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  release_date: PropTypes.string.isRequired,
  genre_ids: PropTypes.arrayOf(PropTypes.number).isRequired,
  id: PropTypes.number.isRequired,
  popularity: PropTypes.number.isRequired,
  guestSessionId: PropTypes.string.isRequired,
};

export default Movie;
