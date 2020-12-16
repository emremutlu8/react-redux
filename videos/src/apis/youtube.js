import axios from "axios";

const KEY = 'AIzaSyCvsAc-h5PcbU-E_bADb2ZhaIpjPG-J-kw';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY
  }
});

