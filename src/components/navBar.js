// import styledComponents from "styled-components"
import { FaSignInAlt, FaUserCheck, FaCat } from 'react-icons/fa';
import Modal from './Modal';
import './navbar.css'

const Navbar = ({ basketItems, removeItemFromBasket }) => {
	return (
		<div className="navBarWrap">
		<div className="wrapper">
			<h3 className="title">
				<FaCat />
				Cats4Lyf{' '}
			</h3>
			<nav className="navbar">
				<div className="signin">
					<h3>
						<FaSignInAlt /> Login
					</h3>
				</div>
				<div className="cart">
					<h3>
						<Modal className="overlap"
							basketItems={basketItems}
							removeItemFromBasket={removeItemFromBasket}
						/>
						Cart <p className='notification'>{basketItems.length}</p>
					</h3>
				</div>
				<div className="chekout">
					<h3>
						<FaUserCheck /> Checkout
					</h3>
				</div>
			</nav>
		</div>
		<div className="covercontent">
			<h2 className="covertext">Owning a cat can bring unconditional love and companionship to your life. Browse our vast collection to find you 'Purrfect' feline friend</h2>
			<img className="catgroupimg" src="https://media.istockphoto.com/photos/row-of-four-british-shorthair-cats-kittens-sitting-isolated-on-white-picture-id824824466?k=20&m=824824466&s=612x612&w=0&h=C8yq4rZsj2cugrKKDiJk4Hp96dnWvoiHFJgxWXet9Fs=" alt="group of kittens" />
		</div>
	</div>
	);
};

export default Navbar;