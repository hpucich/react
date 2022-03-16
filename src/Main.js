import { Route, Routes } from "react-router-dom";
import { toast } from "react-toastify";
//import Contador from "./Contador";
import ItemListContainer from "./ItemListContainer"
import ItemDetailContainer from "./ItemDetailContainer";
import Main1 from "./Main1"

const Main = (props) => {

return(
<main>
    <Routes>
      <Route path="/" element={<ItemListContainer/>}/>
      <Route path="/productos/:id" element={<ItemDetailContainer/>}/>
    </Routes>
    
</main>
    
);


}


export default Main;


//<Contador/>

/*<main>
    <Routes>
        <Route path="/" element={<ItemListContainer/>}/>
        <Route path="/tipo:id" element={<ItemListContainer/>}/>
        <Route path="/carrito" element={<Carrito/>}/>
        <Route path="/vinos/:id" element={<ItemList/>}/>

    </Routes>
    
      
</main>*/
