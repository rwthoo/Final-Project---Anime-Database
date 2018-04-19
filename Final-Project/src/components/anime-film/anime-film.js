import React from 'react';
import './anime-film.css';

export const AnimeFilm= (props) => (
  <img className="anime-film" src={props.imageUrl} alt="anime film"/>
);
