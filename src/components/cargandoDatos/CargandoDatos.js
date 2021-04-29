const CargandoDatos = ({texto}) => {
    return(
        <>
            <div className="spinnerContainer">
                <p>{texto}</p>
                <div className="spinner"></div>
            </div>
        </>
    )
}

export default CargandoDatos;