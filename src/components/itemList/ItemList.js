import getFirestore from '../../../config/firebase';
import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import ItemCard from '../itemCard/ItemCard';
import CargandoDatos from '../cargandoDatos/CargandoDatos';

const  ItemList = () =>{

    let {category} = useParams();
    const [itemsMostrar, setItemsMostrar] = useState([]);

    useEffect(() => {
        setItemsMostrar([]);
        setTimeout(()=> {
            let items = [];
            const db = getFirestore();
            const productosCollection = db.collection("productos");
            // si category existe
            if(category){
                const products = productosCollection.where("categoria", "==", category);
                products.get().then((resp) => {
                    if (resp.size === 0) {
                        console.log("Sin datos")
                    }
                    else{
                        resp.docs.map((producto)=> {items.push({id: producto.id, ...producto.data()})});
                        setItemsMostrar(items);
                    }
                })
                .catch((error) => console.log(error));
            }
            else{
                productosCollection.get().then((resp) => {
                    if (resp.size === 0) {
                        console.log("Sin datos")
                    }
                    else{
                        resp.docs.map((producto)=> {items.push({id:producto.id, ...producto.data()})});
                        setItemsMostrar(items);
                        }
                })
                .catch((error) => console.log(error));
            }
        }, 1000)
    }, [category]);


    if(itemsMostrar.length > 0){
        return(
            <ul className="itemList">
                {itemsMostrar.map((item)=>
                    <ItemCard item={item} key={item.id}/>
                    )
                }
            </ul>
                )
        }
        else{
            return(
                <CargandoDatos texto={"Actualizando productos..."}/>
            )
        }
}
export default ItemList;