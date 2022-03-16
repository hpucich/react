import { useState  } from "react"
 
const Contador = ( {stock,initial,onAdd}) => {
    
    const [contador, setContador]=useState(initial)
    
    let [dark,setDark] = useState(false)

    const handleAumentar=(e)=>{
        if (contador<stock){

            setContador(contador+1)
        }
    }

    const handleDisminuir=(e)=>{
        if (contador>initial){

            setContador(contador-1)
        }
    }
    
    const handleConfirmar=(e)=>{
        console.log(e)
        onAdd(contador)
    }

    
    return (
        <div>
            <h1>Contador</h1>
            <p>Mi contador Actual va : {contador}</p>
            <button onClick={handleAumentar}>aumentar</button>
            <button onClick={handleConfirmar}>Confirmar Pedido</button>
            <button onClick={handleDisminuir}>disminuir</button>
        </div>
    )
}
export default Contador