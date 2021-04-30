import { NavLink } from 'react-router-dom';

const MenuMobile = ({mostrarMenu}) => {


    return(
        <>
            <div className="menuMobile wow animate__animated animate__fadeInRight">
                <i onClick={mostrarMenu} className="fas fa-times"></i>
                <ul>
                    <li onClick={mostrarMenu}><NavLink to="/">Inicio</NavLink></li>
                    <li onClick={mostrarMenu}><NavLink to="/productos/quesos">Quesos</NavLink></li>
                    <li onClick={mostrarMenu}><NavLink to="/productos/fiambres">Fiambres</NavLink></li>
                    <li onClick={mostrarMenu}><NavLink to="/productos/picadas">Picadas</NavLink></li>
                    <li onClick={mostrarMenu}><NavLink to="/productos/vinos">Vinos</NavLink></li>
                    <li onClick={mostrarMenu}><NavLink to="/productos/bebidas">Bebidas</NavLink></li>
                    <li onClick={mostrarMenu}><NavLink to="/nosotros/">Nosotros</NavLink></li>
                    <li onClick={mostrarMenu}>Contacto</li>
                </ul>
            </div>
        </>
    )
}

export default MenuMobile;