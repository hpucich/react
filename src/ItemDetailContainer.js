import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import Array_Productos from "./Array_productos"
import ItemDetail from "./ItemDetail"

const productos=Array_Productos


    let array_individual={Id:Array_Productos[0].id, 
        nombre:Array_Productos[0].nombre,
        precio: Array_Productos[0].precio,
        imagen: Array_Productos[0].imagen
    }


console.log(array_individual)



const ItemDetailContainer = (props) => {
    
    const [loading, setLoading] = useState(true)

    const [producto_individual, setProductoIndividual] = useState([])

    useEffect(()=>{
        const promesa = new Promise((res,rej)=>{
            setTimeout(()=>{
                res(array_individual)
            },3000)
        })

        promesa
        .then((respuestaDeLaApi)=>{
            setProductoIndividual(array_individual)
        })
        .catch((errorDeLaApi)=>{
            console.log(errorDeLaApi)
            //setError("Hubo un error al cargar los datos, vuelva a intentarlo por favor... o no")
        })
        .finally(()=>{
            setLoading(false)
        })
        
        
        

    })


    return (
        <>
            <p>{loading ? "Cargando..." : "Ya tenes el producto"}</p>
            <ItemDetail producto_individual={array_individual}/>
        </>
    )
}

export default ItemDetailContainer