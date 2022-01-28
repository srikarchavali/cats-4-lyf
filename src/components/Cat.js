import React from 'react';
// import faker from 'faker'

export const Cat = (props) => {
  
  return (
    <div className="catwrap">
      <div className="catImg">
        <img src={props.image} alt={props.name} />
      </div>
      <div className="cat-name">
        <h4>{props.name}</h4>
        <h5>{props.breed}</h5>
        <h6>{props.temperament}</h6>
      </div>
      <h3>£{props.price}</h3>
      <button className = 'cartButton'>Add to Cart</button>
    </div>
  );
};

// export default Cat