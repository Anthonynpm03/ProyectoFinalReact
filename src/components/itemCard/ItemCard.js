import {NavLink,} from 'react-router-dom';
import {useState, useContext} from 'react';
import ComponenteCountOrNoDisponible from '../componenteCountOrNoDisponible/ComponenteCountOrNoDisponible';
import IrAlCarrito from '../irAlCarrito/IrAlCarrito';
import MensajeAgregarItem from '../mensajeAgregarItem/MensajeAgregarItem';
import CartContext from "../../context/CartContext";


const ItemCard = ({item}) =>{

    const {addItem, itemsEnCarrito} = useContext(CartContext);

    const [stockActual, setStockActual] = useState(item.stock);


    const restarStock = (e, cantidad, setCantidad) => {
        let existe = false;
        e.preventDefault();
        if (cantidad > stockActual){
            alert(`El total de unidades disponibles es de ${stockActual}`);
        }
        else{
            itemsEnCarrito.map(x => {
                if(x.item.id === item.id){
                    alert("No puedes agregar articulos repetidos a tu carrito, puedes modificar la catidad en el listado final!");
                    existe = true;
                }
            });
        }
        if(!existe){
            setStockActual(stockActual - cantidad);
            addItem(item, cantidad, setCantidad);
        }
    };

        return(
            <div className="productCard">
                <li>
                    <div className="productCard__info">
                        <div className="productCardinfo__img">
                            <img src={item.imagen}></img>
                        </div>
                        <div className="productCardinfo__texto">
                            <h3>{item.nombre}</h3>
                            <span>Id:{item.id}</span>
                            <p className="productCardinfo__texto--descripcion">{item.descripcion}</p>
                            <p className="productCardinfo__texto--preciofinal">${item.precioOferta} x Kg</p>
                            <p className="productCardinfo__texto--precioTachado">${item.precioNormal} x Kg</p>
                        </div>
                    </div>
                    <div className="productCard__otros">
                        <p>Varios descuentos para ti!</p>
                        <NavLink to={`/detalle-del-producto/${item.id}`}>Ver Detalles</NavLink>
                    </div>
                    <ComponenteCountOrNoDisponible item={item} stock={stockActual} initial={1} onAdd={restarStock}/>
                    {itemsEnCarrito.length > 0 ? <NavLink to='/Cart'><IrAlCarrito estado={true}/></NavLink> : <MensajeAgregarItem/>}
                </li>
            </div>
        )
}

export default ItemCard;

