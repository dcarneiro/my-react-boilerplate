/*
 *
 * RequestHandler reducer
 *
 */

import { fromJS } from 'immutable';
import {
  REQUEST_ERROR,
} from './constants';

const initialState = fromJS({});

function requestHandlerReducer(state = initialState, action) {
  switch (action.type) {
    case REQUEST_ERROR:
      return requestError(state, action);
    default:
      return state;
  }
}

function parseErrorMessage(error) {
  switch (error.name) {
    case 'TypeError':
      return 'It looks like the server is offline';
    default:
      return error.message;
  }
}

function requestError(state, action) {
  return Object.assign({}, state, {
    error: parseErrorMessage(action.error),
  });
}

export default requestHandlerReducer;
