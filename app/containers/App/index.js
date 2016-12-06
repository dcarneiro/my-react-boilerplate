/**
 *
 * App.react.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import AppBar from 'material-ui/AppBar';
import { createStructuredSelector } from 'reselect';

import { selectIsAuthenticated } from './selectors';
import Main from './Main';
import Container from './Container';
import NavigationBar from '../NavigationBar';
import NotificationList from '../NotificationList';
import RequestHandler from '../RequestHandler';

class App extends Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    children: React.PropTypes.node,
  };

  handleTouchTap(e) {
    e.preventDefault();
    browserHistory.push('/');
  }

  render() {
    const { isAuthenticated } = this.props;

    return (
      <div>
        <NavigationBar isAuthenticated={isAuthenticated} />
        <Main>
          <AppBar
            title="My Awesome App Name"
            onTitleTouchTap={this.handleTouchTap}
          />
          <Container>
            {React.Children.toArray(this.props.children)}
          </Container>

          <NotificationList />
          <RequestHandler />
        </Main>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  isAuthenticated: selectIsAuthenticated(),
});

export default connect(mapStateToProps)(App);
