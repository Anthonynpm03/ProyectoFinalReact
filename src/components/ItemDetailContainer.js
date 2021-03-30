import ItemDetail from './ItemDetail';

const ItemDetailContainer = ({productos}) =>{
    return(
        <>
            <div className="itemDetailContainer">
                <ItemDetail productos={productos}/>
            </div>
        </>
    )
}

export default ItemDetailContainer;