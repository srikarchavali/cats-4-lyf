import React, { useState, useEffect } from 'react';
import fetchCatData from './fetchCatData';
import './App.css';

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
    console.log(data);
    console.log(cat);

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
      <div className="grid-container">
        <div className="cat">
          <div className="catImg">
            <img src={props.image} alt={props.name}/>
          </div>  
          <div className="cat-name">
            <h4>{props.name}</h4>
            <h5>{props.breed}</h5>
            <h3>£{props.price}</h3>
            <button>Add to Cart</button>
          </div>
        </div>
        
      </div>
    )
  }
export default App;