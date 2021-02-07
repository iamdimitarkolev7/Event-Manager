import React from "react";
import "./Footer.css";
import {Link} from "react-router-dom";
import logo from "../../../images/logo.png";

const Footer = () => {
    return (
        <Footer className="Footer">
            <Link to="/" className="logo">
                <img src={logo} alt="alt"/>
                <p>EVENT-M</p>
            </Link>
        </Footer>
    )
}

export default Footer;