import axios from "axios";

export default {
  getArticles: function() {
    return axios.get("https://lmn-news-api.herokuapp.com/")
  }
}