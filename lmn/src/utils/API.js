import axios from "axios";
import Auth from "./Auth";
require('dotenv').config();

const headers = () => {
  const options = {};
  // if authenticated create Authorization header to add to api calls
  if (Auth.isAuthenticated()) {
    options["headers"] = {
      "Authorization": `Bearer ${Auth.getToken()}`
    }
  }
  return options;
}
export default {
  scrapeArticles: function(query) {
    console.log("scrape test");
    // return axios.get("https://lmn-news-api.herokuapp.com/scrape/" + query);
    return axios.get("http://localhost:3000/api/article/scrape/" + query);
  },
  getArticles: function(query) {
    // return axios.get("https://lmn-news-api.herokuapp.com/api/" + query)
    return axios.get("http://localhost:3000/api/article/get/" + query);
  },

  searchPodcast: function(query) {
    console.log(query);
    const URL = "https://listen-api.listennotes.com/api/v2/search?q=" + query;
    return axios.get(URL, { 
      headers: 
      {
        'X-ListenAPI-Key': process.env.REACT_APP_Listen_API
      }
      })
  },  
  getYoutube: function(query) {
    return axios.get("https://developers.google.com/youtube/v3/docs/search/list" + query )
  },
  createUser: function(userInfo){
    // console.log(userInfo, "inside api request");
    // return axios.post("https://lmn-news-api.herokuapp.com/api/auth/signup", userInfo);

    //test link
    return axios.post("http://localhost:3000/api/auth/signup", userInfo);
  },
  loginUser: function(userCredentials) {
    console.log(userCredentials, "inside log in request");
    // return axios.post("https://lmn-news-api.herokuapp.com/api/auth/login", userCredentials);
    return axios.post("http://localhost:3000/api/auth/login", userCredentials);
  },

forumCategory: function(query) {
  return axios.get('http://localhost:3000/api/forum' + query)
}  

}

