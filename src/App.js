import React, { Component } from "react";
import "./App.css";
import { addListener, removeListener } from "./AuthorizeApi";
import { Link, Switch, Route, Redirect } from "react-router-dom";
import Private from "./Private";
import Auth from "./Auth";
import Public from "./Public";
import Home from "./Home";
class App extends Component {
  state = {
    isAuthorized: false
  };

  componentDidMount() {
    addListener(this.handleAuthorize);
  }

  componentWillUnmount() {
    removeListener(this.handleAuthorize);
  }

  handleAuthorize = isAuthorized => {
    this.setState({ isAuthorized: isAuthorized });
  };

  render() {
    let showPrivat = () => {
      if (this.state.isAuthorized === true) {
        return <Route path="/private" component={Private} />;
      } else {
        return <Redirect exact from="/private" to="/auth" />;
      }
    };

    return (
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/auth">Войти</Link>
            </li>
            <li>
              <Link to="/private">Секретная страница</Link>
            </li>
            <li>
              <Link to="/public">Публичная страница</Link>
            </li>
            <li>
              <Link to="/">Главная</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route
            exact
            path="/auth"
            render={() => (
              <Auth
                handleAuthorize={this.handleAuthorize}
                isAuthorized={this.state.isAuthorized}
              />
            )}
          />
          {showPrivat()}
          <Route exact path="/public" component={Public} />
          <Route exact path="/" component={Home} />
          <Route component={Home} />
        </Switch>
      </div>
    );
  }
}

export default App;
