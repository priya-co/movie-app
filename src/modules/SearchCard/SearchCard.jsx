import React from 'react';
import './searchCard.css';

export default function SearchCard(props) {
  return (
    <div className='search-card'>
      {/* <a style={{ textDecoration: 'none' }} href={props.url}> */}
      <div className='nudge'>{props.type}</div>
      <img className='card-img' src={props.image} alt='' />
      <div className='card-name'>{props.name}</div>
      {/* <div className='description'>{props.description}</div> */}
      {/* </a> */}
    </div>
  );
}
