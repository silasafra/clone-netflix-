import React from 'react';
import './FeaturedMovies.css';

export default ({ item }) => {
  // Obtendo a Data de lançamento
  let firstDate = new Date(item.first_air_date);
  //Obtendo Géneros
  let genres = [];
  for (let i in item.genres) {
    genres.push(item.genres[i].name);
  }
  return (
    <section
      className="featured"
      style={{
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${item.backdrop_path})`
      }}
    >
      <div className="featured--vertical">
        <dir className="featured--horizontal">
          <div className="featured--info">
            <div className="featured-name">{item.original_name}</div>
            <div className="featured--list-info">
              <div className="featured--points">
                {item.vote_average} ponto{item.vote_average !== 1 ? 's' : ''}
              </div>
              <div className="featured-year">{firstDate.getFullYear()}</div>
              <div className="featured--seasons">
                {item.number_of_seasons} temporada
                {item.number_of_seasons !== 1 ? 's' : ''}
              </div>
            </div>
            <div className="featured--overview">{item.overview}</div>
            <div className="featured--buttons">
              <a className="btn btn-primary" href={`/watch/${item.id}`}>
                Assistir
              </a>
              <a className="btn btn-secondary" href={`/list/add${item.id}`}>
                Mais informações
              </a>
            </div>
            <div className="featured--genres">{genres.join(', ')}</div>
          </div>
        </dir>
      </div>
    </section>
  );
};
