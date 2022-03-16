import Contador from "./Contador"

    
const ItemDetail = ({producto_individual}) => {
    console.table(producto_individual)
    return  (
     
            <article>
                <h2>{producto_individual.nombre}</h2>
                <p>{producto_individual.precio}</p>
                <img src={"./imagenes/"+producto_individual.imagen} id="logo"/>
                <Contador initial={1} stock={5} onAdd=""/>
            </article>
        )
    
    }
        export default ItemDetail

