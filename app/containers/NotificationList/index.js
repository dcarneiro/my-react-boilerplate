/*
 *
 * NotificationList component based on react-notification-system
 * url: https://github.com/igorprado/react-notification-system
 *
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import NotificationSystem from 'react-notification-system';
import { createStructuredSelector } from 'reselect';

import { selectNotificationList } from './selectors';
import { removeNotification } from './actions';

export class NotificationList extends Component { // eslint-disable-line react/prefer-stateless-function
  constructor() {
    super();
    this.notificationSystem = null;
  }

  componentDidMount() {
    this.notificationSystem = this.reactNotificationSystem;
  }

  componentWillReceiveProps(nextProps) {
    const { notificationList } = nextProps;

    const message = notificationList[notificationList.length - 1];

    if (message) {
      this.notificationSystem.addNotification({
        uid: message.id,
        message: message.text,
        level: message.type || 'success',
        onRemove: ((m) => removeNotification(m.uid)),
      });
    }
  }

  render() {
    return (
      <NotificationSystem ref={(c) => { this.reactNotificationSystem = c; }} />
    );
  }
}

const mapStateToProps = createStructuredSelector({
  notificationList: selectNotificationList(),
});

function mapDispatchToProps(dispatch) {
  return {
    removeNotification: bindActionCreators(removeNotification, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NotificationList);
