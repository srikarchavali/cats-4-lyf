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
				<h4>{name}</h4>
				<h5>{breed}</h5>
				<h6>{temperament}</h6>
			</div>
			<h3>£{price}</h3>
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