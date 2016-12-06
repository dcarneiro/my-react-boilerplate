/*
 *
 * RequestHandler
 *
 * I've needed something that received the different request errors and trigger
 * a notification for them. I have a strong belief that this is not the best way
 * to do it.
 *
 */

import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectRequestHandler } from './selectors';
import { addNotification } from '../NotificationList/actions';

export class RequestHandler extends Component {
  componentWillReceiveProps(nextProps) {
    const { requestHandler } = nextProps;

    if (requestHandler.get('error')) {
      this.props.addNotification({ text: requestHandler.get('error'), type: 'error' });
    }
  }

  render() {
    return (
      <div>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  requestHandler: selectRequestHandler(),
});

function mapDispatchToProps(dispatch) {
  return {
    addNotification: bindActionCreators(addNotification, dispatch),
  };
}

RequestHandler.propTypes = {
  addNotification: React.PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(RequestHandler);
