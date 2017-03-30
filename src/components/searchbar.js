import React, { Component } from 'react';

class SearchBar extends Component {

  constructor(props){
    super(props);

    this.state = {term: ''};
  }

  render() {
    return (
      <div className="search-bar">
        <input
          value={this.state.termToShearch}
          onChange={ event =>
              this.onInputChange(event.target.value)
          } />
      </div>
    );
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChanged(term);
  }
}

//function Object instead of class Object
// const SearchBar = () => {
//   return <input />;
// }

export default SearchBar;
