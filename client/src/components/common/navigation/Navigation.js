import React from "react";
import {Link} from "react-router-dom";
import logo from "../../../images/logo.png";

import "./Navigation.css";

const Navigation = () => {
    return (
        <nav className="Navigation">
            <Link to="/" className="logo">
                <img src={logo} alt="alt"/>
                <p>EVENT-M</p>
            </Link>
            <ul>
                <Link to="/register" className="links">Register</Link>
                <Link to="/login" className="links">Login</Link>
            </ul>
        </nav>
    )
}

export default Navigation;