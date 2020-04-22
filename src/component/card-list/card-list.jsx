import React from 'react';

import {Card} from '../card/card.component';

import './card-list.style.css';

export const CardList = props => (
<div className='card-list'>

      {
        props.movies.map(movies => (
          <Card key={movies.id} movies={movies}/>))
      }
</div>
);