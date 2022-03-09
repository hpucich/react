import { useState } from "react"
const StockInicial=10 //numero
const Stock=0 //numero

const ItemCount =(props) =>{
    
    const [contador,setContador] =useState(0)
    const [stock,setStock] =useState(Stock)
    

        const aumentar=()=>{
           if (StockInicial-stock>0) { 
                setContador(contador+1)
                setStock(stock+1)
            }
        }
        
        const restar=()=>{
            if (contador>0) { 
                setContador(contador-1)
                setStock(stock-1)
            }    
        }
        
        
        
        return(
            <main inicial={1}  className="container">
                <h2>Bienvenido</h2>
                <p>Mi Stock al inicio {StockInicial}</p>
                <button onClick={restar}>-</button>
                <span>{contador}</span>
                <button onClick={aumentar}>+</button>
                <p>Stock al final {StockInicial-stock}</p>
               </main>
            );
        
            
        }
        
        
        export default ItemCount;    