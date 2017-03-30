import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/searchbar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const YT_API_KEY = 'AIzaSyC5-pZCy7fGTlBn7jn9NfHGvgK3ZR0qyn4';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null
     };

     this.videoSearch('Arik Einstein');
  }

videoSearch(term){
  YTSearch({key:YT_API_KEY, term: term}, (videos) => {
    this.setState({
      videos: videos,
      selectedVideo:videos[0]
    });
  });
}

  render(){
    return (
      <div>
      <SearchBar onSearchTermChanged={term =>
           {this.videoSearch(term)}
      }/>
      <VideoDetail video={this.state.selectedVideo} />
      <VideoList
        onVideoSelect={selectedVideo => this.setState({selectedVideo}) }
        videos={this.state.videos} />
      </div>
    );
  }
}

//Take this componenet genrated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
