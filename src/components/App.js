import React, { Component } from "react";
import SearchBar from "./SearchBar";
import youtube from "../api/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { videos: [], selectedVideo: null };
    this.submitSearch = this.submitSearch.bind(this);
    this.selectedVideo = this.selectedVideo.bind(this);
  }
  componentDidMount() {
    this.submitSearch("Recent News");
  }
  submitSearch(term) {
    const KEY = "AIzaSyD7Oct92k6JCl_rQLk_BkVGpVdyoIoZDPI";
    youtube
      .get("/search", {
        params: {
          part: "snippet",
          maxResults: 5,
          key: KEY,
          q: term,
          type: "video",
        },
      })
      .then(({ data }) => {
        this.setState({ videos: data.items });
      });
  }
  selectedVideo(selectedVideo) {
    this.setState({ selectedVideo: selectedVideo });
    console.log(selectedVideo);
  }
  render() {
    return (
      <div className="ui container">
        <SearchBar onSubmit={this.submitSearch} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList
                videos={this.state.videos}
                selectedVideo={this.selectedVideo}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
