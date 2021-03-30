import {useParams,} from 'react-router-dom';
import ItemCount from './ItemCount';
import itemCount from './ItemCount';

const ItemDetail = ({productos}) =>{

    let {id} = useParams();
    let itemActual = [];

    productos.map((item, i)=> {
        if(item.id === id){
            itemActual = item;
            console.log(itemActual.miniaturas)
        }
    })
            return(
                <>
                    <div className="ItemDetail">
                        <div className="ItenDetail__information">
                            <div className="ItenDetail__information--miniaturas">
                                <img src={itemActual.miniaturas[0]} className="miniatura miniatura1"></img>
                                <img src={itemActual.miniaturas[1]} className="miniatura miniatura1"></img>
                                <img src={itemActual.miniaturas[2]} className="miniatura miniatura1"></img>
                            </div>
                            <div className="ItenDetail__information--banner">
                                <img src={itemActual.imagen}></img>
                            </div>
                            <div className="ItenDetail__information--texto">
                                <h3>{itemActual.nombre}</h3>
                                <span>{itemActual.id}</span>
                                <p>{itemActual.descripcion}</p>
                                <p>{itemActual.precioOferta}</p>
                                <p className="ItenDetail__information--textoPrecioNormal">{itemActual.precioNormal}</p>
                                <p>Envio gratis dentro de las zonas de Paternal, villa del Parque, Monte Castro. Cualquier otra zona distinta destro de Capital tendra un costo adicional de $150</p>
                            </div>
                        </div>
                        <div className="ItenDetail__configuraciones">
                            <div className="ItenDetail__configuraciones--comentarios">
                                <p>Agrega un Comentario:</p>
                                <textarea></textarea>
                            </div>
                            <div className="ItenDetail__configuraciones--itemCount">
                                <ItemCount stock={itemActual.stock} initial={1} productos={productos} id={itemActual.id}/>
                            </div>
                            <div className="ItenDetail__configuraciones--Button">
                                <button>Ir al Carrito</button>
                            </div>
                        </div>
                    </div>
                </>
            )
}


export default ItemDetail;