const Basket = ({name, image, price}) => {
    return ( 
        <div>
            <h1>Basket</h1>
            <h3>{image}</h3>
            <h3>{name}</h3>
            <p>£{price}</p>
        </div>
    );
}
 
export default Basket;