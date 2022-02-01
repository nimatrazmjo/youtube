import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/search-bar/search-bar.component';

import YTSearch from 'youtube-api-search';

const API_KEY = 'AIzaSyDTDh3JT7mc9r6KXqnJtTZvjZWcSTKBoWU';


class App extends Component {

  constructor(props) {
    super(props);

    this.state = { vedios: [] }



  }

  componentDidMount() {
    YTSearch({
      key: API_KEY,
      term: 'surfboards'
    },  vedios => this.setState({ vedios }));
  }

  render() {
    return (
      <div className='container pt-4'>

        <SearchBar />
      </div>
    );
  }
}

export default App;
