import React from 'react';

import './card.style.css';

export const Card = (props) => (

    <div className='card-container'>
        <img alt="movies" src={`https://robohash.org/${props.movies.id}?set=set2&size=180x180`}/>

        <h2>{props.movies.name}</h2>
        <p> {props.movies.email} </p>
    </div>   
)
