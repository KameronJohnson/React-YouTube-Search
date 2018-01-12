import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search-bar';
import VideoList from './components/video-list';
import VideoDetail from './components/video-detail';

const API_KEY = 'AIzaSyC_JEMPx05tHASPi5cCzW1wRRT4nhpWAjs';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = { 
      videos: [], 
      selectedVideo: null
    };

    this.videoSearch('it\'s-a me mario');

  }

  videoSearch(searchTerm) {
    YTSearch({key: API_KEY, term: searchTerm}, (videos) => {
      this.setState({ 
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  render() {
    //use lodash to call function every 300ms for smoother feel
    const videoSearch = _.debounce(term => {this.videoSearch(term)}, 300);

    return (
      <div>
        <div className="logo"><img src={require("./style/images/yt.jpg")}/> </div>
        <SearchBar onSearchTermChange={videoSearch}/>
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList 
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos} />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('App'));
