/*
 * LoginReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */

import isEmpty from 'lodash/isEmpty';

import {
  SET_CURRENT_USER,
} from './constants';

const loginDefaultState = {
  isAuthenticated: false,
  user: null,
};

function loginReducer(state = loginDefaultState, action = {}) {
  switch (action.type) {
    case SET_CURRENT_USER:
      return { ...state,
        isAuthenticated: !isEmpty(action.user),
        user: action.user,
      };
    default:
      return state;
  }
}

export default loginReducer;
