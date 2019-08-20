import React, { Component } from "react";
import { Link } from "react-router-dom";
import './style.css';


class Discover extends Component {

    // username = this.props.location.state.username;
    state = {
        username: ""
    }

    componentDidMount() {
        this.setUsername();
    }

    setUsername = () => {
        // console.log(this.props.location.state === undefined);
        if (this.props.location.state === undefined) {
            this.setState({ username: "______"})
        } else {
            this.setState({ username: this.props.location.state.username})
        }
    }

    render() {
        return (
            <div id="containerMe">
                <div className="row">
                    <div className="col s5">

                        <div id="leftBlock">
                            <h1>Hello {this.state.username} </h1>
                            <br />
                            <div id="userInfoBlock">
                                <p>Our mission is to provide a
                                wide range of news outlets 
                                and topics for you to 
                                discover. </p>
                                <p>A free and easy 
                                way to explore news !</p>
                                <br />
                                <p id="explore">Explore, WAKE yourself -> </p>
                    </div>
                    <br />
                    <br />

                </div>
                    </div>
                    <div className="col s5">
                    <div id="rightBlock">
                    <h1 id="titleFav">Discover</h1>
                    {/* -------------------ROW 1---------------- */}
                    <div className="row" id="row1">
                        <div className="column" id="row1L">
                            <Link to="/populate/politics"><h2>politics</h2></Link>
                        </div>

                        <div className="column" id="row1R">
                            <Link to="/populate/technology"><h2>tech</h2></Link>
                        </div>
                    </div>
                    {/* -------------------ROW 1---------------- */}

                    {/* -------------------ROW 2---------------- */}
                    <div className="row" id="row2">
                        <div className="column" id="row2L">
                            <Link to="/populate/sports"><h2>sports</h2></Link>
                        </div>

                        <div className="column" id="row2R">
                            <Link to="/populate/media"><h2>media</h2></Link>
                        </div>
                    </div>
                    {/* -------------------ROW 2---------------- */}
                    {/* -------------------ROW 3---------------- */}
                    <div className="row" id="row3">
                        <div className="column" id="row3L">
                            <Link to="/populate/movements"><h2>movements</h2></Link>
                        </div>

                        <div className="column" id="row3R">
                            <Link to="/populate/podcasts"><h2>podcasts</h2></Link>
                        </div>
                    </div>
                    {/* -------------------ROW 3---------------- */}
                    {/* -------------------ROW 4---------------- */}
                    <div className="row" id="row4">
                        <div className="column" id="row4L">
                            <Link to="/populate/design"><h2>design</h2></Link>
                        </div>

                        <div className="column" id="row4R">
                            <Link to="/populate/anime_gaming"><h2>anime & games</h2></Link>
                        </div>
                    </div>
                    {/* -------------------ROW 4---------------- */}
                    {/* -------------------ROW 5---------------- */}
                    <div className="row" id="row5">
                        <div className="column" id="row5L">
                            <Link to="/populate/environment"><h2>environment</h2></Link>
                        </div>

                        <div className="column" id="row5R">
                            <Link to="/populate/charities"><h2>charities</h2></Link>
                        </div>
                    </div>
                    {/* -------------------ROW 5---------------- */}
                </div>




                    </div>
                    {/* <div className="col s1">3</div>
                    <div class="col s1">4</div>
                    <div class="col s1">5</div>
                    <div class="col s1">6</div>
                    <div class="col s1">7</div>
                    <div class="col s1">8</div>
                    <div class="col s1">9</div>
                    <div class="col s1">10</div>
                    <div class="col s1">11</div>
                    <div class="col s1">12</div> */}
                    </div>
    
            </div>
        );
    }
}

export default Discover;