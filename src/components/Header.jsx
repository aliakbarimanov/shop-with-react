// import NavLink
import { NavLink, useNavigate } from "react-router-dom";

// import useState
import { useState } from "react";

// import Cart Icon
import { FaCartShopping } from "react-icons/fa6";

// import CartCard
import CartCard from "../pages/CartCard";

const Header = () => {

    const navigate = useNavigate();
    const [open, setOpen] = useState(false);

    return (
        <header className="header">
            <div className="logo" onClick={() => navigate("/")}>LOGO</div>
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
            <div className="cart">
                <ul className={`cartList ${open && "active"}`}>
                    <CartCard/>
                </ul>
                <div className="cartIcon">
                    <FaCartShopping onClick={()=>setOpen(!open)}/>
                </div>
            </div>
        </header>
    )
}

export default Header;