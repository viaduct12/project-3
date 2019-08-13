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
    return axios.get("http://localhost:3000/api/article/scrape/" + query, headers());
  },
  getArticles: function(query) {
    // return axios.get("https://lmn-news-api.herokuapp.com/api/" + query)
    return axios.get("http://localhost:3000/api/article/get/" + query, headers());
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
    console.log(userInfo, "inside api request");
    // return axios.post("https://lmn-news-api.herokuapp.com/api/signup", { data: {

    //test link
    return axios.post("http://localhost:3000/api/auth/signup", { data: {
      "firstName": userInfo.firstName,
      "lastName": userInfo.lastName,
      "username": userInfo.username,
      "email": userInfo.email,
      "password": userInfo.password
    }})
  },
  loginUser: function(userCredentials) {
    console.log(userCredentials, "inside log in request");
    // return axios.post("https://lmn-news-api.herokuapp.com/api/login", { data: {
    return axios.post("http://localhost:3000/api/auth/login", { data: {
      "email": userCredentials.email,
      "password": userCredentials.password
    }})
  }
}

