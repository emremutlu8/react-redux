import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    {title: 'No Scrubs', duration: '4:05'},
    {title: 'Football', duration: '2:35'},
    {title: 'All Star', duration: '3:15'},
    {title: 'Every way did I can', duration: '1:45'},
  ];
};

const selectedSongReducer = (selectedSong= null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }

  return selectedSong;
};

selectedSongReducer(undefined, { type: 'something' });

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});