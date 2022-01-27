import React, { useState, useEffect } from 'react';
import './App.css';
import { Cat } from './components/Cat';
// import {CatData} from './components/CatData'
import faker from 'faker'

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
    // console.log(data);
    // console.log(cat);



    console.log(faker.commerce.price(50, 60))
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
          </div>    
  );
}


export default App;