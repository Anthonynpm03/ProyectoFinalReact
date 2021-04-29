import {NavLink,} from 'react-router-dom';
const CategoryCard = ({category}) => {

    {if (category != "picadas") {
        return(
          <NavLink id={category} className="categoryCard" to={`/productos/${category}`}><li  ><h2>{category.toUpperCase()}</h2></li></NavLink>
        )
      }
      else {
         return(
           <NavLink id={category} className="categoryCard__Center" to={`/productos/${category}`}><li><h2>{category.toUpperCase()}</h2></li></NavLink>
         )
      }
  }
}

export default CategoryCard;