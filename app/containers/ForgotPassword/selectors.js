import { createSelector } from 'reselect';

/**
 * Direct selector to the forgotPassword state domain
 */
const selectForgotPasswordDomain = () => (state) => state.get('forgotPassword');

/**
 * Other specific selectors
 */


/**
 * Default selector used by ForgotPassword
 */

const selectForgotPassword = () => createSelector(
  selectForgotPasswordDomain(),
  (substate) => substate.toJS()
);

export default selectForgotPassword;
export {
  selectForgotPasswordDomain,
};
