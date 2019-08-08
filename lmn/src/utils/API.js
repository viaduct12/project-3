import axios from "axios";

export default {
  scrapeArticles: function() {
    return axios.get("https://lmn-news-api.herokuapp.com/scrape/politics");
  },
  getArticles: function() {
    return axios.get("https://lmn-news-api.herokuapp.com/api/politics")
  },
  searchPodcast: function() {
    const URL = "https://listen-api.listennotes.com/api/v2/search?q=politics"
    return axios.get(URL, { headers: { 'Authorization': process.env.ListenAPI } })
  }

}

