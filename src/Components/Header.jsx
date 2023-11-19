import React from "react";
import { NavLink, Link } from "react-router-dom"

export default function Header() {
    const [activeMenu, setActiveMeu] = React.useState("nav-bar")

    function handleClick() {
        activeMenu === "nav-bar"
            ? setActiveMeu("nav-bar activeMenu")
            : setActiveMeu("nav-bar")
    }

    return (
        <header>
            <div className="logo">
                Project
            </div>
            <div className="hamburger" onClick={handleClick}>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>
            <nav className={activeMenu}>
                <ul>
                    <li>
                        <NavLink to="/" className="nav-links" onClick={handleClick}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" className="nav-links" onClick={handleClick}>About</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact" className="nav-links" onClick={handleClick}>Contact</NavLink>
                    </li>
                    <li>
                        <NavLink to="/cart" className="nav-links" onClick={handleClick}>Cart</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}