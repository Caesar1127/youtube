import React from "react";
import VideoItem from "./VideoItem";

export default function VideoList({ videos, selectedVideo }) {
  const renderedList = videos.map((video) => {
    return (
      <VideoItem
        video={video}
        key={video.id.videoId}
        selectedVideo={selectedVideo}
      />
    );
  });
  return <div className="ui relaxed divided list">{renderedList}</div>;
}
