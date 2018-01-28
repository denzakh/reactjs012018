import React from "react";
// import { render } from "react-dom";
import NewsPost from "./NewsPost";
import "./App.css";

export default class App extends React.Component {
  state = { valueList: [{ key: 0, value: "empty value" }], tempValue: "" };

  handleChange = event => {
    let newTempValue = event.target.value;
    this.setState({ tempValue: newTempValue });
  };

  handleSubmit = event => {
    let newValue = this.state.tempValue;
    if (newValue) {
      let valueList = this.state.valueList;
      let newKey = "" + Math.random();
      // console.log(valueList, newValue, newKey);
      valueList.push({
        key: newKey,
        value: newValue
      });
      this.setState(state => ({
        ...state,
        valueList: valueList,
        tempValue: ""
      }));
    }
  };

  handleDelItem = event => {
    let valueList = this.state.valueList;
    let newList = valueList.filter(item => {
      return item.key !== event.target.id;
    });
    this.setState(state => ({ ...state, valueList: newList }));
  };

  render() {
    const { valueList, tempValue } = this.state;
    return (
      <div className="App">
        {valueList.map(post => {
          return (
            <NewsPost
              key={post.key}
              id={post.key}
              info={post.value}
              del={this.handleDelItem}
            />
          );
        })}

        <input
          onChange={this.handleChange}
          value={tempValue}
          className="comment-input"
        />
        <button onClick={this.handleSubmit}>Добавить</button>
      </div>
    );
  }
}
