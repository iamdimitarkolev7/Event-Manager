import React from "react";
import {Switch, Route} from "react-router-dom";
import './App.css';

import Navigation from "./components/common/navigation/Navigation";
import Home from "./components/common/home/Home";
import Register from "./components/user/register/Register";
import Login from "./components/user/login/Login";
import Footer from "./components/common/footer/Footer";

const App = () => {
  return (
    <div className="App">
      <Navigation/>
      <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/register" component={Register}/>
          <Route path="/login" component={Login} />
      </Switch>
        <Footer/>
    </div>
  );
}

export default App;
