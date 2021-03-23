import {useState, useEffect} from 'react';
import ItemCount from './ItemCount';



const  ItemList = ({productos, categorias}) =>{

    return(
        <div className="itemListContainer inactive">
            <h1>Listado de productos</h1>
        {
            categorias.map((y, j)=>
                <div key={j} id={`${y}Items`} className="productCardContainer">
                    {productos.map((x, i)=>{
                        if(x.categoria === y){
                            return (
                                <div key={i} className="productCard">
                                    <div className="productCard__info">
                                        <div className="productCardinfo__img">
                                            <img src={x.imagen}></img>
                                        </div>
                                        <div className="productCardinfo__texto">
                                                <h3>{x.nombre}</h3>
                                                <span>Id:{x.id}</span>
                                                <p className="productCardinfo__texto--descripcion">{x.descripcion}</p>
                                                <p className="productCardinfo__texto--preciofinal">${x.precioOferta} x Kg</p>
                                                <p className="productCardinfo__texto--precioTachado">${x.precioNormal} x Kg</p>
                                        </div>
                                    </div>
                                    <div className="productCard__otros">
                                            <p>Varios descuentos para ti!</p>
                                            <a>Ver Detalles</a>
                                    </div>
                                    <ItemCount productos={productos} indice={i} initial={1}/>
                                </div>
                                    )
                                }
                            }
                    )}
                </div>
            )
        }
    </div>
        )
}







export default ItemList;