import React, { useState, useEffect } from 'react';
import fetchCatData from './fetchCatData';
import './App.css';
import { Cat } from './components/Cat';
import Navbar from './components/navBar';

const App = () => {

  // URL: https://random.dog/woof.json

  // Method
  const [cat, setCat] = useState([]);

  const [catInfo, setCatInfo] = useState([])

  useEffect(() => {
      const info = fetchCatData();
      // getCat();

      console.log(info)
      setCatInfo(info);
    }, [])

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
  };

  // const singleCat = {
  //   url: cat[i].url,
  //   name: catInfo[i].name,
  //   breed: cat[i].name,
  //   age: catInfo[i].age,
  //   gender: catInfo[i].gender,
  //   country: catInfo[i].country,
  //   price: catInfo[i].price
  // }

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