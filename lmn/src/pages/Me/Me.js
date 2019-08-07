import React from "react";
import './style.css';
class Me extends React.Component {


    render() {
        return (
            <div id="containerMe">

         <div id="leftBlock">
            <h1>Hello ______ </h1>
            <br/>
            <br/>
            <br/>
            <div id="userInfoBlock">

                <p>username: </p>
                <p>email: </p>
                <br/>
                <br/>
                <br/>
                <br/>
                <p id="explore">Explore your favorites -> </p>
            </div>
            <br/>
            <br/>
    
         </div>

         <div id="rightBlock">
            <h1 id="titleFav">Favorites</h1>
            <br/>
            <br/>

            {/* -------------------ROW 1---------------- */}
            <div id="row1">
                <div class="column" id="row1L">
                    <h1>movements</h1>
                </div>
                    
                <div class="column" id="row1R">
                    <h1>tech</h1>
                </div>
            </div>
            {/* -------------------ROW 1---------------- */}

            {/* -------------------ROW 2---------------- */}
            <div id="row2">
                <div class="column" id="row2L">
                    <h1>politics</h1>
                </div>
                    
                <div class="column" id="row2R">
                    <h1>weeAbooo</h1>
                </div>
            </div>
            {/* -------------------ROW 2---------------- */}

         </div>
         
            </div>
        );
    }
}

export default Me; 