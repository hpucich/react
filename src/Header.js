import { Link } from "react-router-dom"
import NavBar from "./NavBar"
import logo from "./imagenes/logoprofesoftIIsinfondo.png"

function Header(){
    return (
    <header id='main-header'>
     <Link to="/">
        <img src={logo} alt='logo' id='logo' />
     </Link>   
        <NavBar/>
    </header>
    )
}
export default Header