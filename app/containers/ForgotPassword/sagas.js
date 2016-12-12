import { takeLatest } from 'redux-saga';
import { put, take, call, fork, cancel } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';

import { FORGOT_PASSWORD_REQUEST } from './constants';
import { forgotPasswordRequestSent} from './actions';

import { SENDING_REQUEST, REQUEST_ERROR } from '../RequestHandler/constants';
import { postRequest } from '../../utils/request';
export function* handleForgotPasswordRequest(data) {
  const { email } = data;
  const body = {
    data: {
      type: 'password_reset_token',
      attributes: {
        email,
      },
    },
  };

  yield put({ type: SENDING_REQUEST, sending: true });

  try {
    yield call(postRequest, '/forgot_password', body);
    yield put(forgotPasswordRequestSent(email));
  } catch (error) {
    yield put({ type: REQUEST_ERROR, error });
  } finally {
    yield put({ type: SENDING_REQUEST, sending: false });
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
