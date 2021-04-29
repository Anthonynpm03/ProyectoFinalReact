import {useState} from 'react';

const ItemCount = ({item, stock, initial, onAdd}) => {

    const [cantidad, setCantidad] = useState(initial);

    // const CambiarState = ({value}) => {
    //     setCantidad(value);
    // };
    const sumarCantidad = (e) => {
        e.preventDefault();
        setCantidad(cantidad+1)
        console.log(cantidad);
        if (cantidad >= item.stock){
            alert("No puedes exceder de las cantidades del producto");
            setCantidad(item.stock);
        }
    }

    const restarCantidad = (e) => {
        e.preventDefault();
        setCantidad(cantidad-1)
        if (cantidad == 1){
            alert("la cantidad minima para comprar es de 1 unidad");
            setCantidad(1);
        }
    }


    return(
        <>
            <div className="ItemCountContainer">
                <p><span>{stock}</span> unidades disponibles</p>
                <form>
                    <div className="ItemCount">
                        <button className="itemCountButton" onClick={(e)=>restarCantidad(e)}>-</button>
                        <input onChange={(e)=> e.preventDefault()}
                        // defaultValue cuando el value no sera mutado. Si uso Value debo usar un onchange asi sea solo negando el evento.
                            value={cantidad}
                            type="number"
                            name="Cantidad">
        {/* onChange={event => CambiarState(event.target)} ESTO SIRVE PARA OBTENER EL VALUE DEL INPUT */}
                        </input>
                        <button className="itemCountButton" onClick={(e)=>sumarCantidad(e)}>+</button>
                    </div>
                    <button id="buttonOnAdd" onClick={(e)=>onAdd(e, cantidad)}>Agregar al Carrito</button>
                </form>
            </div>
        </>
    )
}

export default ItemCount;

