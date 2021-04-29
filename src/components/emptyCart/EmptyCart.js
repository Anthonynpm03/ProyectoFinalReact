import { NavLink } from "react-router-dom";

const EmptyCart = () => {
    return(
        <>
            <div className="emptyCartContainer">
                <div className="emptyCart">
                    <i class="fas fa-cart-arrow-down"></i>
                    <p>No haz agregado articulos a tu carrito!</p>
                </div>
                <p className="mensajeIraProductos">Haz clic <NavLink to="/ItemList">Aqui</NavLink> para ir a ver nuestros Productos!</p>
            </div>
        </>
    )
}

export default EmptyCart;