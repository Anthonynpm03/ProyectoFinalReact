import ItemList from './ItemList';


const ItemListContainer = ({productos}) => {

    return(
        <>
            <div className="ItemListContainer">
                <h2>Listado de Productos</h2>
                <ItemList productos={productos}/>
            </div>
        </>
    )
}

export default ItemListContainer;