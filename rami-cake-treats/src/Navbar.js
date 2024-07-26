import React from "react";
import { NavLink } from "react-router-dom";
import cake from './images/image.png';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav>
            <img src={cake} className="nav--icon" alt="cake icon"/>
            <h3 className="nav--logo_text">Rami Cake Treats</h3>
            <nav className="nav-items">
                <NavLink exact to="/" className="nav--links" activeClassName="active">
                    <span>Home</span>
                </NavLink>
                <NavLink to="/menu" className="nav--links" activeClassName="active">
                    Menu
                </NavLink>
                <NavLink to="/about" className="nav--links" activeClassName="active">
                    About
                </NavLink>
                <NavLink to="/contact" className="nav--links" activeClassName="active">
                    Contact
                </NavLink>
                <NavLink to="/login" className="nav--links" activeClassName="active">
                    Login
                </NavLink>
            </nav>
            {/* <h4 className="nav--title">React Course - Project 1</h4> */}
        </nav>
    );
}

export default Navbar;
