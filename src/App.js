import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {

  // URL: https://random.dog/woof.json

  // Method
  const [cat, setCat] = useState([]);
  useEffect(() => {
      getCat()
    }, [])

  // Function
  const getCat = async () => {

    // Request
    const res = await fetch("https://api.thecatapi.com/v1/breeds?limit=20");

    // JSON
    const data = await res.json();
    // console.log(data[0].url);

    // Apply to hook
    setCat(data);
    console.log(data);
    console.log(cat);

  };

  return (
        <div className="catlist">
          {cat.map(cat => (
          <Cat
            key={cat.id}
            image={cat.image.url}
            name={cat.name}
            temperament={cat.temperament}/>
          ))}
          <p>hi</p>
      </div>
    
  );
}


const Cat = (props) => {
    return (
      <div className="cat">
        <div className="catImg">
          <img src={props.image} alt={props.name}/>
        </div>  
        <div className="cat-name">
          <h4>{props.name}</h4>
          <h5>{props.breed}</h5>
        </div>
        
        <h3>£{props.price}</h3>
        <button>Add to Cart</button>
      </div>
    )
  }
export default App;