/*
 *
 * NotificationList reducer
 *
 */

import { fromJS } from 'immutable';
import shortid from 'shortid';
import findIndex from 'lodash/findIndex';

import {
  ADD_NOTIFICATION,
  REMOVE_NOTIFICATION,
} from './constants';

const initialState = fromJS({});

function notificationListReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_NOTIFICATION:
      return addNotification(state, action);
    case REMOVE_NOTIFICATION:
      return removeNotification(state, action);
    default:
      return state;
  }
}

function addNotification(state, action) {
  return [
    ...state,
    {
      id: shortid.generate(),
      type: action.message.type,
      text: action.message.text,
    },
  ];
}

function removeNotification(state, action) {
  const index = findIndex(state, { id: action.id });
  if (index >= 0) {
    return [
      ...state.slice(0, index),
      ...state.slice(index + 1),
    ];
  }
  return state;
}

export default notificationListReducer;
