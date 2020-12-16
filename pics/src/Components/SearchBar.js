import React from "react";

class SearchBar extends React.Component {
  // onInputChange(event) {
  //   console.log(event.target.value);
  // }

  state = { term: ''};

  onFormSubmit = (event) => {
    event.preventDefault();

    this.props.onSubmit(this.state.term);
  }

  render() {
    return (
      <div className={`ui segment`}>
        <form onSubmit={this.onFormSubmit} action="/" className={`ui form`}>
          <label htmlFor="searchBar">Image Search</label>
          <input type="text" className={`field`} id={`searchBar`}
                 onChange={(e)=> this.setState({term: e.target.value})}
                  value={this.state.term}/>
        </form>
      </div>
    );
  }
}

export default SearchBar;