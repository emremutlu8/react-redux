import React, {useState} from "react";

const SearchBar = ({onFormSubmit}) => {
  const [term, setTerm] = useState(''); // state = {term: ''}

  const onInputChange = (event) => { // Fonksiyonun içinde kullanabilmek için, başlarına const ekledik.
    setTerm(event.target.value); // this.setState({term: event.target.value})
  };

  const onSubmit = event => {
    event.preventDefault();

    // TODO: Make sure we call, callback from parent component
    onFormSubmit(term); // this.props.onFormSubmit(this.state.term);
  };

  return (
    <div className="search-bar ui segment">
      <form action="/" className="ui form" onSubmit={onSubmit}>
        <div className="field">
          <label htmlFor="search-id">
            Search For Videos
          </label>
          <input type="text" id="search-id"
                 autoComplete="off"
                 value={term}
                 onChange={onInputChange}
          />
        </div>
      </form>
    </div>);
};

// class SearchBar extends React.Component {
//
//   render() {
//
//   }
// }

export default SearchBar;