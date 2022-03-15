import { useState } from "react"


const Main1 =(props) =>{
const [contador,setContador] =useState(0)



const aumentar=()=>{
    
    setContador(contador+1)
}

const restar=()=>{
    setContador(contador-1)
}

const resetear=()=>{
    setContador(contador-contador)
}

return(
    <main inicial={1}  className="container">
        <h2>Bienvenido</h2>
        <p>Mi cantidad inicial es</p>
        <p>Mi contador actua es {contador}</p>
        <button onClick={aumentar}>Aumentar</button>
        <button onClick={resetear}>resetear</button>
        <button onClick={restar}>Restar</button>
       </main>
    );

    
}


export default Main1;