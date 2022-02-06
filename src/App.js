import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search-bar/search-bar.component';
import VedioList from './components/vedio-list/vedio-list.component';
import './App.css';
import VedioDetail from './components/vedio-detail/vedio-detail.component';

const API_KEY = 'AIzaSyDTDh3JT7mc9r6KXqnJtTZvjZWcSTKBoWU';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = { 
      vedios: [],
      selectedVedio: null
     }
  }

  componentDidMount() {
    YTSearch({
      key: API_KEY,
      term: 'surfboards'
    },  vedios => this.setState({ vedios, selectedVedio: vedios[0] }));
  }

  render() {
    return (
      <div className='container pt-4'>

        <SearchBar /> 
        <div className='d-flex'>
        <VedioDetail vedio={this.state.selectedVedio}/>
        <VedioList vedios= {this.state.vedios} selectedVedio = {selectedVedio => this.setState({selectedVedio})} />
        </div>
      </div>
    );
  }
}

export default App;
