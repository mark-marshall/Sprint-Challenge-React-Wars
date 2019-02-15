import React from 'react';

export default function Characters ({ starWarsData }) {
    return (
       <div className="charcer-bio-container">
       {
           starWarsData.map(char => 
           <div key={char.name}>
               <h1 >{char.name}</h1>
               <div className="bio-pic"></div>
               <ul>
                <li>Born: {char.birth_year}</li>
                <li>Gender: {char.gender}</li>
                <li>Height: {char.height}</li>
                <li>Mass: {char.mass}</li>
                <li>Eye color: {char.eye_color}</li>
                <li># Starships: {char.starships.length}</li>
                <li># Vehicles: {char.vehicles.length}</li>
               </ul>
               </div>)
       }
       </div> 
    )
}