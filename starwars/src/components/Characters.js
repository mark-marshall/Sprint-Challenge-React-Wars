import React from 'react';

export default function Characters ({ starWarsData }) {
    return (
       <div className="charcer-bio-container">
       {
           starWarsData.map(char => <h1 key={char.name}>{char.name}</h1>)
       }
       </div> 
    )
}