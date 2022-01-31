import React, { useState, useEffect } from 'react';
import fetchCatData from './fetchCatData';
import './App.css';
import { Cat } from './components/Cat';
import Navbar from './components/navBar';

const App = () => {
	//set state, pass them down as props
	const [cat, setCat] = useState([]);
	const [catInfo, setCatInfo] = useState([]);
	const [basketItems, setBasketItems] = useState([]);

	//add cat to basket
	const addToBasket = (item) => {
		setBasketItems([...basketItems, item]);
	};
	//remove cat from basket funtion using remaining cat id
	const removeItemFromBasket = (item) => {
		const remainingBasketItems = basketItems.filter(
			(cat) => cat.id !== item.id,
		);
		setBasketItems(remainingBasketItems);
	};

	//fetch cat info from cat api and faker
	useEffect(() => {
		(async () => {
			const res = await fetch('https://api.thecatapi.com/v1/breeds?limit=20');
			const data = await res.json();
			const info = fetchCatData();

			setCatInfo(info);
			setCat(data);
		})();
	}, []);

	return (
		//pass functions and state down as props to components
		//map method populates a new array
		<div>
			<Navbar
				basketItems={basketItems}
				removeItemFromBasket={removeItemFromBasket}
			/>
			<div className="catlist">
				{cat.map((cat, i) => (
					<Cat
						key={cat.id}
						id={cat.id}
						catName={catInfo[i]?.name}
						image={cat.image.url}
						name={cat.name}
						temperament={cat.temperament}
						price={catInfo[i].price}
						addToBasket={addToBasket}
					/>
				))}
			</div>
		</div>
	);
};

export default App;