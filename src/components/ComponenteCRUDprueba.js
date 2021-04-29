import { useState } from 'react';
import getFirestore from '../../config/firebase';
import firebase from 'firebase';
require('firebase/auth');

const ComponenteCRUDprueba = () => {
     const [db, setDb] = useState(getFirestore());
     const [lastId, setLastId] = useState();

     function create(){
         // EJEMPLO DE LOS DATOS DE UNA ORDEN.
         const newOrder = {
             user: {id: 1, nombre: "Anthony", email: "Anthonynpm03@gmail.com"},
             products: [
                 {productid: 1, quantity: 3, price: 100},
                 {productid: 2, quantity: 7, price: 100},
             ],
             createDate: firebase.firestore.Timestamp.fromDate(new Date()),
             total: 2000,
         };
        
         // CONECTAMOS CON LA CONEXCION DE DATOS, SI ESTA NO EXISTE SERA CREADA AUTOMATICAMENTE.
         const orders = db.collection("orders");

        // AÑADIMOS EL OBJETO CREADO A LA COLLECTION CREADA
         orders.add(newOrder)
         //HACEMOS LA PROMESA PARA OBTENER EL DATO RECIEN CREADO CON EL IR AUTOMATICO GENERADO POR FIREBASE
         .then((resp) => {
             console.log(resp);
             console.log(resp.id)
             setLastId(resp.id);
         });
     }

     function update(){
         //HACEMOS LA CONEXION CON LA COLLECTION DESEADA LLAMANDO A LAS DOCUMENTOS Y PASAMOS COMO PARAMETRO EL ID DEL DOCUMENTO AL CUAL QUEREMOS ACCEDER.
         const orders = db.collection("orders").doc(document.getElementById("idDoc").value);

         const updateObject = {total: 1000};
         orders.update(updateObject);
     }

     function removeById(){
        //HACEMOS LA CONEXION CON LA COLLECTION DESEADA LLAMANDO A LAS DOCUMENTOS Y PASAMOS COMO PARAMETRO EL ID DEL DOCUMENTO AL CUAL QUEREMOS ACCEDER.
        const orders = db.collection("orders").doc(document.getElementById("idDoc").value);

        orders.delete();
    }

    function getByFilter(){
        const products = db.collection("productosPrueba").where("precio", ">", 499);

        products.get().then((resp) => {
            if(resp.size > 0){
                resp.docs.map((producto =>{
                    console.log({id: producto.id, ...producto.data()})
                }))
            }
        })
    }

    function getById(){
        const product = db.collection("productosPrueba").doc("APw2FoPnfG72GHPG2yqY");
        product.get().then((resp)=>{
            console.log(resp.data());
        })
        
    }

    return(
        <>
                <div>
                    Last id:<input id="idDoc" type="text" value={lastId}></input>
                    <br></br>
                    <button>Get All</button>
                    <button onClick={getByFilter}>Get by filter</button>
                    <button onClick={getById}>Get by id</button>
                    <br></br>
                    <button onClick={create}>Crate</button>
                    <button onClick={update}>Update</button>
                    <button onClick={removeById}>Remove</button>
                </div>
        </>
    )
}

export default ComponenteCRUDprueba;