import React from "react";
import logo from "../../../images/logo.png";

import "./Navigation.css";

const Navigation = () => {
    return (
        <nav className="Navigation">
            <div className="logo">
                <img src={logo} alt="alt"/>
                <p>EVENT-M</p>
            </div>
            <ul>
                <li className="links">Register</li>
                <li className="links">Login</li>
            </ul>
        </nav>
    )
}

export default Navigation;