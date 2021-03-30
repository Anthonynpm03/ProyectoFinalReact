import {useState, useEffect} from 'react';

const ItemCount = ({stock, initial, productos, id}) => {
    const [cantidad, setCantidad] = useState(initial);
    const [stockActual, setStockActual] = useState(stock);

    useEffect(()=> {
        console.log("Esta seccion funciona igual que el componentDidMount");

        return () => {
            console.log("cambio");
        };
    });

    // const CambiarState = ({value}) => {
    //     setCantidad(value);
    // };

    const restarStock = (e, cantidad) => {
        e.preventDefault();
        if (cantidad > stockActual){
            alert(`El total de unidades disponibles es de ${stockActual}`);
        }
        else{
            productos.map((item, i)=>{
                if(item.id === id){
                    item.stock -= cantidad;
                    console.log(item.stock);
                    setStockActual(item.stock);
                    alert(`Haz agregado ${cantidad} unidades a tu carrito!`);
                }
            })
        }
    };

    const sumarCantidad = (e) => {
        e.preventDefault();
        setCantidad(cantidad+1)
        if (cantidad >= stockActual){
            alert("No puedes exceder de las cantidades del producto");
            setCantidad(stockActual);
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
                <p><span>{stockActual}</span> unidades disponibles</p>
                <form>
                    <div className="ItemCount">
                        <button className="itemCountButton" onClick={(e)=>restarCantidad(e)}>-</button>
                        <input
                            value={cantidad}
                            type="number"
                            name="Cantidad">
        {/* onChange={event => CambiarState(event.target)} ESTO SIRVE PARA OBTENER EL VALUE DEL INPUT */}
                        </input>
                        <button className="itemCountButton" onClick={(e)=>sumarCantidad(e)}>+</button>
                    </div>
                    <button id="buttonOnAdd" onClick={(e)=>restarStock(e, cantidad)}>Agregar al Carrito</button>
                </form>
            </div>
        </>
    )
}

export default ItemCount;

