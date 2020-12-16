import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from "./SeasonDisplay";
import "semantic-ui-css/semantic.min.css";
import Spinner from "./Spinner";

// const App = () => {
//
//
//   return (
//     <div>
//       <SeasonDisplay />
//     Latitude: </div>
//   );
// };

class App extends React.Component {
  // constructor(props) { // This function will be called before anything else!
  //   super(props); // We call it to make sure we use the React.Component, Super is reference to the parent function
  //   // (In this case it is React.component), that's all!
  //
  // }

  state = {
    lat: null, //latitude, lat: null => null stays here instead of a number
    errorMessage: ''
  };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => {
        // We called setState!!
        this.setState({lat: position.coords.latitude });
      },
      positionError => {

        this.setState({errorMessage: positionError.message});
      }
    );
  }

  renderContent () {
    if (this.state.errorMessage && !this.state.lat)
      return <div>Error: {this.state.errorMessage}</div>;

    if (!this.state.errorMessage && this.state.lat)
      return <SeasonDisplay lat={this.state.lat}/>;

    return <Spinner message={`Please accept location request`} />;
  }

  // React says we have to define render!!!
  render() {
    return (
      <div className="border red">
        {this.renderContent()}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));