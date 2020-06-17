import React from "react";

export default function VideoDetail({ video }) {
  if (!video) {
    return (
      <div>
        <h3>Select a Video from the video list</h3>
      </div>
    );
  }
  return (
    <div>
      <div className="ui embed">
        <iframe
          src={`https://www.youtube.com/embed/${video.id.videoId}`}
          title="YT Video Player"
        />
      </div>
      <div className="ui segment">
        <h4 className="ui header">{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
}
