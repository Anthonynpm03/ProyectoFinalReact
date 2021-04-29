import './App.scss';
import firebase from 'firebase';
require('firebase/auth');
import getFirestore from '../config/firebase';
import {Switch, BrowserRouter, Route, Redirect} from 'react-router-dom';
import {useEffect, useState} from 'react';
import CartContext from './context/CartContext';
import NavBar from './components/navBar/NavBar';
import SlidesShow from './components/slidesShow/SlidesShow';
import CategoryListContainer from './components/categoryListContainer/CategoryListContainer';
import ItemsListContainer from './components/itemListContainer/ItemListContainer';
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer';
import Cart from './components/cart/Cart';
import Footer from './components/footer/Footer';
import Nosotros from './components/nosotros/Nosotros';


const App = () =>{
    const categorias = ["quesos", "fiambres", "picadas", "vinos", "gourmet"];
    const zonas = [
        {zona: "caballito", costo: 200},
        {zona: "flores", costo: 180},
        {zona: "floresta", costo: 220},
        {zona: "villadelparque", costo: 180},
        {zona: "paternal", costo: 150}
    ];
    const [itemsEnCarrito, setItemsEnCarrito] = useState([]);
    const [articulosTotales, setArticulosTotales] = useState(0);
    const [costoEnvio, setCostoEnvio] = useState(0);
    const [mostrarFinalizar, setMostrarFinalizar] = useState(false);
    const [mostrarGracias, setMostrarGracias] = useState(false);
    const [ordenId, setOrdenId] = useState();

    useEffect(()=> {
        setTimeout(()=>{
            setLocalStorage(JSON.stringify(itemsEnCarrito), articulosTotales)
        });
    }, [itemsEnCarrito]);

    const setLocalStorage = (items, cantidad) => {
         localStorage.removeItem("cantidad");
         window.localStorage.setItem("items", items);
         window.localStorage.setItem("cantidad", cantidad);
    };

    const addItem = (item, cantidad) =>{
        setItemsEnCarrito([...itemsEnCarrito, {item,cantidad}]);
        setArticulosTotales(articulosTotales + cantidad);
        alert(`Haz agregado ${cantidad} unidades a tu carrito!`);
    }

    const removeItem =  (e, id, cantidad) =>{
        e.preventDefault();
        // CREAR UN NUEVO ARRAY CON LOS PRODUCTOS QUE NO TENGAN EL ID DEL PRODUCTO QUE SE QUIERE ELIMINAR
        setItemsEnCarrito(itemsEnCarrito.filter(item => item.item.id !== id));
        setArticulosTotales(articulosTotales - cantidad);
    }

    function calcularTotal (){
        let totalCompra = 0
        itemsEnCarrito.map((item => {
            totalCompra += (item.item.precioOferta * item.cantidad);
        }))
        return(totalCompra);
    }

    function calcularCostoEnvio (zona){
        zonas.map((x => {
            if(x.zona === zona){
                setCostoEnvio(x.costo);
            }
        }))
    }

    function createOrdenEnvio(user, modalidad){
        const newOrdenDeEnvio = {
            usuario: user,
            productos: itemsEnCarrito,
            totalcompra: calcularTotal() + costoEnvio,
            modalidad: modalidad,
            fecha: firebase.firestore.Timestamp.fromDate(new Date())
        }
        console.log(newOrdenDeEnvio);
        const db = getFirestore();
        const orders = db.collection("ordenesDeEnvio");
        orders.add(newOrdenDeEnvio)
        .then((resp) => {
            setOrdenId(resp.id);
        })
        .catch((error) => console.log(error));
        setTimeout(()=> {
            setMostrarFinalizar(true);
        }, 2000);
    };

    function createOrdenRetiro(user, modalidad, localDondeRetirar){
        const newOrdenDeRetiro = {
            usuario: user,
            productos: itemsEnCarrito,
            totalcompra: calcularTotal() + costoEnvio,
            modalidad: modalidad,
            localDeRetiro: localDondeRetirar,
            fecha: firebase.firestore.Timestamp.fromDate(new Date())
        }
        const db = getFirestore();
        const orders = db.collection("ordenesDeRetiro");
        orders.add(newOrdenDeRetiro)
        .then((resp) => {
            setOrdenId(resp.id);
        })
        .catch((error) => console.log(error));
        setTimeout(()=> {
            setMostrarFinalizar(true);
        }, 1000);
    }

    function ocultarGraciasTime(){
        setTimeout(()=> {
            setMostrarGracias(false);
        }, 10000)
    }

    function ocultarGracias(){
        setMostrarGracias(false);
    }

    function terminarCompra(e){
        e.preventDefault();
        setItemsEnCarrito([]);
        setArticulosTotales(0);
        setCostoEnvio(0);
        setMostrarFinalizar(false);
        setMostrarGracias(true);
        ocultarGraciasTime();
        localStorage.clear();
    }
        return(
                <>
                    <CartContext.Provider value={{itemsEnCarrito, setItemsEnCarrito, addItem, removeItem, articulosTotales, setArticulosTotales, calcularTotal, costoEnvio, setCostoEnvio, calcularCostoEnvio, createOrdenEnvio, createOrdenRetiro, mostrarFinalizar, ordenId, terminarCompra, mostrarGracias, ocultarGracias}}>
                        <BrowserRouter>
                            <NavBar/>
                            <Switch>
                                <Route path="/detalle-del-producto/:id">
                                    <ItemDetailContainer/>
                                </Route>
                                <Route path="/nosotros/">
                                    <Nosotros/>
                                </Route>
                                <Route path="/productos/:category">
                                    <ItemsListContainer/>
                                </Route>
                                <Route exact path="/productos/">
                                    <ItemsListContainer/>
                                </Route>
                                <Route path="/Cart/">
                                    <Cart/>
                                </Route>
                                <Route exact path="/">
                                    <SlidesShow/>
                                    <CategoryListContainer categorias={categorias}/>
                                </Route>
                            </Switch>
                            <Footer/>
                        </BrowserRouter>
                    </CartContext.Provider>
                </>
        )
}

export default App;