import styledComponents from "styled-components"
import { FaShoppingCart, FaSignInAlt, FaUserCheck } from "react-icons/fa"

const Navbar = () =>{
    return(
        <nav className="navbar">
            <div className="signin">
                <h3><FaSignInAlt/> Login</h3> 
            </div>           
            <div className="cart">
            <h3><FaShoppingCart/> Cart</h3>
            </div>
            <div className="chekout">
            <h3><FaUserCheck/> Checkout</h3>
            </div>
        </nav>
    )
}

export default Navbar