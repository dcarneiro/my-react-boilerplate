/*
 *
 * ForgotPassword actions
 *
 */

import {
  RESET_PASSWORD_REQUEST,
  RESET_PASSWORD_REQUEST_SENT,
} from './constants';

export function resetPasswordRequest(id, token, newPassword) {
  return {
    type: RESET_PASSWORD_REQUEST,
    id,
    token,
    newPassword,
  };
}

export function resetPasswordRequestSent(email) {
  return {
    type: RESET_PASSWORD_REQUEST_SENT,
    email,
  };
}
