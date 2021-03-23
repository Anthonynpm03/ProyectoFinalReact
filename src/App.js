import './App.scss'
import { useEffect, useState } from 'react';
import NavBar from './components/NavBar';
import SlidesShow from './components/SlidesShow';
import CategoryListContainer from './components/CategoryListContainer';



const App = () =>{
    const [categorias, setCategorias] = useState([]);

    useEffect(() => {
        new Promise((todoBien, todoMal) => {
            setTimeout(() => {
                todoBien(["quesos", "fiambres", "picadas", "vinos", "gourmet"]);
            }, 3000);
        }).then((resultado) => setCategorias(resultado));
        });

        return(
            <>
            <NavBar opcion1="Inicio" opcion2= "Productos" opcion3="Nosotros" opcion4="Contacto" />;
            <SlidesShow/>
            <CategoryListContainer categorias={categorias}/>
        </>
        )
        
}



export default App;