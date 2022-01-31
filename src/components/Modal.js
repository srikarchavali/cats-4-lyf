import React, { useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';

//pass in props to the component using destructuring (curly braces)
const Modal = ({ basketItems, removeItemFromBasket }) => {
	const [modal, setModal] = useState(false);

	const toggleModal = () => {
		setModal(!modal);
	};
	// function to add total in basket
	const basketTotal = basketItems.reduce((accumulator, currentItem) => {
		accumulator += parseFloat(currentItem.price);
		return accumulator;
	}, 0);

	if (modal) {
		document.body.classList.add('active-modal');
	} else {
		document.body.classList.remove('active-modal');
	}
	// map through the basket items and include button function to remove using on click function
	//to fixed method adds 2 zeros to the right of the decimal.
	return (
		<>
			<div onClick={toggleModal}>
				<FaShoppingCart />
			</div>

			{modal && (
				<div className="modal">
					<div onClick={toggleModal} className="overlay"></div>
					<div className="modal-content">
						<h2>Shopping Basket</h2>
						<ul>
							{basketItems.map((item) => (
								<li>
									{item.catName} - {item.price} -{' '}
									<span
										onClick={() => {
											removeItemFromBasket(item);
										}}>
										Remove
									</span>
								</li>
							))}
						</ul>
						{basketTotal.toFixed(2)}
						<button className="close-modal" onClick={toggleModal}>
							CLOSE
						</button>
					</div>
				</div>
			)}
		</>
	);
};
export default Modal;