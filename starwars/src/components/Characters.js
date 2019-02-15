import React from 'react';
import './StarWars.css';

export default function Characters({ starWarsData }) {
  return (
    <div className="character-bio-container">
      {starWarsData.map(char => (
        <div key={char.name} className="bio-card">
          <h1>{char.name}</h1>
          <div className="bio-pic" />
          <ul className="bio-list-container">
            <li>Born: {char.birth_year}</li>
            <li>Gender: {char.gender}</li>
            <li>Height: {char.height}</li>
            <li>Mass: {char.mass}</li>
            <li>Eye color: {char.eye_color}</li>
            <li># Movies: {char.films.length}</li>
            <li># Starships: {char.starships.length}</li>
            <li># Vehicles: {char.vehicles.length}</li>
          </ul>
        </div>
      ))}
    </div>
  );
}
