
import React, { Component } from "react";
import API from "../../utils/API";
import './style.css';

class Populate extends Component {
    state = {
        title: "",
        link: "",
        summary: "",
    };

    componentDidMount() {
        this.loadArticles();
    }

    loadArticles = () => {
        // API.scrapeArticles().then(res => "scrape completed").catc
    }

    render() {
        return (
            <div id="rightBlock">
            <h1 id="titleFav">Discover</h1>
            

            {/* -------------------ROW 1---------------- */}
            <div id="containerPopulated">
                <div class="column" id="containerYoutube">
                    <h1>youtube</h1>
                    <div id="youtube"></div>
                    <br/>
                    <br/>
                    <br/>
                </div>
                    
                <div class="column" id="containerNews">
                    <h1>news</h1>
                    <div id="news"></div>
                    <br/>
                    <br/>
                    <br/>
                </div>

                <div class="column" id="containerPodcast">
                    <h1>podcast</h1>
                    <div id="podcast"></div>
                    <br/>
                    <br/>
                    <br/>
                </div>

            </div>
            {/* -------------------ROW 1---------------- */}

  
         </div>
         
        );
    }
}

export default Populate;