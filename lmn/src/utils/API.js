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

