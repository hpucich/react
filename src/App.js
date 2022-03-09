import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import Main1 from "./Main1";
import ItemListContainer from "./ItemListContainer";

function App() {
    const edad=56 //numero
    const usuarios=["Juan", "Pedro","Maria"] //array
    const miOnAdd = () => {} //funcion
    return (
        <>
            <Header/>
            <ItemListContainer/>
            <Main 
            nombre='Hernan'
            apellido='pucich' 
            onAdd={miOnAdd} 
            edad={edad} 
            usuarios={usuarios} 
            initial={1}>
                <p>Hola Mundo</p>
                <p>Hola Mundo Dos</p>
            </Main>
            <Main1>
                
            </Main1>
            <Footer/>
        </>
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
