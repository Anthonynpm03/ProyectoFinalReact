import CategoryList from '../categoryList/CategoryList';

const CategoryListContainer = ({categorias}) =>{
        return(
        <>
            <div className="categoryListContainer">
                <h1>Categorias</h1>
                <CategoryList categorias={categorias}/>
            </div>
        </>
        );
}


    export default CategoryListContainer;