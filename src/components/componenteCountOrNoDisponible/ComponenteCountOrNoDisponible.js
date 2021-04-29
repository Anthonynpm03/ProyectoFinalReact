import ItemCount from '../itemCount/ItemCount';

const NoDisponible = () => {
    return(
        <div>
            <p>Articulo no disponible</p>
        </div>
    )
}

const ComponenteCountOrNoDisponible = ({item, stock, initial, onAdd}) => item.stock > 0 ? <ItemCount item={item} stock={stock} initial={initial} onAdd={onAdd}/> : <NoDisponible/>;

export default ComponenteCountOrNoDisponible;