import { useContext } from "react";
import CartContext from "../../context/CartContext";
import CartItem from '../cartItem/CartItem';

const CartList = () =>{

    const {itemsEnCarrito} = useContext(CartContext);

    return(
        <>
            <ul>
                {
                    itemsEnCarrito.map(item =>
                            <CartItem item={item} key={item.item.id}/>
                    )
                }
            </ul>
        </>
    )
}

export default CartList;