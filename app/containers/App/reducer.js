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

import { fromJS } from 'immutable';
import isEmpty from 'lodash/isEmpty';

import { SET_CURRENT_USER } from './constants';

const loginDefaultState = fromJS({
  isAuthenticated: false,
  user: null,
});

function loginReducer(state = loginDefaultState, action = {}) {
  switch (action.type) {
    case SET_CURRENT_USER:
      return state.withMutations((ctx) => {
        ctx
          .set('isAuthenticated', !isEmpty(action.user))
          .set('user', action.user);
      });
    default:
      return state;
  }
}

export default loginReducer;
