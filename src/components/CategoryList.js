
const CategoryList = (props) => {

    return(
        <>
            <div id="categoryList" className="categoryList">
                {props.categorias.map((x, index)=>
                {if (x != "picadas") {
                  return  <div key={index} id={x} className="categoryCard"><button><h2 key={index}>{x.toUpperCase()}</h2></button></div>
                }
                else {
                   return <div key={index} id={x} className="categoryCard__Center"><button><h2 key={index}>{x.toUpperCase()}</h2></button></div>
                }
            }
            )}
            </div>
        </>
    )
}

export default CategoryList;