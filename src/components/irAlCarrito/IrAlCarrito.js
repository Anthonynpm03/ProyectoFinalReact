import { useState } from "react";

const FlechaAlCarrito = () => {
    return(
        <>
            <div className="wow animate__animated animate__fadeInLeft">
                <i className="flechaCarrito fas fa-arrow-right"></i>
            </div>
        </>
    )
}

const IrAlCarrito = ({estado}) => {

    const [mostrarFlecha, setMostrarFlecha] = useState(estado);
    return(
        <>
            <div className="irAlCarrito">
                <p >Ir al Carrito</p>
                {mostrarFlecha ? <FlechaAlCarrito/> : null}
            </div>
        </>
    )
};
export default IrAlCarrito;