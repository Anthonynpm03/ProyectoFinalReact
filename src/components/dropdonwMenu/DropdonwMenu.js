import { NavLink } from 'react-router-dom';

const DropdonwMenu = () => {
    return(
        <>
            <div id="dropdonwOpciones" className="dropdonwOpciones ">
                <ul>
                    <li><NavLink to="/productos/quesos">Quesos</NavLink></li>
                    <li><NavLink to="/productos/fiambres">Fiambres</NavLink></li>
                    <li><NavLink to="/productos/picadas">Picadas</NavLink></li>
                    <li><NavLink to="/productos/vinos">Vinos</NavLink></li>
                    <li><NavLink to="/productos/bebidas">Bebidas</NavLink></li>
                </ul>
            </div>
        </>
    )
}

export default DropdonwMenu;