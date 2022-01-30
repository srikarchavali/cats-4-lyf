// import styledComponents from "styled-components"
// import styledComponents from "styled-components"
import { FaSignInAlt, FaUserCheck, FaCat } from 'react-icons/fa';
import Modal from './Modal';

const Navbar = ({ basketItems, removeItemFromBasket }) => {
	return (
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
						<Modal
							basketItems={basketItems}
							removeItemFromBasket={removeItemFromBasket}
						/>{' '}
						Cart
					</h3>
				</div>
				<div className="chekout">
					<h3>
						<FaUserCheck /> Checkout
					</h3>
				</div>
			</nav>
		</div>
	);
};

export default Navbar;