import React from 'react';
import format from 'date-fns/format';
import RateStar from '../RateStar/RateStar';
import './Movie.css';

function Movie({
  title,
  overview,
  backdrop_path,
  release_date,
  genre_ids,
  genresList,
  id,
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
  const genre = [];
  genre_ids.forEach((item1) => {
    return genresList.forEach((item2) => {
      if (item2.id === item1) {
        genre.push(item2);
      }
    });
  });

  return (
    <div className="card">
      <div>
        <img src={imgPath} alt="" width={180} height={280} />
      </div>
      <div className="card-description">
        <h5 className="title">{title}</h5>
        <span className="data">{date}</span>
        <div className="genres">
          {genre.map((item) => {
            return <span key={item.id}>{item.name}</span>;
          })}
        </div>
        <p>{newOverview}</p>
        <RateStar id={id} guestSessionId={guestSessionId} />
      </div>
    </div>
  );
}

export default Movie;
