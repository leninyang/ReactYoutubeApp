import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = 'AIzaSyB9pwMqxJohEB7sn6igdChSjU_hgg-CkjU';

// 1) App boots up
class App extends Component {
  constructor(props){
    super(props);

    // 2) We start with an empty array of videos & null selectedVideo
    this.state = {
      videos: [],
      selectedVideo: null
    };
    // 3) Does search YTSearch method
    this.videoSearch('bible project');
  }

  // Refactored youtube search in own function.
  videoSearch(term) {
    YTSearch({key: API_KEY, term: term}, (data) => {
      this.setState({
        // Pass videos
        videos: data,
        // First video will be set to selectedVideo
        selectedVideo: data[0]
      });
    });
  }

  render() {
    //Created function and passed it into debounce - can only be called every 300 mil sec
    const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300);

    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch}/>
        {/* 4)Goes through check first-> Loading.. 5)Then re-renders */}
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList
          //Definning a method that updates state of selectedVideo
          //by passing in a method to VideoList
                        // Takes a video and updates selectedVideo
          onVideoSelect={selectedVideo => this.setState({selectedVideo}) }
          videos={this.state.videos} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
