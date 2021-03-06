import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import Array_Productos from "./Array_productos"
import ItemList from "./ItemList"

const productos=Array_Productos

const ItemListContainer = (props) => {
    
    const [loading, setLoading] = useState(true)

    const [productos, setProductos] = useState([])

    useEffect(()=>{
        const promesa = new Promise((res,rej)=>{
            setTimeout(()=>{
                res(Array_Productos)
            },3000)
        })

        promesa
        .then((respuestaDeLaApi)=>{
            setProductos(Array_Productos)
        })
        .catch((errorDeLaApi)=>{
            console.log(errorDeLaApi)
            //setError("Hubo un error al cargar los datos, vuelva a intentarlo por favor... o no")
        })
        .finally(()=>{
            setLoading(false)
        })
        
        
        

    })

    console.log(Array_Productos)

    return (
        <>
            <p>{loading ? "Cargando..." : "Ya tenes los productos"}</p>
            <ItemList productos={Array_Productos}/>
        </>
    )
}

export default ItemListContainer