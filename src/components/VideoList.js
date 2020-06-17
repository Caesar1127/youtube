import React from "react";
import VideoItem from "./VideoItem";

export default function VideoList({ videos, selectedVideo }) {
  const renderedList = videos.map((video, i) => {
    return <VideoItem video={video} key={i} selectedVideo={selectedVideo} />;
  });
  return <div className="ui relaxed divided list">{renderedList}</div>;
}
