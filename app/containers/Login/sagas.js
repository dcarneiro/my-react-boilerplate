import { takeLatest } from 'redux-saga';
import { put, take, call, fork, cancel } from 'redux-saga/effects';
import { push, LOCATION_CHANGE } from 'react-router-redux';

import { LOGIN_REQUEST } from './constants';

import { sendingRequest, requestError } from '../RequestHandler/actions';
import { addSuccessNotification } from '../NotificationList/actions';
import { setCurrentUser } from '../App/actions';
import { postRequest } from '../../utils/request';
import { handleJwtToken } from '../../utils/jwtToken';

export function* handleLoginRequest(data) {
  const { email, password } = data;
  const body = {
    grant_type: 'password',
    email,
    password,
  };

  yield put(sendingRequest(true));

  try {
    const response = yield call(postRequest, '/token', body);
    const currentUser = yield call(handleJwtToken, response);

    yield put(setCurrentUser(currentUser));

    const notificationMessage = `Hello ${currentUser.email}.`;
    yield put(addSuccessNotification(notificationMessage));

    yield put(push('/dashboard'));
  } catch (error) {
    yield put(requestError(error));
  } finally {
    yield put(sendingRequest(false));
  }
}

export function* getWatcher() {
  yield fork(takeLatest, LOGIN_REQUEST, handleLoginRequest);
}

/**
 * Root saga manages watcher lifecycle
 */
export function* loginSaga() {
  // Fork watcher so we can continue execution
  const watcher = yield fork(getWatcher);

  // Suspend execution until location changes
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

// Bootstrap sagas
export default [
  loginSaga,
];
