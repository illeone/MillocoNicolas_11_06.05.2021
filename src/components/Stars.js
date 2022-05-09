import React from 'react';
import starFull from '../assets/star.png';
import starEmpty from '../assets/star-empty.png';

const Stars = ({rating}) => {
    const stars = []
    for (let i = 0; i < 5; i++) {
      if (i < rating) {
        stars.push(<img src={starFull} key={i} />)
      } else {
        stars.push(<img src={starEmpty} key={i} />)
      }
    }
  
  
    return (
      <div className='rating'>
        {stars}
      </div>
    );
  };

export default Stars;