import React from 'react';
import faker from 'faker';
// import fetchCatData from '../fetchCatData';

export const Cat = (props) => {
  
  return (
    <div className="catwrap">
      <div className="catImg">
        <img src={props.image} alt={props.name} />
      </div>
      <div className="cat-name">
        <h4>{faker.name.firstName()}</h4>
        <h5>Breed: {props.name}</h5>
        <h6>{props.temperament}</h6>
        <h3>£{faker.commerce.price(50,200)}</h3>
      </div>
      <button className = 'cartButton'>Add to Cart</button>
    </div>
  );
};

// export default Cat