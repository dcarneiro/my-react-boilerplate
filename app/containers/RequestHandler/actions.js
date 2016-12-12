/*
 *
 * Logout actions
 *
 */

import {
  SENDING_REQUEST,
  REQUEST_ERROR,
} from './constants';

export function sendingRequest(sending) {
  return {
    type: SENDING_REQUEST,
    sending,
  };
}

export function requestError(error) {
  return {
    type: REQUEST_ERROR,
    error,
  };
}
