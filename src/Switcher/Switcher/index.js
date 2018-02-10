import React, {Component} from 'react';
import {Link, Route} from 'react-router-dom';

export default class Switcher extends Component {

// <Route path="/card" component={CardNumberHolder} />
// <Route path="/modal" component={ModalButton} />
// <Route path="/player" component={VideoPlayer} />

  render() {

    let list = React.Children.toArray(this.props.children, child => {
      return { child };
    });

    console.dir(list);



    return <div>
        <div>
          <ul>
            {React.Children.map(this.props.children, child => {
              return <li>
                  <Link to={child.props.path}>{child.props.linkTitle}</Link>
                </li>;
            })}
          </ul>
          <hr />
            {React.Children.toArray(this.props.children, child => {
              return <Route path={child.props.path} component={child.props.displayName} />;
            })}
        </div>
      </div>;
  }
}
