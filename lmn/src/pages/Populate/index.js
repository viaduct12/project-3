
import React, { Component } from "react";
import API from "../../utils/API";
import ArticleContainer from "../../components/ArticleContainer";
// import Wrapper from "../../components/Wrapper";
import './style.css';

class Populate extends Component {
    state = {
        articles: []
    };

    componentDidMount() {
<<<<<<< HEAD
        this.loadArticles();
        this.searchListenAPI();
=======
        // this.loadArticles();
        this.fetchArticles();
>>>>>>> 2c39c6b67f00496f7cf6ea4e761988c4b3972f0c
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

<<<<<<< HEAD
    searchListenAPI = querySearch => {
        API.searchPodcast(querySearch)
        .then(res => this.setState({
            results: res.data.data
        }))
        .catch(err => console.log(err));
    }


=======
    // render() {
    //     return (
    //         <Wrapper>
    //         {this.state.articles.map(articlesObj => (
    //             <ArticleContainer
    //                 key={articlesObj.id}
    //                 title={articlesObj.title}
    //                 link={articlesObj.link}
    //                 summary={articlesObj.summary}
    //             />
    //         ))}
    //         </Wrapper>
    //     );
    // }
>>>>>>> 2c39c6b67f00496f7cf6ea4e761988c4b3972f0c

    render() {
        return (
            <div id="containerOfpopulatedPage">
            <h1 id="titleDiscover">Discover</h1>
            

            {/* -------------------ROW 1---------------- */}
            <div id="containerPopulated">
                <div className="column" id="containerYoutube">
                    <h1>youtube</h1>
                    <div id="youtube"></div>
                    <br/>
                    <br/>
                    <br/>
                </div>
                    
                <div className="column" id="containerNews">
                    <h1>news</h1>
                    <div id="news">
                        {this.state.articles.map(articlesObj => (
                        <ArticleContainer
                            key={articlesObj.id}
                            title={articlesObj.title}
                            link={articlesObj.link}
                            summary={articlesObj.summary}
                        />
                        ))}
                    </div>
                    <br/>
                    <br/>
                    <br/>
                </div>

                <div className="column" id="containerPodcast">
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