import React from "react";

const VideoDetail = ({ video }) => {
  if (!video)
    return <div>Waiting . . .</div>

  const videoSrc = `https://youtube.com/embed/${video.id.videoId}`;

  return (
    <div className={`ui segment`}>
      <div className="ui embed">
        <iframe title="video player" src={videoSrc} frameBorder="0"></iframe>
      </div>
      <h4 className="ui header">{video.snippet.title}</h4>
      <p>{video.snippet.description}</p>
    </div>
  );
};

export default VideoDetail;