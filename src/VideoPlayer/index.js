import React, {Component} from 'react';

export default class VideoPlayer extends Component {

  static defaultProps = {
    displayName: "VideoPlayer",
    linkTitle: "VideoPlayer",
    path: "/player"
  }

  render() {
    return <div path={this.path} linkTitle={this.linkTitle}>
        VideoPlayer1
      </div>;
  }
}
