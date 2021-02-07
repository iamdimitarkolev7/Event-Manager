import React from "react";

import "./Login.css";

const Login = () => {
    return (
        <form className="Register">
            <h2 className="title">Sign Up</h2>
            <div className="input">
                <span>Username</span>
                <input type="text" name="username"/>
            </div>
            <div className="input">
                <span>Password</span>
                <input type="password" name="password"/>
            </div>
            <input type="submit" className="btn" value="Sign In"/>
        </form>
    )
}

export default Login;