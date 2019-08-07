<<<<<<< HEAD
import React from "react";
import './style.css';

function Populate () {
    return (
        <div>
            <h1>Populated news</h1>
        </div>
    );
=======
import React, { Component } from "react";
import API from "../../utils/API";

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
>>>>>>> 2cc9c5f057444615c27ca8ed6967cbf26c8e5867
}

export default Populate;