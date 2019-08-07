import axios from "axios";

export default {
  scrapeArticles: function() {
    return axios.get("https://lmn-news-api.herokuapp.com/scrape/politics")
  },
  getArticles: function() {
    return axios.get("https.lmn-news-api.herokuapp.com/api/politics")
  }

}