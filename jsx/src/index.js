// Import the React and ReactDom libraries
import React from "react";
import ReactDOM from "react-dom";

// Create a react components
const App = () => {
  const buttonText = { text: 'Click Me!' };


  return  (
    <div>
      <label className="label" htmlFor="name">
        İsimler:
      </label>
    <input id="name" type="text"/>
    <button style={{backgroundColor: 'blue', color: 'white', border: 'none'}}>{buttonText.text}</button>
  </div>
  );
};

// Take the react component and show it on the screen
ReactDOM.render(<App />, document.querySelector("#root"));
