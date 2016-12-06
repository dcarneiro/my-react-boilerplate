/*
 *
 * RequestHandler reducer
 *
 */

import { fromJS } from 'immutable';
import {
  SENDING_REQUEST,
  REQUEST_ERROR,
} from './constants';

const initialState = fromJS({
  error: null,
  sending: false,
});

function requestHandlerReducer(state = initialState, action) {
  switch (action.type) {
    case SENDING_REQUEST:
      return sendingRequest(state, action);
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

/*
 * When sending a new request, lets clear previous requests errors
 */
function sendingRequest(state, action) {
  if (action.sending) {
    return state.set('error', null);
  }
  return state;
}

function requestError(state, action) {
  return state.set('error', parseErrorMessage(action.error));
}

export default requestHandlerReducer;
