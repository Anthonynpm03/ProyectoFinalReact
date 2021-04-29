import { useContext } from "react";
import CartContext from "../../context/CartContext";

const GraciasPorComprar = () => {

    const {ocultarGracias} = useContext(CartContext);

    return(
        <>
            <div className="graciasPorComprar">
                <h3>Gracias por tu Compra!</h3>
                <p>Tu pedido fue recibido y esta siendo preparado!</p>
                <button className="botonVolverTienda" onClick={ocultarGracias}>Volver a la tienda</button>
            </div>
        </>
    )
}

export default GraciasPorComprar;