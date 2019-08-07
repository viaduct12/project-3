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
}

export default Populate;