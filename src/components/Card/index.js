
import React from 'react';
import './index.css';

const Card = (props) => {
    const { heading, paragraph, buttonText }=props
  return (
    <div className="card-body">
      <h1 className='heading'>{heading}</h1>
      <p className='paragraph'>{paragraph}</p>
      <button className='button'>{buttonText}</button>
    </div>
  );
}

export default Card;

