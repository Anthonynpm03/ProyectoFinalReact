import { useContext, useEffect, useState } from "react";
import getFirestore from "../../../config/firebase";
import CartContext from "../../context/CartContext";
import CargandoDatos from "../cargandoDatos/CargandoDatos";
import OrdendeEnvio from '../ordenDeEnvio/OrdenDeEnvio';
import OrdendeRetiro from "../ordenDeRetiro/OrdenDeRetiro";

const OrdenDeCompra = () =>{
    const {ordenId, terminarCompra} = useContext(CartContext);
    const [ordenRealizada, setOrdenRealizada] = useState("vacio");
    console.log(ordenRealizada);
    let modalidad = ordenRealizada.modalidad;

    useEffect(()=> {
        setTimeout(() => {
            const db = getFirestore();
            const OrdenCompraEnvio = db.collection("ordenesDeEnvio").doc(ordenId);
            const OrdenCompraRetiro = db.collection("ordenesDeRetiro").doc(ordenId);
            OrdenCompraEnvio.get().then((resp) => {
                if(resp.data() === undefined){
                    OrdenCompraRetiro.get().then((resp) => {
                        if(resp.size < 0){
                            console.log("Error");
                        }
                        else{
                            setOrdenRealizada(resp.data());
                        }
                    })
                    .catch((error) => console.log(error));
                }
                else{
                    setOrdenRealizada(resp.data());
                }
            })
            .catch((error) => console.log(error));
        }, 3000)
    }, []);

    function formatDate(dateFirestore) {
        let timestamp = dateFirestore.seconds * 1000 + dateFirestore.nanoseconds / 1000000;
        let dateObj = new Date(timestamp);
        let date = dateObj.getDate();
        let month = dateObj.getMonth() + 1;
        let year = dateObj.getFullYear();
        let fullDate = `${date}/${month}/${year}`;
        return fullDate;
    }

    if(ordenRealizada === "vacio"){
        return(
            <CargandoDatos texto="Generando comprobante..."/>
        )
    }
    else{
        if(modalidad === "Envio a domicilio"){
            return(
                <OrdendeEnvio ordenId={ordenId} formatDate={formatDate} ordenRealizada={ordenRealizada} terminarCompra={terminarCompra}/>
            )
        }
        else{
            return(
                <OrdendeRetiro ordenId={ordenId} formatDate={formatDate} ordenRealizada={ordenRealizada} terminarCompra={terminarCompra}/>
            )
        }
    }
};
export default OrdenDeCompra;