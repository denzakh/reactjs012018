import React from 'react';
// import {render} from 'react-dom';
import "./NewsPost.css";

export default class NewsPost extends React.Component {  
  render() {
    const {info, del, id} = this.props;
    
    return <div className="news-post" id={id} onClick={del}>{info}</div>;
  }
}
