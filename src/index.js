//1) Tener la var REact en el scope hay que carga react antes que todo
import React from "react";
// traer algo de otro archivo para utilizar si no das la raiz del archivo se trae del node_modules
//2) tener la var ReactDom eb ek scope
import ReactDOM from "react-dom";

//3) Tener un componente de React
//function App(){
//    return <h1>Hola Mundo en JSX</h1>
//}
import App from "./App"
import 'bootstrap/dist/css/bootstrap.css';
import "./estilos.css"

//./es la misma carpeta
//.. subi una carpeta dentro
//4) Renderizar App en el DOM
ReactDOM.render(App(),document.getElementById('root'))
