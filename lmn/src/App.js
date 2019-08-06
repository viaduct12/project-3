import React from 'react';

//------IMPORTING ROUTER-------
import { BrowserRouter as Router, Route } from "react-router-dom";

//------IMPORTING ROUTER-------

//-------IMPORTING PAGES-------
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import Title from "./pages/Title/Title";
import Me from "./pages/Me/Me";
import Discover from "./pages/Discover/Discover";
import Populate from "./pages/Populate/Populate";
import Forum from "./pages/Forum";


//-------IMPORTING PAGES-------

function App() {
  return (

    <Router>
      <div>

        <Route exact path="/" component={Title} />
        <Route exact path="/Login" component={Login} />
        <Route exact path="/SignUp" component={SignUp} />
        <Route exact path="/Me" component={Me} />
        <Route exact path="/Discover" component={Discover} />
        <Route exact path="/Populate" component={Populate} />
        <Route exact path="/Forum" component={Forum} />

      </div>

    </Router>
  );
}

export default App;
