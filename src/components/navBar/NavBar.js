import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo.png';
import  ShoppingCar  from '../shoppingCar/ShoppingCar';
import MenuMobile from '../menuMobile/MenuMobile';
import DropdonwMenu from '../dropdonwMenu/DropdonwMenu';


//EJEMPLO COMPONENTE CON ARROW FUNCION Y RECIBIENDO TODAS LAS PROPIEDADES
// NO NECESITO NI EL RENDER NI EL RETURN
// RECIBO PROPIEDADES (props) COMO PARAMETRO DESDE APP.JS

const NavBar = () => {

    const [mostrarDropdonw, setMostrardropdonw] = useState(false);
    const [mostrarMobile, setMostrarMobile] = useState(false);

    const mostrarMenuMobile = () => {
        setMostrarMobile(!mostrarMobile);
    }

    const mostrarOcultarDropdonw = () => {
        setMostrardropdonw(!mostrarDropdonw);
    }

    return(
        <>
            <div className="navBar">
                <img src= {logo} />
                <ul>
                    <li><NavLink to="/">Inicio</NavLink></li>
                    <li onClick={()=> mostrarOcultarDropdonw()} className="dropdonw">
                         Productos
                         <i id="dropdonwArrowDonw" className={mostrarDropdonw ? "fas fa-sort-up" : "fas fa-sort-down"} ></i>
                          {mostrarDropdonw ? <DropdonwMenu/> : null }
                    </li>
                    <li><NavLink to="/nosotros/">Nosotros</NavLink></li>
                    <li>Contacto</li>
                </ul>
                <ShoppingCar/>
                <div className="botonResponsive">
                    <i onClick={mostrarMenuMobile} className="fas fa-bars"></i>
                </div>
                {mostrarMobile ? <MenuMobile mostrarMenu={mostrarMenuMobile}/> : null}
            </div>
        </>
    )
}

export default NavBar;

//EJEMPLO DESTRUCTURANDO PROPIEDADES
// const NavBar = ({opcion4}) => (
//     <>
//         <div className="navBar">
//         <img src= {logo} />
//             <ul>
//                 <li>Inicio</li>
//                 <li>Productos</li>
//                 <li>Nosotros</li>
//                 <li>{opcion4}</li>
//             </ul>
//         </div>
//     </>
// )

// export default NavBar;

//EJEMPLO COMPONENTE BASADO EN CLASE
//LAS PROPIEDADES NO LAS PASO COMO PARAMETRO.
//USO LA PALABRA THIS PARA ENTRAR EN EL SCOPE DE LA CLASE.
// class NavBar extends Component {
//     render(){
//         return(
//             <>
//                 <div className="navBar">
//                     <img src= {logo} />
//                     <ul>
//                         <li>{this.props.opcion1}</li>
//                         <li>{this.props.opcion2}</li>
//                         <li>{this.props.opcion3}</li>
//                         <li>{this.props.opcion4}</li>
//                     </ul>
//                 </div>
//             </>
//         )
//     }
// }

// export default NavBar;