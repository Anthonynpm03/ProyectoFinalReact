import ItemCount from './ItemCount';
import {Switch, BrowserRouter, Route, NavLink,} from 'react-router-dom';


const ItemCard = ({item, productos}) =>{

        return(
            <NavLink className="productCard" to={`/itemDetail/${item.id}`}>
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
                        <a>Ver Detalles</a>
                    </div>
                    <ItemCount stock={item.stock} initial={1} productos={productos} id={item.id}/>
                </li>
            </NavLink>
        )
}

export default ItemCard;

