import React, { useState, useEffect } from 'react';
import fetchCatData from './fetchCatData';
import './App.css';
import { Cat } from './components/Cat';
import Navbar from './components/navBar';
import Basket from './components/Basket';
import Modal from './components/Modal';


const App = () => {

  // URL: https://random.dog/woof.json

  // Method
  const [cat, setCat] = useState([]);

  const [catInfo, setCatInfo] = useState([])

  const [openModal, setOpenModal] = useState(false)


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
          <button className="openModalBtn" onClick={() => {setOpenModal(true)}}>Open</button>
            {openModal && <Modal closeModal={setOpenModal} />}
          <div className="catlist">
            {cat.map(cat => (
            <Cat
              key={cat.id}
              image={cat.image.url}
              name={cat.name}
              temperament={cat.temperament}/>
            ))}
            {/* <Basket name={cat.name} image={cat.image.url} price={cat.price} /> */}
            </div>   
          </div> 
  );
}


export default App;