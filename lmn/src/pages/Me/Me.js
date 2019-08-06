import React from "react";
import './style.css';
class Me extends React.Component {


    render() {
        return (
            <div id="containerMe">

         <div id="leftBlock">
            <h1>Profile</h1>
            <br/>
            <h2>Hello John</h2>

            <div id="userInfoBlock">
                <h1>info block</h1>
            </div>
         </div>

         <div id="rightBlock">
            <h1>Favorites</h1>

            <div id="populatedBlock">
                <h1>populated block</h1>
            </div>
         </div>
         
            </div>
        );
    }
}

export default Me; 