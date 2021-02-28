import React from "react";
import {Switch, Route} from "react-router-dom";
import './App.css';

import Navigation from "./components/common/navigation/Navigation";
import Home from "./components/common/home/Home";
import Register from "./components/user/Register";
import Login from "./components/user/Login";
import userService from "./services/user-services";
import Logout from "./components/user/Logout";
import Create from "./components/events/create/Create";
import NotFound from "./components/common/notFound/NotFound";
import Edit from "./components/events/edit/Edit";
import Profile from "./components/user/profile/Profile";
import Details from "./components/events/details/Details";
import isLoggedIn from "./utils/auth";

function renderCmp(Cmp, otherProps) {
    return function (props) {
        return <Cmp {...props} {...otherProps}/>
    }
}

class App extends React.Component {
    constructor(props) {
        super(props);
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
                    <Route path="/" exact component={renderCmp(Home, {isLoggedIn})}/>
                    {!isLoggedIn && <Route path="/register" component={renderCmp(Register, {register: this.register})}/>}
                    {!isLoggedIn && <Route path="/login" component={renderCmp(Login, {login: this.login})}/>}
                    {isLoggedIn && <Route path="/logout" component={renderCmp(Logout, {logout: this.logout})}/>}
                    {isLoggedIn && <Route path="/create" component={Create}/>}
                    {isLoggedIn && <Route path="/details/:id" component={renderCmp(Details)}/>}
                    {isLoggedIn && <Route path="/edit/:id" component={renderCmp(Edit)}/> }
                    {isLoggedIn && <Route path="/profile" component={renderCmp(Profile)}/>}
                    <Route path="*" component={NotFound}/>
                </Switch>
            </div>
        );
    }
}

export default App;
