import React, {Component} from "react";

import './search-bar.style.scss';

class SearchBar extends Component {

  changeHanlde = event => {
    const { value, name } = event.target;
    console.log(name, value);
  }
  render () {
    return <input className="form-control" name="search" onChange={this.changeHanlde} />
  }
}

export default SearchBar;