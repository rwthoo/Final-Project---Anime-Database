import React from 'react';
import './anime-card.css';

export const AnimalCard = (props) => (
  <img className="anime-card" src={props.imageUrl} alt="anime card"/>
);
