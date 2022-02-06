import React, { Component } from "react";

import './search-bar.style.scss';

class SearchBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      term : ''
    }
  }

  searchYoutube(term) {
    console.log(term, 'terrrr');
    this.setState({term});
    this.props.search(term);
  }
  render() {
    return (
      <div className="search-bar">
        <input className="form-control" name="search" onChange={e => this.searchYoutube(e.target.value)} />
      </div>
    )
  }
}

export default SearchBar;