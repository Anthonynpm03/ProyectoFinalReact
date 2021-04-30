const OrdendeEnvio = ({formatDate, ordenRealizada, ordenId, terminarCompra}) => {

    let productos = [];
    let productosMensaje = "";
    
    function cargarProductos (){
        ordenRealizada.productos.map((item) => {
            productos.push([item.item.nombre, item.item.precioOferta + "x" + item.item.medida, item.cantidad]);
            console.log(productos);
            });
            let itemMensaje = "";
            productos.map((item, i) => {
                itemMensaje += `*ITEM: ${i+1}* ${item[0]}---- ${item[1]}---- ${item[2]} %20 %20 %20`
            })
                productosMensaje = itemMensaje;
                return(productos);
            };
                cargarProductos();
                let mensaje = `
                Orden: ${ordenId} %20 %20 %20
                Modalidad: ${ordenRealizada.modalidad} %20 %20 %20 %20
                Nombre: ${ordenRealizada.usuario.nombre} ${ordenRealizada.usuario.apellido} %20 %20 %20 %20 %20 %20 %20 %20 %20 %20 %20
                Telefono: ${ordenRealizada.usuario.telefono} %20 %20 %20 %20 %20
                Zona: ${ordenRealizada.usuario.zona} %20  %20 %20
                Direccion: ${ordenRealizada.usuario.direccion} %20 %20 %20 %20 %20 %20
                Productos: ${productosMensaje} %20 %20 %20 %20 %20
                Total Compra con Envio: ${ordenRealizada.totalcompra}`;
        return(
            <>
                <div className="OrdenContenedor">
                    <div className="OrdenDeEnvioContainer">
                        <div className="ordenDeEnvio__datos">
                            <div className="ordenDeEnvio__datos--control">
                                <h3>Orden de Compra N°</h3>
                                <span>{ordenId}</span>
                            </div>
                            <div>
                                <span>Fecha: {formatDate(ordenRealizada.fecha)}</span>
                            </div>
                        </div>
                        <div className="ordenDeEnvio__modalidad">
                            <h4>Modalidad: {ordenRealizada.modalidad}</h4>
                        </div>
                        <div className="ordenDeEnvio__cliente">
                            <p>Cliente: <span>{ordenRealizada.usuario.nombre} {ordenRealizada.usuario.apellido}</span></p>
                            <p>Nro de Telefono: <span>{ordenRealizada.usuario.telefono}</span></p>
                            <p>Email: <span>{ordenRealizada.usuario.email}</span></p>
                            <p>Nro de DNI: <span>{ordenRealizada.usuario.documento}</span></p>
                            <p>Zona de Entrega: <span>{ordenRealizada.usuario.zona}</span> </p>
                            <p>Direccion: <span>{ordenRealizada.usuario.direccion}</span></p>
                        </div>
                        <div className="ordenDeEnvio__productos">
                            <h4>Productos Comprados</h4>
                            <ul>
                                <li className="ordenDeEnvio__indice">
                                    <span>Nombre</span>
                                    <span>Precio</span>
                                    <span>Cantidad</span>
                                </li>
                            {ordenRealizada.productos.map((item) => {
                                return(
                                    <li>
                                        <span>{item.item.nombre}</span>
                                        <span>{item.item.precioOferta} x {item.item.medida}</span>
                                        <span>{item.cantidad} {item.item.medida}</span>
                                    </li>
                                )
                            })}
                            </ul>
                        </div>
                        <div className="ordenDeEnvio__total">
                            <p>Total a Pagar con Envio: <span>$ {ordenRealizada.totalcompra}</span></p>
                        </div>
                        <a className="linkWhatsApp" target="_blank" href={`https://wa.me/541125624982?text=${mensaje}`}>Ir a WhatsApp <i className="fab fa-whatsapp"></i></a>
                    </div>
                    <p className="notificacionWhatsApp">Para un mejor seguimiento de tu pedido, te invitamos a hacernos llegar la orden haciendo click en el link a WhatsApp donde nos comunicaremos contigo ante cualquier circunstancia!</p>
                    <button className="botonTerminarCompra" onClick={(e)=> terminarCompra(e)}>Terminar Compra</button>
                </div>
            </>
    )
}

export default OrdendeEnvio;