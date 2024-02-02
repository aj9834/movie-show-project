import React, { useState, useEffect } from 'react';


const CardDetail = () => {
  return (
    <div>
      <h3>{shows.name}</h3>
      <p>{shows.summary}</p>
      <img src={shows.image} alt= "image is missing"/>
    </div>
  );
};

export default CardDetail;
