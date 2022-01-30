import React, { useState, useEffect } from 'react';
import './App.css';
import { Cat } from './components/Cat';
// import {CatData} from './components/CatData'
import Navbar from './components/navBar';

const App = () => {


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
  // console.log(cat);
  };

  return (
    <div>
      <Navbar/>
      <div className="catlist">
              {cat.map(cat => (
        <Cat
        key={cat.id}
        image={cat.image.url}
        name={cat.name}
        temperament={cat.temperament}/>
        ))}
      </div>   
    </div> 
  );
}


export default App;