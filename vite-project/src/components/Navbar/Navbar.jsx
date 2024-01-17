import "./Navbar.css"
import logo from "../../assets/ironhack-logo-xs.png"
import menu from "../../assets/menu-top-xs.png"
const Navbar = () => {
    return (
        <nav>
            <div className="nav-img">
                <img href={logo} />
            </div>
            <div className="nav-img">
                <img href={menu} />
            </div>
        </nav>
    )
}

export default Navbar;