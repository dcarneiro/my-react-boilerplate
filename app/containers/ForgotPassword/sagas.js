import { takeLatest } from 'redux-saga';
import { put, take, call, fork, cancel } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';

import { FORGOT_PASSWORD_REQUEST } from './constants';
import { forgotPasswordRequestSent } from './actions';

import { sendingRequest, requestError } from '../RequestHandler/actions';
import { postRequest } from '../../utils/request';

export function* handleForgotPasswordRequest(data) {
  const { email } = data;
  const body = {
    data: {
      type: 'reset-password-token',
      attributes: {
        email,
      },
    },
  };

  yield put(sendingRequest(true));

  try {
    yield call(postRequest, '/forgot_password', body);
    yield put(forgotPasswordRequestSent(email));
  } catch (error) {
    yield put(requestError(error));
  } finally {
    yield put(sendingRequest(false));
  }
}

export function* getWatcher() {
  yield fork(takeLatest, FORGOT_PASSWORD_REQUEST, handleForgotPasswordRequest);
}

export function* forgotPasswordSaga() {
  // Fork watcher so we can continue execution
  const watcher = yield fork(getWatcher);

  // Suspend execution until location changes
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

// All sagas to be loaded
export default [
  forgotPasswordSaga,
];
