import { takeLatest } from 'redux-saga';
import { put, take, fork, cancel } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import { browserHistory } from 'react-router';

import { LOGOUT_REQUEST } from './constants';
import { setCurrentUser } from '../App/actions';
import { expireJwtToken } from '../../utils/jwtToken';

export function* handleLogoutRequest() {
  expireJwtToken();
  yield put(setCurrentUser(null));
  browserHistory.push('/');
}

export function* getWatcher() {
  yield fork(takeLatest, LOGOUT_REQUEST, handleLogoutRequest);
}

/**
 * Root saga manages watcher lifecycle
 */
export function* logoutSaga() {
  // Fork watcher so we can continue execution
  const watcher = yield fork(getWatcher);

  // Suspend execution until location changes
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

// All sagas to be loaded
export default [
  logoutSaga,
];
