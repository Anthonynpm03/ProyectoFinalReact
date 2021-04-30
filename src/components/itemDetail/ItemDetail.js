import getFirestore from '../../../config/firebase';
import {NavLink,} from 'react-router-dom';
import {useParams} from 'react-router-dom';
import {useContext, useState, useEffect} from 'react';
import CartContext from "../../context/CartContext";
import ComponenteCountOrNoDisponible from '../componenteCountOrNoDisponible/ComponenteCountOrNoDisponible';
import IrAlCarrito from '../irAlCarrito/IrAlCarrito';
import MensajeAgregarItem from '../mensajeAgregarItem/MensajeAgregarItem';
import CargandoDatos from '../cargandoDatos/CargandoDatos';

const ItemDetail = () =>{

    let {id} = useParams();
    const {itemsEnCarrito, addItem} = useContext(CartContext);
    const [itemActual, setItemActual] = useState([]);

    useEffect(() => {
        setTimeout(()=> {
            const db = getFirestore();
            const productosCollection = db.collection("productos").doc(id);
            productosCollection.get().then((resp) => {
            if (resp === undefined) {
                console.log("Sin datos")
            }
            else{
                const product = {id: resp.id, ...resp.data()};
                setItemActual([product, product.stock]);
            }
        })
        .catch((error) => console.log(error));
        }, 500)
        }, [id]);

    const restarStock = (e, cantidad, setCantidad) => {
        let existe = false;
        e.preventDefault();
        if (cantidad > itemActual[1]){
            alert(`El total de unidades disponibles es de ${itemActual[1]}`);
        }
        else{
            itemsEnCarrito.map(x => {
                if(x.item.id === itemActual[0].id){
                    alert("No puedes agregar articulos repetidos a tu carrito, puedes modificar la catidad en el listado final!");
                    existe = true;
                }
            });
        }
        if(!existe){
            let stockRestante = itemActual[1]-cantidad;
            setItemActual([itemActual[0], stockRestante]);
            addItem(itemActual[0], cantidad, setCantidad);
        }
    };

        if(itemActual.length < 1){
            return(
                <CargandoDatos texto="Obteniendo datos del productos..."/>
            )
        }
        else{
            return(
                <>
                    <div className="ItemDetail">
                        <div className="ItenDetail__information">
                            <div className="ItenDetail__information--miniaturas">
                                <img src={itemActual[0].miniaturas[0]} className="miniatura miniatura1"></img>
                                <img src={itemActual[0].miniaturas[1]} className="miniatura miniatura1"></img>
                                <img src={itemActual[0].miniaturas[2]} className="miniatura miniatura1"></img>
                            </div>
                            <div className="ItenDetail__information--banner">
                                <img src={itemActual[0].imagen}></img>
                            </div>
                            <div className="ItenDetail__information--texto">
                                <h3>{itemActual[0].nombre}</h3>
                                <span>Producto Id: {itemActual[0].id}</span>
                                <p className="ItenDetail__information--textoDescripcion">{itemActual[0].descripcion}</p>
                                <p className="ItenDetail__informacion--textoPrecio">$ {itemActual[0].precioOferta} x {itemActual[0].medida}</p>
                                <p className="ItenDetail__information--textoPrecioNormal">{itemActual[0].precioNormal} x {itemActual[0].medida}</p>
                                <p className="ItenDetail__informacion--textoEnvio">Take away disponible. Delivery sin costo en un rango de 5 cuadras a la redonda de cada sucursal. Delivery disponible para zonas de Villa del parque, Caballito, Flores, Floresta y Paternal con costo adicional reflejado en el Checkout.</p>
                                <p className="ItenDetail__informacion--textoPago">Medios de pago: Efectivo y MercadoPago.</p>
                            </div>
                        </div>
                        <div className="ItenDetail__configuraciones">
                            <div className="ItenDetail__configuraciones--volver">
                                <NavLink to={`/productos/${itemActual[0].categoria}`}>
                                    <i className="fas fa-arrow-left"></i>
                                    <p>Volver al listado</p>
                                </NavLink>
                            </div>
                            <div className="ItenDetail__configuraciones--itemCount">
                                <ComponenteCountOrNoDisponible item={itemActual[0]} stock={itemActual[1]} initial={1} onAdd={restarStock}/>
                            </div>
                            <div className="ItenDetail__configuraciones--Button">
                            {itemsEnCarrito.length > 0 ? <NavLink to='/Cart'><IrAlCarrito estado={true}/></NavLink> : <MensajeAgregarItem/>}
                            </div>
                        </div>
                    </div>
                </>
            )
        }
}


export default ItemDetail;