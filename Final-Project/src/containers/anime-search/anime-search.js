import React from 'react';
import { SearchBar, Checkbox } from '../../components';
import './anime-search.css';

const genre = [
  'Action',
  'Comedy',
  'Horror'
];

export const AnimeSearch = (props) => (
  <div className="anime-search">
    <div
      className="anime-search__title"
    >
      Anime Database
    </div>
    <SearchBar
      buttonText="search anime"
      placeholder="Anime ex. Dragonball Z"
      search={props.search}
    />
    <div>
      {genre.map(genre => (
        <span>
          <Checkbox onChange={props.onAnimeGenreChange} value={genre}/> {genre}
        </span>
      ))}
    </div>

  </div>
);
