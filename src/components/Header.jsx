// import NavLink
import {NavLink} from "react-router-dom";

const Header = () => {
    return(
        <header className="header">
            <div className="logo">LOGO</div>
            <nav className="navBar">
                <ul className="navList">
                    <li className="navItem">
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li className="navItem">
                        <NavLink to="/shop">Shop</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;