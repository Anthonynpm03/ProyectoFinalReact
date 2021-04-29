import { useContext } from "react";
import CartContext from "../../context/CartContext";
import CartItem from '../cartItem/CartItem';

const CartList = () =>{

    const {itemsEnCarrito} = useContext(CartContext);


    return(
        <>
            <ul>
                {
                    itemsEnCarrito.map(item =>{
                        return(
                            <CartItem item={item} key={item.id}/>
                        )
                    })
                }
            </ul>
        </>
    )
}

export default CartList;