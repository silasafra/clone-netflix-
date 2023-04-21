import React, { useEffect, useState } from 'react';
import './App.css';
import FeaturedMovies from './assets/componentes/FeaturedMovies';
import Tmdb from './Tmdb';
import MovieRow from './assets/componentes/MovieRow';

export default () => {
  const [movieLIst, setMovieList] = useState([]);
  const [featureData, setFeatureData] = useState(null);

  useEffect(() => {
    const loadAll = async () => {
      // Pegando lista total
      let list = await Tmdb.getHomeList();
      setMovieList(list);
      // pegando o Featured
      let originals = list.filter(i => i.slug === 'originals');
      let randomChosen = Math.floor(
        Math.random() * originals[0].items.results.length - 1
      );
      let chosen = originals[0].items.results[randomChosen];
      console.log(chosen);
      let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv');
      setFeatureData(chosenInfo);
    };
    loadAll();
  }, []);
  return (
    <div className="page">
      {featureData && <FeaturedMovies item={featureData} />}
      <section className="list">
        {movieLIst.map((item, key) => (
          <MovieRow key={key} title={item.title} items={item.items} />
        ))}
      </section>
    </div>
  );
};
