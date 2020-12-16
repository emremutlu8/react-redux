import React from 'react'; // Default export olduğu için {} bunu kullanmadık
// import { selectSong } from "../actions"; //Named export olduğu için {} bunları kullandık
import SongList from "./SongList";
import SongDetail from "./SongDetail";


const App = () => {
  return (
    <div className={`ui container grid`}>
      <div className="ui row">
        <div className="column eight wide">
          <SongList />
        </div>
        <div className="column eight wide">
          <SongDetail />
        </div>
      </div>
    </div>
  );
};

export default App;