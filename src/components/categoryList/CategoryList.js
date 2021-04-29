import {NavLink,} from 'react-router-dom';
import CategoryCard from '../categoryCard/CategoryCard';

const CategoryList = ({categorias}) => {

    return(
        <>
            <ul id="categoryList" className="categoryList">
                {categorias.map((x, index)=>{
                     return(
                        <CategoryCard key={index} category={x}/>
                     )
                }
            )}
            </ul>
            <NavLink to={`/productos`}><h3>Ver todos los productos</h3></NavLink>

        </>
    )
}

export default CategoryList;