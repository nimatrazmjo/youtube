import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search-bar/search-bar.component';
import VedioList from './components/vedio-list/vedio-list.component';
import './App.css';

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

        <VedioList vedios= {this.state.vedios} />
      </div>
    );
  }
}

export default App;
