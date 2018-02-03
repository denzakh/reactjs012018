import React from 'react';
// import {render} from 'react-dom';
import "./NewsPost.css";

export default class NewsPost extends React.Component {  
  render() {
    const {text, id} = this.props;
    
    return <div className="news-post" id={id} ><p>{text}</p></div>;
  }
}
