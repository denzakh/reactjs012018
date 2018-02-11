import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import * as Api from "./AuthorizeApi";

class Auth extends Component {
  state = {
    isAuthorized: false,
    email: "",
    password: "",
    isError: false
  };

  handleSubmit = () => {
    let authorize = Api.authorizeUser(this.state.email, this.state.password);
    if (authorize) {
      this.setState({ isAuthorized: true, isError: false });
      this.props.handleAuthorize(true);
    } else {
      this.setState({ isError: true });
    }
  };

  handleEmail = e => {
    this.setState({ email: e.target.value });
  };

  handlePassword = e => {
    this.setState({ password: e.target.value });
  };

  componentWillMount() {
    this.setState({ isAuthorized: this.props.isAuthorized });
  }

  render() {
    let isAuthorizedFn = () => {
      if (this.state.isAuthorized) {
        return <Redirect exact from="/auth" to="/" />;
      } else {
        let errorMessage;
        if (this.state.isError) {
          errorMessage = <p className="error">Неверный пароль и/или почта.</p>;
        }

        return (
          <div>
            <div>
              <input
                name="email"
                placeholder="email"
                onChange={this.handleEmail}
              />
              <input
                name="password"
                placeholder="password"
                onChange={this.handlePassword}
              />
            </div>
            {errorMessage}
            <button onClick={this.handleSubmit}>Submit</button>
          </div>
        );
      }
    };

    return isAuthorizedFn();
  }
}

export default Auth;
