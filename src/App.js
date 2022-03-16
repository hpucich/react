import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import {BrowserRouter} from "react-router-dom"
import {ToastContainer} from "react-toastify"
//import Main1 from "./Main1";
//import ItemCount from "./ItemCount";
//import ItemListContainer from "./ItemListContainer2";

function App() {
   
    return (
        <BrowserRouter>
            <Header/>
            <Main nombre="Hernan" apellido="Pucich"/>

          
            <Footer/>
            <ToastContainer/>
        </BrowserRouter>
    )

    /*    
    return (
        <>
            <Header/>
            <ItemListContainer/>
            <Main 
                nombre='Hernan'
                apellido='pucich' 
                edad={edad}
                onAdd={miOnAdd}
                usuarios={usuarios}
                initial={1}
            </Main>     
         
            <Footer/>

        </>

    )
*/
}

export default App

/* https://github.com/HoracioGutierrez/comision_25470
/* https://reactrouter.com/docs/en/v6/api
/* https://tympanus.net/Development/CreativeLinkEffects/



/*
<Main 
                nombre='Hernan'
                apellido='pucich' 
                edad={edad}
                usuarios={usuarios}/>
            <Main 
                nombre='Hernan'
                apellido='pucich' 
                edad={edad}
                usuarios={usuarios}>

                <p>Hola Mundo</p>
                <p>Hola Mundo 2</p>        
            
                </Main>
                */