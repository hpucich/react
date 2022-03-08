import { useState, useEffect } from "react"
import Item from "./Item"
let array_productos = [
    {
        id: 1,
        nombre: "Vino Tinto",
        precio: 100,
        imagen:"descarga1.jpg"
    },
    {
        id: 2,
        nombre: "Vino Blanco",
        precio: 200,
        imagen:"descarga2.jpg"
    },
    {
        id: 3,
        nombre: "Vino Rosado",
        precio: 300,
        imagen:"descarga3.jpg"
    }
]

const ItemList = (props) => {
    const [loading, setLoading] = useState(true)
    const [productos, setProductos] = useState([])

    useEffect(()=>{
        const promesa = new Promise((res,rej)=>{
            setTimeout(()=>{
                res(array_productos)
            },3000)
        })

        promesa
        .then((respuestaDeLaApi)=>{
            setProductos(array_productos)
        })
        .catch((errorDeLaApi)=>{
            console.log(errorDeLaApi)
            //setError("Hubo un error al cargar los datos, vuelva a intentarlo por favor... o no")
        })
        .finally(()=>{
            setLoading(false)
        })
        
        
        

    })

    console.log(productos)

    return (
        <main className="container">
            <p>{loading ? "Cargando..." : "Proceso Realizado Exitosamente!!"}</p>
            <table>
                <tr>
                    <td>Código</td>
                    <td>Descripción</td>
                    <td>Precio</td>
                    <td>Imagen</td>
                </tr>
                {productos.map((producto,indice)=>{
                     const imagen=producto.imagen
                     return <tr><td>{producto.id}</td>
                     <td>{producto.nombre}</td>
                     <td>{producto.precio}</td>
                     <td><img src={"./imagenes/"+producto.imagen} id="logo"/></td>
                     <tr><Item/></tr>
                     </tr> 
                 
                })}
            </table>

        </main>
    );
}

export default ItemList;