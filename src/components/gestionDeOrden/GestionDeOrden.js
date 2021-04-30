import { useContext, useState } from "react";
import CartContext from "../../context/CartContext";
import GestionDeEnvio from '../../components/gestionDeEnvio/GestionDeEnvio';
import GestionDeRetiro from '../../components/gestionDeRetiro/GestionDeRetiro';

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
            mostrarGestion[1] ? <GestionDeEnvio volverGestion={volverGestion}/> : <GestionDeRetiro volverGestion={volverGestion}/>
        )
    }
}

export default GestionDeOrden;