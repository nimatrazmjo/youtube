import React, {Component} from "react";

import './search-bar.style.scss';

class SearchBar extends Component {

  changeHanlde = event => {
    const { value, name } = event.target;
  }
  render () {
    return (
      <div className="search-bar">
        <input className="form-control" name="search" onChange={this.changeHanlde} />
      </div>
      )
      
  }
}

export default SearchBar;