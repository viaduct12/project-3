import axios from 'axios';
require('dotenv').config();


const KEY = process.env.YOUTUBE_KEY;

export default axios.create({
    baseUrl: 'http://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        key: KEY
    }
});