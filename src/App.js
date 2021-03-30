import './App.scss'
import {Switch, BrowserRouter, Route, NavLink,} from 'react-router-dom';
import { useEffect, useState } from 'react';
import NavBar from './components/NavBar';
import SlidesShow from './components/SlidesShow';
import CategoryListContainer from './components/CategoryListContainer';
import ItemsListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import PRODUCTOS from './components/Productos';



const App = () =>{
    const [categorias, setCategorias] = useState([]);

    useEffect(() => {
        new Promise((todoBien, todoMal) => {
            setTimeout(() => {
                todoBien(["quesos", "fiambres", "picadas", "vinos", "gourmet"]);
            }, 3000);
        }).then((resultado) => setCategorias(resultado));
        }, categorias);


        return(
        <>
            <BrowserRouter>
                <NavBar opcion1="Inicio" opcion2= "Productos" opcion3="Nosotros" opcion4="Contacto" />
                <SlidesShow/>
                <Switch>
                    <Route path="/itemDetail/:id">
                        <ItemDetailContainer productos={PRODUCTOS}/>
                    </Route>
                    <Route path="/ItemList/:category">
                        <ItemsListContainer productos={PRODUCTOS}/>
                    </Route>
                    <Route exact path="/ItemList">
                        <ItemsListContainer productos={PRODUCTOS}/>
                    </Route>
                    <Route exact path="/">
                        <CategoryListContainer categorias={categorias}/>
                    </Route>
                </Switch>

            </BrowserRouter>
        </>
        )
}



export default App;