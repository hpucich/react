import NavBar from "./NavBar"
import logo from "./imagenes/logoprofesoftIIsinfondo.png"

function Header(){
    return (
    <header id='main-header'>
     
     <img src={logo} alt='logo' id='logo' />
        
        <NavBar/>
    </header>
    )
}
export default Header