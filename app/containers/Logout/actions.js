/*
 *
 * Logout actions
 *
 */

import { LOGOUT_REQUEST } from './constants';

export function logoutRequest() {
  return {
    type: LOGOUT_REQUEST,
  };
}
