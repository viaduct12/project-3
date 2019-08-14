import axios from 'axios';
require('dotenv').config();


const KEY = process.env.REACT_APP_YOUTUBE_KEY;

export default axios.create({
    baseUrl: 'http://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});