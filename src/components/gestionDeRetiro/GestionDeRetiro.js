import { useContext, useState } from "react";
import CartContext from "../../context/CartContext";

const GestionRetiro = ({volverGestion}) => {
    
    const {createOrdenRetiro} = useContext(CartContext);
    const [mostrarAlertas, setMostrarAlertas] = useState({alertaTlf: false, alertaEmail: false, alertaLocal: false});
    let local = "";

    function definirLocal(e, x, id){
        e.preventDefault();
        let campo1 = "";
        let campo2 = "";
        let campo3 = "";
        local = x;
        switch (id){
            case "artigas":
                campo1 = document.getElementById("artigas");
                campo1.style.backgroundColor = "#a00f0f";
                campo1.style.color = "white";
                campo2 = document.getElementById("jonte2224");
                campo2.style.backgroundColor = "white";
                campo2.style.color = "black";
                campo3 = document.getElementById("jonte4411");
                campo3.style.backgroundColor = "white";
                campo3.style.color = "black";
                local = "Artigas 2101";
                break;
            case "jonte2224":
                campo1 = document.getElementById("jonte2224");
                campo1.style.backgroundColor = "#a00f0f";
                campo1.style.color = "white";
                campo2 = document.getElementById("artigas");
                campo2.style.backgroundColor = "white";
                campo2.style.color = "black";
                campo3 = document.getElementById("jonte4411");
                campo3.style.backgroundColor = "white";
                campo3.style.color = "black";
                local = "Alvarez Jonte 2224";
                break;
            case "jonte4411":
                campo1 = document.getElementById("jonte4411");
                campo1.style.backgroundColor = "#a00f0f";
                campo1.style.color = "white";
                campo2 = document.getElementById("artigas");
                campo2.style.backgroundColor = "white";
                campo2.style.color = "black";
                campo3 = document.getElementById("jonte2224");
                campo3.style.backgroundColor = "white";
                campo3.style.color = "black";
                local = "Alvarez Jonte 4411";
                break;
        }
    };

    function generarOrdenRetiro (e){
        e.preventDefault();
        let validacion = false;
        let nombreUsuario = document.getElementById("userNombreRetiro");
        let apellidoUsuario = document.getElementById("userApellidoRetiro");
        let telefonoUsuario = document.getElementById("userTelefonoRetiro");
        let emailUsuario = document.getElementById("userEmail");
        let emailUsuarioVerificacion = document.getElementById("userVerificacionEmail");
        let documentoUsuario = document.getElementById("userDniRetiro");

        if(telefonoUsuario.value.length <= 7 & emailUsuario.value !== emailUsuarioVerificacion.value & local === ""){
            setMostrarAlertas({alertaTlf: true, alertaEmail: true, alertaLocal: true});
            alert("Por favor revisa tus datos!");
        }
        else if(telefonoUsuario.value.length <= 7 & emailUsuario.value !== emailUsuarioVerificacion.value){
            setMostrarAlertas({alertaTlf: true, alertaEmail: true, alertaLocal: false});
            alert("Por favor revisa tus datos!");
        }
        else if(telefonoUsuario.value.length <= 7 & local === ""){
            setMostrarAlertas({alertaTlf: true, alertaEmail: false, alertaLocal: true});
            alert("Por favor revisa tus datos!");
        }
        else if(emailUsuario.value !== emailUsuarioVerificacion.value & local === ""){
            setMostrarAlertas({alertaTlf: false, alertaEmail: true, alertaLocal: true});
            alert("Por favor revisa tus datos!");
        }
        else if(telefonoUsuario.value.length <= 7){
            setMostrarAlertas({alertaTlf: true, alertaEmail: false, alertaLocal: false});
            alert("Por favor revisa tus datos!");
        }
        else if(emailUsuario.value !== emailUsuarioVerificacion.value){
            setMostrarAlertas({alertaTlf: false, alertaEmail: true, alertaZona: false});
            alert("Por favor revisa tus datos!");
        }
        else if(local === ""){
            setMostrarAlertas({alertaTlf: false, alertaEmail: false, alertaLocal: true});
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
                documento: documentoUsuario.value
            }
            const modalidad = "Retiro por Sucursal";
            const LocalDondeRetira = local;
            createOrdenRetiro(user, modalidad, LocalDondeRetira);
        }
    }


    return(
        <>
            <div className="gestionEnvio">
                <h4>Retiro Por local</h4>
                <form>
                    <div className="datosDelComprador">
                        <p>Datos del comprador:</p>
                        <div className="datosDelComprador__inputs">
                            <div className="datosDelComprador__info">
                                <div className="datosDelComprador__nombre">
                                    <label>Nombre:</label>
                                    <input id="userNombreRetiro" type="text"></input>
                                </div>
                                <div className="datosDelComprador__apellido">
                                    <label>Apellido:</label>
                                    <input id="userApellidoRetiro" type="text"></input>
                                </div>
                            </div>
                            <div className="datosDelComprador__tlf">
                                <label>Telefono:</label>
                                <input id="userTelefonoRetiro" type="text"></input>
                                {mostrarAlertas.alertaTlf ? <span className="mensajeDeCorrecion">El email debe ser el mismo</span> : null }
                            </div>
                            <div className="datosDelComprador__email">
                                <label>Email:</label>
                                <input id="userEmail" type="email"></input>
                                <label>Verifica tu email:</label>
                                <input id="userVerificacionEmail" type="email"></input>
                                {mostrarAlertas.alertaEmail ? <span className="mensajeDeCorrecion">El email debe ser el mismo</span> : null }
                            </div>
                            <span>Vamos a usar estos datos para emitir tu factura</span>
                            <div className="datosDelComprador__dni">
                                <label>DNI o CUIT</label>
                                <input id="userDniRetiro" type="text"></input>
                            </div>
                        </div>
                        <p className="localesAnuncio">Elegi el local donde retiraras tu pedido:</p>
                        <div className="datosDelComprador__locales">
                            <button id="artigas" onClick={(e)=> definirLocal(e, "Artigas 2101", "artigas")}>Artigas 2101</button>
                            <button id="jonte2224" onClick={(e)=> definirLocal(e, "Alvarez Jonte 2224", "jonte2224")}>Alvarez Jonte 2224</button>
                            <button id="jonte4411" onClick={(e)=> definirLocal(e, "Alvarez Jonte 4411", "jonte4411")}>Alvarez Jonte 4411</button>
                        </div>
                        {mostrarAlertas.alertaLocal ? <span className="mensajeDeCorrecion">Debes elegir el local para retirar!</span> : null }
                        <div className="datosDelComprador__buttons">
                            <button onClick={volverGestion}>Volver</button>
                            <button onClick={(e) => generarOrdenRetiro(e)}>Generar Comprobante</button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default GestionRetiro;