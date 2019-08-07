import axios from "axios";

export default {
  scrapeArticles: function() {
    return axios.get("https://lmn-news-api.herokuapp.com/scrape/politics");
  },
  getArticles: function() {
    return axios.get("https://lmn-news-api.herokuapp.com/api/politics")
  },
  searchPodcast: function(querySearch) {
    const url = "https://listen-api.listennotes.com/api/v2/search?q=" + querySearch
    return axios.get({
      url,
      headers: {'X-ListenAPI-Key': process.env.ListenAPI}
    })
      
  }

}