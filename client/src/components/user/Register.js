import React from "react";

import "../../shared/styles.css";

class Register extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName: '',
            lastName: '',
            username: '',
            password: '',
            rePassword: ''
        }

        this.onChangeFirstName = this.onChangeFirstName.bind(this);
        this.onChangeLastName = this.onChangeLastName.bind(this);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangeRePassword = this.onChangeRePassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    onChangeFirstName(e) {
        this.setState({firstName: e.target.value});
    }

    onChangeLastName(e) {
        this.setState({lastName: e.target.value});
    }

    onChangeUsername(e) {
        this.setState({username: e.target.value});
    }

    onChangePassword(e) {
        this.setState({password: e.target.value});
    }

    onChangeRePassword(e) {
        this.setState({rePassword: e.target.value});
    }

    handleSubmit(e) {
        e.preventDefault();
        const {firstName, lastName, username, password, rePassword} = this.state;

        this.props.register({firstName, lastName, username, password}, this.props.history);
    }

    render() {
        const {firstName, lastName, username, password, rePassword} = this.state;

        return (
            <form className="Register" onSubmit={this.handleSubmit}>
                <p className="title">Sign In</p>
                <div className="input">
                    <input
                        type="text"
                        name="firstName"
                        placeholder="First Name"
                        onChange={this.onChangeFirstName}
                        value={firstName}
                    />
                </div>
                <div className="input">
                    <input
                        type="text"
                        name="lastName"
                        placeholder="Last Name"
                        onChange={this.onChangeLastName}
                        value={lastName}
                    />
                </div>
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
                <div className="input">
                    <input
                        type="password"
                        name="rePassword"
                        placeholder="Repeat Password"
                        onChange={this.onChangeRePassword}
                        value={rePassword}
                    />
                </div>
                <button type="submit" className="btn">SIGN IN</button>
            </form>
        )
    }
}

export default Register;