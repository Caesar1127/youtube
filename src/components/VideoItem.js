import React from "react";
import "./VideoItem.css";
export default function VideoItem({ video, selectedVideo }) {
  return (
    <div
      className="item video-item"
      onClick={(e) => {
        selectedVideo(video);
      }}>
      <img
        src={video.snippet.thumbnails.medium.url}
        alt={video.description}
        className="ui image"
      />
      <div className="content">
        <div className="header">{video.snippet.title}</div>
      </div>
    </div>
  );
}
