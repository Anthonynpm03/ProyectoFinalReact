import CategoryList from './CategoryList';
import ItemList from './ItemList';
import PRODUCTOS from './Productos';


const CategoryListContainer = (props) =>{

    const restarStock = (e, indice, cantidad) => {
        e.preventDefault();
        if (cantidad > PRODUCTOS[indice].stock){
            alert(`El total de unidades disponibles es de ${PRODUCTOS[indice].stock}`);
        }
        else{
            PRODUCTOS[indice].stock = PRODUCTOS[indice].stock - cantidad;
            alert(`Haz agregado ${cantidad} unidades a tu carrito!`);
        }
    };

    return(
        <>
        <div className="categoryListContainer">
            <h1>Categorias</h1>
            <CategoryList categorias={props.categorias}/>
            <ItemList productos={PRODUCTOS} categorias={props.categorias} onAdd={restarStock}/>
        </div>
        </>
    );
};

    export default CategoryListContainer;