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
  createUser: function(userInfo){
    console.log(userInfo, "inside api request");
    // return axios.post("https://lmn-news-api.herokuapp.com/api/signup",{
    return axios.post("http://localhost:3000/api/signup",{ data: {
      "firstName": userInfo.firstName,
      "lastName": userInfo.lastName,
      "username": userInfo.username,
      "email": userInfo.email,
      "password": userInfo.password
    }})
  }
}
