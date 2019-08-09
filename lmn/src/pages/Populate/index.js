import React, { Component } from "react";
import API from "../../utils/API";
import ArticleContainer from "../../components/ArticleContainer";
import PodcastContainer from "../../components/PodcastContainer";
// import Wrapper from "../../components/Wrapper";
import './style.css';
import Searchbar from '../../components/Youtube/SearchBar';
import youtube from "../../components/Youtube/youtube";
import VideoList from '../../components/Youtube/VideoList';
// import VideoDetail from '../../components/Youtube/VideoDetail';
require("dotenv").config();

class Populate extends Component {

    state = {
        category: this.props.match.params.category,
        articles: [],
        podcasts: [],
        videos: [],
        selectedVideo: null
    };

    handleSubmit = async (termFromSearchBar) => {
        const response = await youtube.get('/search', {
            params: {
                q: termFromSearchBar
            }
        })
        this.setState({
            videos: response.data.items
        })
    };
    
    handleVideoSelect = (video) => {
        this.setState({selectedVideo: video})
    }

    componentDidMount() {
        this.searchListenAPI();
        this.loadArticles();
        this.fetchArticles();

    }


    loadArticles = () => {
        API.scrapeArticles(this.state.category).then()
        .catch(err => console.log(err))
    };

    fetchArticles = () => {
        API.getArticles(this.state.category).then(res =>
            this.setState({
                articles: res.data
            }))
        .catch(err => console.log(err))
    }


    searchListenAPI = () => {
        API.searchPodcast(this.state.category)
        .then(res => this.setState({
            podcasts: res.data.results
        })
        )
        .catch(err => console.log(err));
        
    }

    render() {
        return (
            <div id="containerOfpopulatedPage">
            <h1 id="titleDiscover">Discover</h1>
            

            {/* -------------------ROW 1---------------- */}
            <div id="containerPopulated">
                <div className="column" id="containerYoutube">
                    <h1>youtube</h1>
                    <Searchbar handleFormSubmit={this.handleSubmit}/>
                    <div className="ui grid">
                        <div className="ui row">
                            <div className="eleven wide column">
                                {/* <VideoDetail video={this.state.selectedVideo}/> */}
                            </div>
                            <div className="five wide column">
                                <VideoList handleVideoSelect={this.handleVideoSelect} videos={this.state.videos}/>
                            </div>
                        </div>

                    </div>
                    <br/>
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
                    <div id="podcast">
                    {this.state.podcasts.map(podcastsObj => (
                        <PodcastContainer
                            key={podcastsObj.podcast_id}
                            audio={podcastsObj.audio}
                            image={podcastsObj.image}
                            title={podcastsObj.title_original}
                            link={podcastsObj.listennotes_url}
                            description={podcastsObj.description_original}
                        />
                        ))}
                    </div>
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