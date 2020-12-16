import React from "react";

class SearchBar extends React.Component {
  state = {term: ''}

  onInputChange = (event) => {
    this.setState({term: event.target.value})
  };

  onFormSubmit = event => {
    event.preventDefault();

    // TODO: Make sure we call, callback from parent component
    this.props.onFormSubmit(this.state.term);
  };

  render() {
    return (
      <div className="search-bar ui segment">
        <form action="/" className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label htmlFor="search-id">
              Video Search
            </label>
            <input type="text" id="search-id"
                   autoComplete="off"
                   value={this.state.term}
                   onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>);
  }
}

export default SearchBar;