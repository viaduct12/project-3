import React, { Component } from "react";
import API from "../../utils/API";
import ArticleContainer from "../../components/ArticleContainer";
import Wrapper from "../../components/Wrapper";
class Populate extends Component {
    state = {
        articles: []
    };

    componentDidMount() {
        this.loadArticles();
        this.fetchArticles();
    }

    loadArticles = () => {
        API.scrapeArticles().then()
        .catch(err => console.log(err))
    };

    fetchArticles = () => {
        API.getArticles().then(res =>
            this.setState({
                articles: res.data
            }))
        .catch(err => console.log(err))
    }

    render() {
        return (
            <Wrapper>
            {this.state.articles.map(articlesObj => (
                <ArticleContainer
                    key={articlesObj.id}
                    title={articlesObj.title}
                    link={articlesObj.link}
                    summary={articlesObj.summary}
                />
            ))}
            </Wrapper>
        );
    }
}

export default Populate;