/*
 *
 * NotificationList actions
 *
 */

import {
  ADD_NOTIFICATION,
  REMOVE_NOTIFICATION,
} from './constants';

/**
 * Creates an action to show a notification
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} message   A hash with text and type. Type will fallback to
 *                            'success' if undefined. Other available types are
 *                            'error', 'warning' and 'info'.
 *
 * @return {object}           The response data
 */
export function addNotification(message) {
  return {
    type: ADD_NOTIFICATION,
    message,
  };
}

export function removeNotification(id) {
  return {
    type: REMOVE_NOTIFICATION,
    id,
  };
}
