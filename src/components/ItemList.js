import ItemCard from './ItemCard';
import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';




const  ItemList = ({productos}) =>{

    // UseState
    let [items, setItems] = useState([]);
    // UseParams
    let {category} = useParams();
    let itemsMostrar = [];
    // Use Effect
    useEffect(()=> {
        setItems([])
        getItems()
        .then((data) => {
            if(category === undefined){
                setItems(data)
            }
            else{
                data.map((item, i) => {
                    if(item.categoria === category){
                        itemsMostrar.push(item);
                    }
                })
                setItems(itemsMostrar);
            }
        })
    }, [category]);


    const getItems = () => {
        return (
            new Promise((resolve, rejected)=> {
                setTimeout(()=> {
                    resolve(productos);
                    rejected('Error al cargar los productos');
                }, 2000)
            })
        )
    }

    if(items.length > 0){
        return(
            <ul className="itemList">
                {items.map((item, j)=>
                    <ItemCard item={item} productos={productos}/>
                    )
                }
            </ul>
                )
        }
        else{
            return(
                <p>No hay Articulos para esta categoria</p>
            )
        }
}



export default ItemList;