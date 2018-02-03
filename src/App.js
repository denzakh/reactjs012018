import React from "react";
// import { render } from "react-dom";
import NewsPost from "./NewsPost";
import "./App.css";

export default class App extends React.Component {
  state = { news: [], newsInput: "" };

  handleChange = event => {
    let newsInput = event.target.value;
    this.setState({ newsInput });
  };

  handleNewPost = event => {
    if (this.state.newsInput) {

      this.setState(state => {
        return { news: [...state.news, {text: +state.newsInput}], newsInput: "" }; });
    }
  };

  render() {
    return <div className="App">
        {this.state.news.map((post) => {
          return <NewsPost key={post.text} text={post.text} />;
        })}

        <input onChange={this.handleChange} value={this.state.newsInput} className="comment-input" />
        <button onClick={this.handleNewPost}>Добавить</button>
      </div>;
  }
}
