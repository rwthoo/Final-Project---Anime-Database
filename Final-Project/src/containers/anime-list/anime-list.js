import React from 'react';
import { AnimeFilm, Spinner } from '../../components';
import './anime-list.css';

export const AnimeList = (props) => (
  <div className="anime-list">
    { props.pending ? <Spinner /> : ''}
    {
      props.animeFilms.map(film => (
      <div className="anime-list__anime-film">
        <AnimeFilm
          imageUrl={film.imageUrl}
        />
      </div>
      ))
    }
    {
      (!props.animeFilms.length && props.appUsed && !props.pending) ?
      <div className="anime-list__nothing-found">
        Oops, Try Again
      </div> :
      ''
    }
  </div>
);
