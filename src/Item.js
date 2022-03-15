
const Item=({producto}) =>{

    return(
        <article>
            <h2>{producto.nombre}</h2>
            <p>{producto.precio}</p>
            <img src={"./imagenes/"+producto.imagen} id="logo"/>

        </article>
    )

}


export default Item