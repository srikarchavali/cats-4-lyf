import React from 'react';

export const Cat = ({
	catName,
	name,
	breed,
	price,
	temperament,
	image,
	id,
	addToBasket,
}) => {
	return (
		<div className="catwrap">
			<div className="catImg">
				<img src={image} alt={name} />
			</div>
			<div className="cat-name">
				<h4>{catName}</h4>
				<h4>Breed: {name}</h4>
				<h5>{temperament}</h5>
				<h3>£{price}</h3>
			</div>

			<button
				className="cartButton"
				onClick={() => {
					addToBasket({ id, catName, price, image });
				}}>
				Add to Cart
			</button>
		</div>
	);
};

export default Cat;