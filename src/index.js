import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search-bar';
import VideoList from './components/video-list';
import VideoDetail from './components/video-detail';


const API_KEY = 'AIzaSyC_JEMPx05tHASPi5cCzW1wRRT4nhpWAjs';

const App = () => {
  return <div>React Youtube Search</div>;
}

ReactDOM.render(<App />, document.getElementById('App'));
