import React from 'react'
import Card from './Card';
import { useState } from 'react';

const Cards = (props) => {
  let shows = props.shows;

  const [likedShows, setLikedShows] = useState([]);

  return (
    <div className="flex flex-wrap justify-center gap-4 mb-4">
      {
        shows && shows.map(item => {
          return (<Card  key={item.score} shows={item.show} likedShows={likedShows} setLikedShows = {setLikedShows}
            />)
        })
      }
    </div>
  )
}

export default Cards
