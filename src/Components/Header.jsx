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
            {/* PC NAVBAR */}

            <NavLink to="/about" className="nav-links-pc" >About</NavLink>
            <div className="logo">
                <Link to="/" className="logo">Project</Link>
            </div>
            <NavLink to="/cart" className="nav-links-pc" >Cart</NavLink>


            {/* PHONE NAVBAR */}

            <div className="phone">
                <div className="hamburger" onClick={handleClick}>
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </div>
                <nav className={activeMenu}>
                    <ul>
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
            </div>

        </header >
    )
}