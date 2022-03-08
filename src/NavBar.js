import CartWidget from "./CartWigget";
const NavBar =() => {
    return (
        <nav>
            <CartWidget/>
            <a href="#" className="btn btn-primary letra_chica">Tienda</a>
            <a href="#" className="btn btn-primary letra_chica">Artículos</a>
            <a href="#" className="btn btn-primary letra_chica">Ofertas</a>
        </nav>
    )
};
export default NavBar
