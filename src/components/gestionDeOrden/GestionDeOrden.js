import { useContext, useState } from "react";
import CartContext from "../../context/CartContext";

const GestionEnvio = ({volverGestion}) => {
    const {calcularCostoEnvio, createOrdenEnvio} = useContext(CartContext);
    function generarOrdenEnvio (e){
        e.preventDefault();
        let nombreUsuario = document.getElementById("userNombreEnvio");
        let apellidoUsuario = document.getElementById("userApellidoEnvio");
        let telefonoUsuario = document.getElementById("userTelefonoEnvio");
        let zonaUsuario = document.getElementById("userZonaEnvio");
        let direccionUsuario = document.getElementById("userDireccionEnvio");
        let documentoUsuario = document.getElementById("userDniEnvio");
        const user = {
            nombre: nombreUsuario.value,
            apellido: apellidoUsuario.value,
            telefono: telefonoUsuario.value,
            zona: zonaUsuario.value,
            direccion: direccionUsuario.value,
            documento: documentoUsuario.value
        }
        const modalidad = "Envio a domicilio";
        createOrdenEnvio(user, modalidad);
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
                            </div>
                            <div className="datosDelComprador__direccion">
                                <span>Direccion de Entrega:</span>
                                <div className="datosDelComprador__direccionInputs">
                                    <select name="userZonaEnvio" id="userZonaEnvio" value="default" onChange={(e) => calcularCostoEnvio(e.target.value)}>
                                        <option disabled value="default">Seleccione una Direccion</option>
                                        <option value="caballito">Caballito</option>
                                        <option value="flores">Flores</option>
                                        <option value="floresta">Floresta</option>
                                        <option value="villadelparque">Villa del Parque</option>
                                        <option value="paternal">Paternal</option>
                                    </select>
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

const GestionRetiro = ({volverGestion}) => {
    const {createOrdenRetiro} = useContext(CartContext);
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
        let nombreUsuario = document.getElementById("userNombreRetiro");
        let apellidoUsuario = document.getElementById("userApellidoRetiro");
        let telefonoUsuario = document.getElementById("userTelefonoRetiro");
        let documentoUsuario = document.getElementById("userDniRetiro");
        const user = {
            nombre: nombreUsuario.value,
            apellido: apellidoUsuario.value,
            telefono: telefonoUsuario.value,
            documento: documentoUsuario.value
        }
        const modalidad = "Retiro por Sucursal";
        const LocalDondeRetira = local;
        createOrdenRetiro(user, modalidad, LocalDondeRetira);
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
                            </div>
                            <span>Vamos a usar estos datos para emitir tu factura</span>
                            <div className="datosDelComprador__dni">
                                <label>DNI o CUIT</label>
                                <input id="userDniRetiro" type="text"></input>
                            </div>
                        </div>
                        <div className="datosDelComprador__locales">
                            <button id="artigas" onClick={(e)=> definirLocal(e, "Artigas 2101", "artigas")}>Artigas 2101</button>
                            <button id="jonte2224" onClick={(e)=> definirLocal(e, "Alvarez Jonte 2224", "jonte2224")}>Alvarez Jonte 2224</button>
                            <button id="jonte4411" onClick={(e)=> definirLocal(e, "Alvarez Jonte 4411", "jonte4411")}>Alvarez Jonte 4411</button>
                        </div>
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

const GestionDeOrden = () => {
    const {setCostoEnvio} = useContext(CartContext);
    const [mostrarGestion, setMostrarGestion] = useState([true, false]);

    function mostrarVentanaEnviar (e) {
        e.preventDefault();
        setMostrarGestion([false, true]);
    }

    function mostrarVentanaRetiro (e) {
        e.preventDefault();
        setMostrarGestion([false, false]);
    }

    function volverGestion () {
        setMostrarGestion([true, false]);
        setCostoEnvio(0);
    }

    if(mostrarGestion[0]){
        return(
            <>
                <div className="gestionDeOrden">
                    <h4>Datos de Contacto</h4>
                    <p>Elegi como obtener tu pedido</p>
                    <div className="gestion__buttons">
                        <button onClick={(e)=>{mostrarVentanaEnviar(e)}}>
                            <h5>Enviar mi pedido</h5>
                            <span>Gestionar el envio del pedido directo a mi domicilio</span>
                        </button>
                        <button onClick={(e)=>{mostrarVentanaRetiro(e)}}>
                            <h5>Retirar por un Local</h5>
                            <span>Retirar mi pedido en una sucursal</span>
                        </button>
                    </div>
                </div>
            </>
        )
    }
    else {
        return(
            mostrarGestion[1] ? <GestionEnvio volverGestion={volverGestion}/> : <GestionRetiro volverGestion={volverGestion}/>
        )
    }
}

export default GestionDeOrden;