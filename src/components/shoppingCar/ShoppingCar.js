import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import CartContext from "../../context/CartContext";



const ShoppingCar = () => {
    const {articulosTotales} = useContext(CartContext);

    return(
        <>
            <NavLink className="shoppingCartIcon" to="/Cart/">
                <i className="fas fa-shopping-cart"></i>
                <span>{articulosTotales}</span>
            </NavLink>
        </>
    )
    }

export default ShoppingCar;