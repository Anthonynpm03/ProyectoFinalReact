import { useContext, useEffect} from "react";
import CartContext from "../../context/CartContext";
import CartList from "../cartList/CartList";
import EmptyCart from "../emptyCart/EmptyCart";
import GestionDeOrden from '../gestionDeOrden/GestionDeOrden';
import OrdenDeCompra from "../ordenDeCompra/OrdenDeCompra";
import GraciasPorComprar from '../graciasPorComprar/GraciasPorComprar';



const Cart = () => {


    const {articulosTotales, setArticulosTotales, itemsEnCarrito, setItemsEnCarrito, calcularTotal, costoEnvio, mostrarFinalizar, mostrarGracias} = useContext(CartContext);

    useEffect(()=> {
        if(localStorage.getItem("items") != undefined){
            setItemsEnCarrito(JSON.parse(localStorage.items));
        }
        if(localStorage.getItem("cantidad") != undefined){
            setArticulosTotales(localStorage.cantidad);
        }
    }, []);

    if (itemsEnCarrito.length > 0 && !mostrarFinalizar && !mostrarGracias){
        return(
            <>
                <div className="CartContainer">
                    <div className="Cart">
                        <h3>{articulosTotales} articulos casi son tuyos!</h3>
                        <CartList/>
                        <div className="CartTotal">
                            <p>Total Compra: <span> $ {calcularTotal()}</span></p>
                            <p>Costo de Envio: <span> $ {costoEnvio}</span></p>
                            <p>Total a Pagar: <span> $ {calcularTotal()+costoEnvio}</span></p>
                        </div>
                    </div>
                    <GestionDeOrden/>
                </div>
            </>
        )
    }
    else {
        if(itemsEnCarrito.length === 0 && !mostrarFinalizar && !mostrarGracias){
            return(
                <>
                    <EmptyCart/>
                </>
            )
        }
        else{
           if(mostrarFinalizar && !mostrarGracias){
               return(<OrdenDeCompra/>)
           }
           else{
               return(<GraciasPorComprar/>)
           }
        }
    }
}

export default Cart;