/*
 *
 * ForgotPassword actions
 *
 */

import {
  FORGOT_PASSWORD_REQUEST,
  FORGOT_PASSWORD_REQUEST_SENT,
} from './constants';

export function forgotPasswordRequest(email) {
  return {
    type: FORGOT_PASSWORD_REQUEST,
    email,
  };
}

export function forgotPasswordRequestSent(email) {
  return {
    type: FORGOT_PASSWORD_REQUEST_SENT,
    email,
  };
}
