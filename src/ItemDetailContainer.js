
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import array_productos from "./Array_productos"
import Array_Productos from "./Array_productos"
import ItemDetail from "./ItemDetail"

const productos=Array_Productos





const ItemDetailContainer = (props) => {
  let array_individual=[]
    const{id}=useParams()
    console.log(id)
       
    for (let i=0;i<array_productos.length;i++){
        if(array_productos[i].id==id){
            array_individual={Id:Array_Productos[i].id, 
                nombre:Array_Productos[i].nombre,
                precio: Array_Productos[i].precio,
                imagen: Array_Productos[i].imagen
            }
        break
        }
    }
       
    
    const [loading, setLoading] = useState(true)

    const [producto_individual, setProductoIndividual] = useState([])

    useEffect(()=>{
        const promesa = new Promise((res,rej)=>{
            setTimeout(()=>{
                console.log("id gggg"+id)
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