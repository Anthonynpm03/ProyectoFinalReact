import { NavLink } from 'react-router-dom';

const Footer = () => {
    return(
        <>
            <div className="footerContainer">
                <div className="footerInformacion">
                    <div className="footerInformacion__rrss">
                        <ul>
                            <li><a className="instagramLink" href="https://www.instagram.com/queseriademisinti.oficial/?hl=es-la" target="_blank"><i className="fab fa-instagram"></i> <span>Siguenos en Instagram!</span></a></li>
                            <li><a className="facebookLink" href="https://www.facebook.com/queseriademisinti.oficial1" target="_blank"><i className="fab fa-facebook-square"></i><span>Queseriademisinti</span></a></li>
                            <li><a className="whatsappLink" href="https://wa.link/ddqauk"><i className="fab fa-whatsapp" target="_blank"></i><span>Comunicate ante cualquier duda!</span></a></li>
                        </ul>
                    </div>
                    <div className="footerInformacion__productos">
                        <ul>
                            <li><NavLink to="/productos/quesos">Quesos</NavLink></li>
                            <li><NavLink to="/productos/fiambres">Fiambres</NavLink></li>
                            <li><NavLink to="/productos/picadas">Picadas</NavLink></li>
                            <li><NavLink to="/productos/vinos">Vinos</NavLink></li>
                            <li><NavLink to="/productos/bebidas">Bebidas</NavLink></li>
                        </ul>
                    </div>
                    <div className="footerInformacion__opciones">
                        <ul>
                            <li><NavLink to="/">Inicio</NavLink></li>
                            <li>Nosotros</li>
                            <li>Sucursales</li>
                        </ul>
                    </div>
                </div>
                <div className="footerCredenciales">
                    <p><i className="far fa-copyright"></i> 2021  todos los derechos reservados</p>
                    <span>Desarrollado por: Anthony Perez</span>
                </div>
            </div>
        </>
    )
}

export default Footer;