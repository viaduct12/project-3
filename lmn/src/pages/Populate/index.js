import React, { Component } from "react";
import API from "../../utils/API";
import ArticleContainer from "../../components/ArticleContainer";
import PodcastContainer from "../../components/PodcastContainer";
// import Wrapper from "../../components/Wrapper";
import './style.css';
import Searchbar from '../../components/Youtube/SearchBar';
// import youtube from "../../components/Youtube/youtube";
import VideoList from '../../components/Youtube/VideoList';
import VideoDetail from '../../components/Youtube/VideoDetail';
import axios from 'axios';
require("dotenv").config();


// const KEY = "AIzaSyAFUNYmE1gfydRFrlb3Q05gXlPSgQmiY6I"
class Populate extends Component {

    state = {
        category: this.props.match.params.category,
        articles: [],
        podcasts: [],
        videos: [],
        selectedVideo: null
    };

    handleSubmit = async (termFromSearchbar) => {
        console.log('inside handleFormSubmit')
        const response = await axios.get('https://www.googleapis.com/youtube/v3/search/',
            {params: {
                part: 'snippet',
                maxResults: 5,
                key: process.env.REACT_APP_YOUTUBE_API,
                q:termFromSearchbar
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

    componentDidUpdate(prevProps, prevState){
        
        if(this.state.articles.length === 0){
            this.fetchArticles();
        }
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
        .then(res => 
        this.setState({
            podcasts: res.data.results
        })
        )
        .catch(err => console.log(err));
        
    }

    render() {
        return (
            <div id="containerOfpopulatedPage" className="container">
                {/* <h1 id="titleDiscover">Discover</h1> */}

                {/* -------------------YOUTUBE---------------- */}
                {/* <div id="containerPopulated"> */}
                <div id="containerYoutube">
                    <h1>youtube</h1>
                    <Searchbar handleFormSubmit={this.handleSubmit}/>
                    <div className='uiGrid'>
                        <div className="ui row">
                            <div className="eleven wide column">
                                <VideoDetail video={this.state.selectedVideo}/>
                            </div>
                            <div id="videoListContainer" className="five wide column">
                                <VideoList handleVideoSelect={this.handleVideoSelect} videos={this.state.videos}/>
                            </div>
                        </div>
                    </div>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                </div>
                {/* -------------------YOUTUBE---------------- */}

                {/* -------------------NEWS---------------- */}
                <div id="containerNews">
                    <h1 id="newsTitle">news</h1>
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
                {/* -------------------NEWS---------------- */}

                {/* -------------------PODCAST---------------- */}
                <div id="containerPodcast">
                    <h1 id="podcastTitle">podcast</h1>
                    <div id="podcast">
                    {this.state.podcasts.map(podcastsObj => (
                        <PodcastContainer
                            key={podcastsObj.id}
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
                {/* -------------------PODCAST---------------- */}

                {/* -------------------ROW 1---------------- */}
            </div>
        
        );
    }
}

export default Populate;