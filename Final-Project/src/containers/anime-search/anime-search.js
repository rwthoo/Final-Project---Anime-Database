import React from 'react';
import { SearchBar, Checkbox } from '../../components';
import './anime-search.css';

const species = [
  'Human',
  'God',
  'Spirit',
  'Demon',
  'Animal'
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
      placeholder="Anime ex. Howls moving castle"
      search={props.search}
    />
    <div>
      {species.map(species => (
        <span>
          <Checkbox onChange={props.onAnimeSpeciesChange} value={species}/> {species}
        </span>
      ))}
    </div>

  </div>
);
