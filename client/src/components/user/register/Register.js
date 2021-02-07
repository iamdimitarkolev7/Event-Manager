import React from "react";

import "./Register.css";

const Register = () => {
    return (
        <form className="Register">
            <h2 className="title">Sign In</h2>
            <div className="input">
                <span>First Name</span>
                <input type="text" name="firstName"/>
            </div>
            <div className="input">
                <span>Last Name</span>
                <input type="text" name="lastName"/>
            </div>
            <div className="input">
                <span>Username</span>
                <input type="text" name="username"/>
            </div>
            <div className="input">
                <span>Password</span>
                <input type="password" name="password"/>
            </div>
            <div className="input">
                <span>Repeat Password</span>
                <input type="password" name="rePassword"/>
            </div>
            <input type="submit" className="btn" value="Sign In"/>
        </form>
    )
}

export default Register;