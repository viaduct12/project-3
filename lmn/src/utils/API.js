import axios from "axios";
require('dotenv').config();

export default {
  scrapeArticles: function() {
    return axios.get("https://lmn-news-api.herokuapp.com/scrape/politics");
  },
  getArticles: function() {
    return axios.get("https://lmn-news-api.herokuapp.com/api/politics")
  },
  searchPodcast: function() {
    const URL = "https://listen-api.listennotes.com/api/v2/search?q=politics"
    return axios.get(URL, { 
      headers: 
      {
        'X-ListenAPI-Key': process.env.Listen_API
      }
      })
  }

}

