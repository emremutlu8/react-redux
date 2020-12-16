import { useState, useEffect } from 'react';
import youtube from "../apis/youtube";

const useVideos = (defaultSearchTerm) => {
  const [videos, setVideos] = useState([]); // state = {videos: [], selectedVideo: null};

  useEffect((defaultSearchTerm) => {
    search ('reactjs');
  }, [defaultSearchTerm]); // componentDidMount() {


  const search = async term => { // const ekledik
    const response = await youtube.get('/search', {
      params: {
        q: term
      }
    });

    setVideos(response.data.items);
    // this.setState(
    //   {videos: response.data.items,
    //     selectedVideo: response.data.items[0]
    //   });
  };

  return [videos, search];
  // return {videos,onTermSubmit};
};

export default useVideos;