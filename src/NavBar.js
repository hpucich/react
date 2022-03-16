import CartWidget from "./CartWigget";
import { Link, NavLink } from "react-router-dom";
const NavBar =() => {
    return (
        <nav>

            <CartWidget/>
            <NavLink to="/tipo/1" className="btn btn-primary letra_chica">Tinto</NavLink>
            <NavLink to="/tipo/2" className="btn btn-primary letra_chica">Blanco</NavLink>
            <NavLink to="/tipo/3" className="btn btn-primary letra_chica">Rosado</NavLink>
            <NavLink to="/Carrito" className="btn btn-primary letra_chica">ir al Carrito</NavLink>
        </nav>
    )
};
export default NavBar
