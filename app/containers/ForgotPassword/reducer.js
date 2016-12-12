/*
 *
 * RequestHandler reducer
 *
 */

import { fromJS } from 'immutable';
import { FORGOT_PASSWORD_REQUEST_SENT } from './constants';

const initialState = fromJS({
  email: null,
});

function forgotPasswordReducer(state = initialState, action) {
  switch (action.type) {
    case FORGOT_PASSWORD_REQUEST_SENT:
      return forgotPasswordRequestSend(state, action);
    default:
      return state;
  }
}

function forgotPasswordRequestSend(state, action) {
  return state.set('email', action.email);
}

export default forgotPasswordReducer;
