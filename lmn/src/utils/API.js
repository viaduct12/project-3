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
<<<<<<< HEAD
    return axios.get(URL, { headers: {
        'X-ListenAPI-Key': process.env.REACT_APP_Listen_API
      }})
=======
    return axios.get(URL, { 
      headers: 
      {
        'X-ListenAPI-Key': process.env.REACT_APP_Listen_API
      }
      })
>>>>>>> aa806eeb783ffd73a97eee8e7906089b5687d931
  },


  createUser: function(userInfo){
    console.log(userInfo, "inside api request");
    // return axios.post("https://lmn-news-api.herokuapp.com/api/signup", { data: {

    //test link
    return axios.post("http://localhost:3000/api/signup", { data: {
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
    return axios.post("http://localhost:3000/api/login", { data: {
      "email": userCredentials.email,
      "password": userCredentials.password
    }})
  }
}

