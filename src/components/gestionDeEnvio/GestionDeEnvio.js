import { useContext, useState } from "react";
import CartContext from "../../context/CartContext";

const GestionEnvio = ({volverGestion}) => {
    
    const {calcularCostoEnvio, createOrdenEnvio} = useContext(CartContext);
    const [mostrarAlertas, setMostrarAlertas] = useState({alertaTlf: false, alertaEmail: false, alertaZona: false});
    const [valueSelect, setValueSelect] = useState("");

    function generarOrdenEnvio (e){
        e.preventDefault();
        let validacion = false;
        let nombreUsuario = document.getElementById("userNombreEnvio");
        let apellidoUsuario = document.getElementById("userApellidoEnvio");
        let telefonoUsuario = document.getElementById("userTelefonoEnvio");
        let emailUsuario = document.getElementById("userEmail");
        let emailUsuarioVerificacion = document.getElementById("userVerificacionEmail");
        let direccionUsuario = document.getElementById("userDireccionEnvio");
        let documentoUsuario = document.getElementById("userDniEnvio");

        if(telefonoUsuario.value.length <= 7 & emailUsuario.value !== emailUsuarioVerificacion.value & valueSelect === ""){
            setMostrarAlertas({alertaTlf: true, alertaEmail: true, alertaZona: true});
            alert("Por favor revisa tus datos!");
        }
        else if(telefonoUsuario.value.length <= 7 & emailUsuario.value !== emailUsuarioVerificacion.value){
            setMostrarAlertas({alertaTlf: true, alertaEmail: true, alertaZona: false});
            alert("Por favor revisa tus datos!");
        }
        else if(telefonoUsuario.value.length <= 7 & valueSelect === ""){
            setMostrarAlertas({alertaTlf: true, alertaEmail: false, alertaZona: true});
            alert("Por favor revisa tus datos!");
        }
        else if(emailUsuario.value !== emailUsuarioVerificacion.value & valueSelect === ""){
            setMostrarAlertas({alertaTlf: false, alertaEmail: true, alertaZona: true});
            alert("Por favor revisa tus datos!");
        }
        else if(telefonoUsuario.value.length <= 7){
            setMostrarAlertas({alertaTlf: true, alertaEmail: false, alertaZona: false});
            alert("Por favor revisa tus datos!");
        }
        else if(emailUsuario.value !== emailUsuarioVerificacion.value){
            setMostrarAlertas({alertaTlf: false, alertaEmail: true, alertaZona: false});
            alert("Por favor revisa tus datos!");
        }
        else if(valueSelect === ""){
            setMostrarAlertas({alertaTlf: false, alertaEmail: false, alertaZona: true});
            alert("Por favor revisa tus datos!");
        }
        else{
            validacion = true;
        }
        if(validacion){
            const user = {
                nombre: nombreUsuario.value,
                apellido: apellidoUsuario.value,
                telefono: telefonoUsuario.value,
                email: emailUsuario.value,
                zona: valueSelect,
                direccion: direccionUsuario.value,
                documento: documentoUsuario.value
            }
            const modalidad = "Envio a domicilio";
            createOrdenEnvio(user, modalidad);
        };

    };

    function cambiarSelect(value){
        setValueSelect(value);
        calcularCostoEnvio(value);
    }
    return(
        <>
            <div className="gestionEnvio">
                <h4>Domicilio de Entrega</h4>
                <form>
                    <div className="datosDelComprador">
                        <p>Datos del comprador:</p>
                        <div className="datosDelComprador__inputs">
                            <div className="datosDelComprador__info">
                                <div className="datosDelComprador__nombre">
                                    <label>Nombre:</label>
                                    <input id="userNombreEnvio" type="text"></input>
                                </div>
                                <div className="datosDelComprador__apellido">
                                    <label>Apellido:</label>
                                    <input id="userApellidoEnvio" type="text"></input>
                                </div>
                            </div>
                            <div className="datosDelComprador__tlf">
                                <label>Telefono:</label>
                                <input id="userTelefonoEnvio" type="text"></input>
                                {mostrarAlertas.alertaTlf ? <span className="mensajeDeCorrecion">tu numero de telefono debe tener minimo 8 digitos</span> : null }
                            </div>
                            <div className="datosDelComprador__email">
                                <label>Email:</label>
                                <input id="userEmail" type="email"></input>
                                <label>Verifica tu email:</label>
                                <input id="userVerificacionEmail" type="email"></input>
                                {mostrarAlertas.alertaEmail ? <span className="mensajeDeCorrecion">El email debe ser el mismo</span> : null }
                            </div>
                            <div className="datosDelComprador__direccion">
                                <p>Direccion de Entrega:</p>
                                <div className="datosDelComprador__direccionInputs">
                                    <select name="userZonaEnvio" id="userZonaEnvio" value={valueSelect} onChange={(e) => cambiarSelect(e.target.value)}>
                                        <option disabled value="">Seleccione una Direccion</option>
                                        <option value="caballito">Caballito</option>
                                        <option value="flores">Flores</option>
                                        <option value="floresta">Floresta</option>
                                        <option value="villadelparque">Villa del Parque</option>
                                        <option value="paternal">Paternal</option>
                                    </select>
                                    {mostrarAlertas.alertaZona ? <span className="mensajeDeCorrecion">Selecciona una zona de entrega</span> : null }
                                    <label>Calle y casa</label>
                                    <input id="userDireccionEnvio" type="text"></input>
                                </div>
                            </div>
                            <span>Vamos a usar estos datos para emitir tu factura</span>
                            <div className="datosDelComprador__dni">
                                <label>DNI o CUIT</label>
                                <input id="userDniEnvio" type="text"></input>
                            </div>
                        </div>
                        <div className="datosDelComprador__buttons">
                            <button onClick={volverGestion}>Volver</button>
                            <button onClick={(e) => generarOrdenEnvio(e)}>Generar Comprobante</button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default GestionEnvio;