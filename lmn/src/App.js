import React from 'react';

//------IMPORTING ROUTER-------
import { BrowserRouter as Router, Route } from "react-router-dom";

//------IMPORTING ROUTER-------

//------IMPORTING COMPONENTS START-------
import Navbar from "./components/Navbar";
//------IMPORTING COMPONENTS END-------

//-------IMPORTING PAGES-------
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Title from "./pages/Title";
import Me from "./pages/Me";
import Discover from "./pages/Discover";
import Populate from "./pages/Populate";
// import Forum from "./pages/Forum";


//-------IMPORTING PAGES-------

function App() {
  return (

    <Router basename={ process.env.PUBLIC_URL }>
      <div>
        <Navbar/>
        <Route exact path='/' component={Title} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/me" component={Me} />
        <Route exact path="/discover" component={Discover} />
        <Route exact path="/populate" component={Populate} />
        {/* <Route exact path={process.env.PUBLIC_URL + "/forum"} component={Forum} /> */}

      </div>
    </Router>

  );
}

export default App;
