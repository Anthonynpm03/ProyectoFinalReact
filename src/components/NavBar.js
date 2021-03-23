import { Component } from 'react';
import logo from './images/logo.png'
import  ShoppingCar  from './ShoppingCar';


//EJEMPLO COMPONENTE CON ARROW FUNCION Y RECIBIENDO TODAS LAS PROPIEDADES
// NO NECESITO NI EL RENDER NI EL RETURN
// RECIBO PROPIEDADES (props) COMO PARAMETRO DESDE APP.JS

const NavBar = (props) => (
        <>
            <div className="navBar">
            <img src= {logo} />
                <ul>
                    <li>{props.opcion1}</li>
                    <li>{props.opcion2}</li>
                    <li>{props.opcion3}</li>
                    <li>{props.opcion4}</li>
                    <li><ShoppingCar/></li>
                </ul>
            </div>
        </>
)

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