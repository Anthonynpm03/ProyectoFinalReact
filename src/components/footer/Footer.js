import { NavLink } from 'react-router-dom';

const Footer = () => {
    return(
        <>
            <div className="footerContainer">
                <div className="footerInformacion">
                    <div className="footerInformacion__rrss">
                        <ul>
                            <li><a className="instagramLink" href="https://www.instagram.com/queseriademisinti.oficial/?hl=es-la" target="_blank"><i class="fab fa-instagram"></i> <spam>Siguenos en Instagram!</spam></a></li>
                            <li><a className="facebookLink" href="https://www.facebook.com/queseriademisinti.oficial1" target="_blank"><i class="fab fa-facebook-square"></i><spam>Queseriademisinti</spam></a></li>
                            <li><a className="whatsappLink" href="https://wa.link/ddqauk"><i class="fab fa-whatsapp" target="_blank"></i><spam>Comunicate ante cualquier duda!</spam></a></li>
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
                    <p><i class="far fa-copyright"></i> 2021  todos los derechos reservados</p>
                    <spam>Desarrollado por: Anthony Perez</spam>
                </div>
            </div>
        </>
    )
}

export default Footer;