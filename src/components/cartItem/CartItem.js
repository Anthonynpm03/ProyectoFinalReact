import { useContext, useState } from "react";
import CartContext from "../../context/CartContext";

const CartItem = ({item}) => {

    const [cantidad, setCantidad] = useState(item.cantidad)
    const {setArticulosTotales, removeItem, itemsEnCarrito} = useContext(CartContext);

    const verificarTotales = () => {
        let total = 0;
        itemsEnCarrito.map((item => {
            total += item.cantidad;
        }))
        setArticulosTotales(total)
    }

    const agregarCantidad = (e, id) =>{
        e.preventDefault();
        itemsEnCarrito.map((item => {
            if(item.item.id === id){
                item.cantidad += 1;
                setCantidad(item.cantidad);
            }
        }))
        verificarTotales();
    }

    const restarCantidad = (e, id) =>{
        e.preventDefault();
        itemsEnCarrito.map((item => {
            if(item.item.id === id){
                item.cantidad -= 1;
                setCantidad(item.cantidad);
            }
        }))
        verificarTotales();
    }

    return(
        <li>
            <div className="cartItem__img">
                <img src={item.item.imagen}></img>
            </div>
            <div className="cartItem__info">
                <div className="cartItem_info--1">
                    <p className="cartItem_info--nombre">{item.item.nombre}</p>
                    <p>${item.item.precioOferta} x {item.item.medida}</p>
                </div>
                <div className="cartITem__count">
                    <button onClick={(e)=> restarCantidad(e, item.item.id)}>-</button>
                    <span>{cantidad}</span>
                    <button onClick={(e)=> agregarCantidad(e, item.item.id)}>+</button>
                </div>
            </div>
            <div className="cartItem__subtotal">
                <p>$ {(item.item.precioOferta) * (item.cantidad)}</p>
            </div>
            <div className="cartItem__remove">
                <button onClick={(e)=> removeItem(e, item.item.id, item.cantidad)}><i className="fas fa-trash-alt"></i></button>
            </div>
        </li>
    )
}

export default CartItem;