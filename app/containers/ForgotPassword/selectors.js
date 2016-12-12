import { createSelector } from 'reselect';

const selectForgotPassword = () => (state) => state.get('forgotPassword');

const selectEmail = () => createSelector(
  selectForgotPassword(),
  (forgotPasswordState) => forgotPasswordState.get('email')
);

export {
  selectForgotPassword,
  selectEmail,
};
