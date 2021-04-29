import getFirestore from '../../../config/firebase';
import {NavLink,} from 'react-router-dom';
import {useParams} from 'react-router-dom';
import {useContext, useState, useEffect} from 'react';
import CartContext from "../../context/CartContext";
import ComponenteCountOrNoDisponible from '../componenteCountOrNoDisponible/ComponenteCountOrNoDisponible';
import IrAlCarrito from '../irAlCarrito/IrAlCarrito';
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

    const restarStock = (e, cantidad) => {
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
            addItem(itemActual[0], cantidad);
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
                                <span>{itemActual[0].id}</span>
                                <p>{itemActual[0].descripcion}</p>
                                <p>{itemActual[0].precioOferta}</p>
                                <p className="ItenDetail__information--textoPrecioNormal">{itemActual[0].precioNormal}</p>
                                <p>Envio gratis dentro de las zonas de Paternal, villa del Parque, Monte Castro. Cualquier otra zona distinta destro de Capital tendra un costo adicional de $150</p>
                            </div>
                        </div>
                        <div className="ItenDetail__configuraciones">
                            <div className="ItenDetail__configuraciones--comentarios">
                                <p>Agrega un Comentario:</p>
                                <textarea></textarea>
                            </div>
                            <div className="ItenDetail__configuraciones--itemCount">
                                <ComponenteCountOrNoDisponible item={itemActual[0]} stock={itemActual[1]} initial={1} onAdd={restarStock}/>
                            </div>
                            <div className="ItenDetail__configuraciones--Button">
                            {itemsEnCarrito.length > 0 ? <NavLink to='/Cart'><IrAlCarrito estado={true}/></NavLink> : <IrAlCarrito estado={false}/>}
                            </div>
                        </div>
                    </div>
                </>
            )
        }
}


export default ItemDetail;