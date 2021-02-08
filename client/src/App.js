import React from "react";
import {Switch, Route} from "react-router-dom";
import './App.css';

import Navigation from "./components/common/navigation/Navigation";
import Home from "./components/common/home/Home";
import Register from "./components/user/register/Register";
import Login from "./components/user/login/Login";
import cookieParser from "./utils/cookies";
import userService from "./services/user-services";
import Logout from "./components/user/Logout";

function renderCmp(Cmp, otherProps) {
    return function (props) {
        return <Cmp {...props} {...otherProps}/>
    }
}

class App extends React.Component {
    constructor(props) {
        super(props);
        const cookies = cookieParser();
        const isLoggedIn = !!cookies['x-auth-token'];
        this.state = { isLoggedIn };
    }

    register = (data, history) => {
        userService.register(data).then(() => {
            this.setState({isLoggedIn: true});
            history.push('/');
        })
    }

    logout = (history) => {
        userService.logout().then(() => {
            this.setState({isLoggedIn: false});
            history.push('/');
            return null;
        });
    }

    login = (data, history) => {
        userService.login(data).then(() => {
            this.setState({isLoggedIn: true});
            history.push('/');
        })
    }

    render() {
        const { isLoggedIn } = this.state;

        return (
            <div className="App">
                <Navigation isLoggedIn={isLoggedIn} logout={this.logout}/>
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/register" component={renderCmp(Register, {register: this.register})}/>
                    <Route path="/login" component={renderCmp(Login, {login: this.login})}/>
                    <Route path="/logout" component={renderCmp(Logout, {logout: this.logout})}/>
                </Switch>
            </div>
        );
    }
}

export default App;
