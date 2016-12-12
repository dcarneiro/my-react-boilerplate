/*
 * ResetPassword Messages
 *
 * This contains all the text for the ResetPassword component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  title: {
    id: 'app.containers.ResetPassword.title',
    defaultMessage: 'Reset Password',
  },
  resetPasswordSuccessNotification: {
    id: 'app.containers.ResetPassword.resetPasswordSuccessNotification',
    defaultMessage: 'Hello {user}. Your password was changed',
  },
});
