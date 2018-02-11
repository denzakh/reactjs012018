import React, { Component } from "react";
import "./VideoPlayer.css";
import videoFile from "./Video.mp4";

export default class VideoPlayer extends Component {
  handlePlay = () => {
    this.video.play();
  };

  handleStop = () => {
    this.video.pause();
  };

  render() {
    return (
      <div className="video-player">
        <video
          ref={c => (this.video = c)}
          width="320"
          height="240"
          className="video-player__source"
        >
          <source src={videoFile} type="video/mp4" />
        </video>
        <div>
          <button type="button" onClick={this.handlePlay}>
            Play
          </button>
          <button type="button" onClick={this.handleStop}>
            Stop
          </button>
        </div>
      </div>
    );
  }
}
