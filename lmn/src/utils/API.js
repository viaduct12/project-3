import axios from "axios";

export default {
  scrapeArticles: function() {
    return axios.get("https://lmn-news-api.herokuapp.com/scrape/politics");
  },
  getArticles: function() {
    return axios.get("https://lmn-news-api.herokuapp.com/api/politics")
  },
  searchPodcast: function(querySearch) {
    return axios.get("https://listen-api.listennotes.com/api/v2/search?q=" + querySearch)
  },
  getYoutube: function(query) {
    return axios.get("https://developers.google.com/youtube/v3/docs/search/list" + query )
  }

}