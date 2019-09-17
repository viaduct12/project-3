import React, { Component } from "react";
import { Link } from "react-router-dom";
import './style.css';
class Me extends React.Component {


    render() {
        return (
            <div id="containerMe">

<div id="leftBlock">

<div className="leftContainer">
<h1 className="hello">Hello </h1>
<br />
<div id="userInfoBlock">
    <p className="blurbBlock">
        
                <br/>
                <br/>
                <p id="userNameSection">username: </p>
                <p id="emailSection">email: </p>
                <br/>
                </p>

                <p id="explore">Explore your favorites -> </p>
         
    <br />
</div>
</div>
<br />
<br />

</div>

        {/* <div id="leftBlock">
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
    
        </div> */}

        

        <div id="rightBlock">
            <h1 id="titleFav">Favorites</h1>
            <br/>
            <br/>

                    {/* -------------------ROW 1---------------- */}
                    <div className="row" id="row1">
                        <div className="column" id="row1L">
                            <Link to="/populate/politics"><h2 className="topicName">politics</h2></Link>
                        </div>

                        <div className="column" id="row1R">
                            <Link to="/populate/technology"><h2 className="topicName">tech</h2></Link>
                        </div>
                    </div>
                    {/* -------------------ROW 1---------------- */}

                    {/* -------------------ROW 2---------------- */}
                    <div className="row" id="row2">
                        <div className="column" id="row2L">
                            <Link to="/populate/sports"><h2 className="topicName">sports</h2></Link>
                        </div>

                        <div className="column" id="row2R">
                            <Link to="/populate/media"><h2 className="topicName">media</h2></Link>
                        </div>
                    </div>
                    {/* -------------------ROW 2---------------- */}

        </div>
        
            </div>
        );
    }
}

export default Me; 