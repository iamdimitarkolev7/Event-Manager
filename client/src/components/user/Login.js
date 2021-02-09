import React from "react";

import "../../shared/styles.css";

class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: ''
        }

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    onChangeUsername(e) {
        this.setState({username: e.target.value});
    }

    onChangePassword(e) {
        this.setState({password: e.target.value});
    }

    handleSubmit(e) {
        e.preventDefault();
        const {username, password} = this.state;

        this.props.login({username, password}, this.props.history);
    }

    render() {
        const {username, password} = this.state;

        return (
            <form className="Login" onSubmit={this.handleSubmit}>
                <h2 className="title">Sign Up</h2>
                <div className="input">
                    <input
                        type="text"
                        name="username"
                        placeholder="Username"
                        onChange={this.onChangeUsername}
                        value={username}
                    />
                </div>
                <div className="input">
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        onChange={this.onChangePassword}
                        value={password}
                    />
                </div>
                <button type="submit" className="btn">SIGN UP</button>
            </form>
        )
    }
}
export default Login;