import { Link } from "react-router-dom"

const Item=({producto}) =>{

    return(
        <article>
            <h2>{producto.nombre}</h2>
            <p>{producto.precio}</p>
            <img src={"../imagenes/"+producto.imagen} id="logo"/>
        <button>
            <Link to={`/productos/${producto.id}`}>ver detalle</Link>

        </button>

        </article>
    )

}


export default Item