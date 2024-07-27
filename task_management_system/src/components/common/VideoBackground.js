import React from "react";
import "../../styles/VideoBackground.css";
import VideoBusy from "../../assets/videos/busy.mp4";

const VideoBackground = ({ children }) => {
  return (
    <div className="video-background-container">
      <video autoPlay loop muted className="video-background">
        <source src={VideoBusy} type="video/mp4" />
      </video>
      <div className="content">{children}</div>
    </div>
  );
};

export default VideoBackground;
