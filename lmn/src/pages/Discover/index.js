import React from "react";
import './style.css';


class Discover extends React.Component {

    render() {
        return (
            <div id="containerMe">

         <div id="leftBlock">
            <h1>Hello ______ </h1>
            <br/>
            <br/>
            <br/>
            <div id="userInfoBlock">

                <p>Our mission is to provide a </p>
                <p>wide range of news outlets </p>
                <p>and topics for you to </p>
                <p>discover. A free and easy </p>
                <p>way to explore news !</p>
                <br/>
                <br/>
                <br/>
                <br/>
                <p id="explore">Explore, WAKE yourself -> </p>
            </div>
            <br/>
            <br/>
    
         </div>

         <div id="rightBlock">
            <h1 id="titleFav">Discover</h1>
            

            {/* -------------------ROW 1---------------- */}
            <div id="row1">
                <div class="column" id="row1L">
                    <h1>politics</h1>
                </div>
                    
                <div class="column" id="row1R">
                    <h1>tech</h1>
                </div>
            </div>
            {/* -------------------ROW 1---------------- */}

            {/* -------------------ROW 2---------------- */}
            <div id="row2">
                <div class="column" id="row2L">
                    <h1>sports</h1>
                </div>
                    
                <div class="column" id="row2R">
                    <h1>media</h1>
                </div>
            </div>
            {/* -------------------ROW 2---------------- */}
            {/* -------------------ROW 3---------------- */}
            <div id="row3">
                <div class="column" id="row3L">
                    <h1>movements</h1>
                </div>
                    
                <div class="column" id="row3R">
                    <h1>podcasts</h1>
                </div>
            </div>
            {/* -------------------ROW 3---------------- */}
            {/* -------------------ROW 4---------------- */}
            <div id="row4">
                <div class="column" id="row4L">
                    <h1>design</h1>
                </div>
                    
                <div class="column" id="row4R">
                    <h1>Weeboooo</h1>
                </div>
            </div>
            {/* -------------------ROW 4---------------- */}
            {/* -------------------ROW 5---------------- */}
            <div id="row5">
                <div class="column" id="row5L">
                    <h1>environment</h1>
                </div>
                    
                <div class="column" id="row5R">
                    <h1>charities</h1>
                </div>
            </div>
            {/* -------------------ROW 5---------------- */}
         </div>
         
            </div>
        );
    }
}

export default Discover;