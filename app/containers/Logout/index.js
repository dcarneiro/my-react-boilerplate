/*
 *
 * Logout
 *
 */

import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { logoutRequest } from './actions';

class Logout extends Component {
  componentWillMount() {
    this.props.logoutRequest();
  }

  render() {
    return null;
  }
}

function mapDispatchToProps(dispatch) {
  return {
    logoutRequest: bindActionCreators(logoutRequest, dispatch),
  };
}

Logout.propTypes = {
  logoutRequest: React.PropTypes.func,
};

export default connect(null, mapDispatchToProps)(Logout);
