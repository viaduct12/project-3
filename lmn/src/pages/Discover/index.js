import React from "react";
import { Link } from "react-router-dom";
import './style.css';


class Discover extends React.Component {

    render() {
        return (
            <div id="containerMe">

                <div id="leftBlock">
                    <h1>Hello ______ </h1>
                    <br />
                    <br />
                    <br />
                    <div id="userInfoBlock">

                        <p>Our mission is to provide a </p>
                        <p>wide range of news outlets </p>
                        <p>and topics for you to </p>
                        <p>discover. A free and easy </p>
                        <p>way to explore news !</p>
                        <br />
                        <br />
                        <br />
                        <br />
                        <p id="explore">Explore, WAKE yourself -> </p>
                    </div>
                    <br />
                    <br />

                </div>

                <div id="rightBlock">
                    <h1 id="titleFav">Discover</h1>


                    {/* -------------------ROW 1---------------- */}
                    <div id="row1">
                        <div className="column" id="row1L">
                            <Link to="/populate/politics"><h1>politics</h1></Link>
                        </div>

                        <div className="column" id="row1R">
                            <Link to="/populate/technology"><h1>tech</h1></Link>
                        </div>
                    </div>
                    {/* -------------------ROW 1---------------- */}

                    {/* -------------------ROW 2---------------- */}
                    <div id="row2">
                        <div className="column" id="row2L">
                            <Link to="/populate/sports"><h1>sports</h1></Link>
                        </div>

                        <div className="column" id="row2R">
                            <Link to="/populate/media"><h1>media</h1></Link>
                        </div>
                    </div>
                    {/* -------------------ROW 2---------------- */}
                    {/* -------------------ROW 3---------------- */}
                    <div id="row3">
                        <div className="column" id="row3L">
                            <Link to="/populate/movements"><h1>movements</h1></Link>
                        </div>

                        <div className="column" id="row3R">
                            <Link to="/populate/podcasts"><h1>podcasts</h1></Link>
                        </div>
                    </div>
                    {/* -------------------ROW 3---------------- */}
                    {/* -------------------ROW 4---------------- */}
                    <div id="row4">
                        <div className="column" id="row4L">
                            <Link to="/populate/design"><h1>design</h1></Link>
                        </div>

                        <div className="column" id="row4R">
                            <Link to="/populate/anime_gaming"><h1>anime & games</h1></Link>
                        </div>
                    </div>
                    {/* -------------------ROW 4---------------- */}
                    {/* -------------------ROW 5---------------- */}
                    <div id="row5">
                        <div className="column" id="row5L">
                            <Link to="/populate/enviroment"><h1>enviroment</h1></Link>
                        </div>

                        <div className="column" id="row5R">
                            <Link to="/populate/charities"><h1>charities</h1></Link>
                        </div>
                    </div>
                    {/* -------------------ROW 5---------------- */}
                </div>

            </div>
        );
    }
}

export default Discover;