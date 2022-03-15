

    
const ItemDetail = ({producto_individual}) => {
    return  (
     
            <article>
                <h2>{producto_individual.nombre}</h2>
                <p>{producto_individual.precio}</p>
                <img src={"./imagenes/"+producto_individual.imagen} id="logo"/>
    
            </article>
        )
    
    }
        export default ItemDetail

