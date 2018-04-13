import React from 'react';
import { AnimeList, Spinner } from '../../components';
import './anime-list.css';

export const AnimeList = (props) => (
  <div className="anime-list">
    { props.pending ? <Spinner /> : ''}
    {
      props.animeCards.map(card => (
      <div className="anime-list__anime-card">
        <AnimeCard
          imageUrl={card.imageUrl}
        />
      </div>
      ))
    }
    {
      (!props.animeCards.length && props.appUsed && !props.pending) ?
      <div className="anime-list__nothing-found">
      Uh Oh... we can't find any results
      </div> :
      ''
    }
  </div>
);
