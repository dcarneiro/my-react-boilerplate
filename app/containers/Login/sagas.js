import { takeLatest } from 'redux-saga';
import { put, take, call, fork, cancel } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import { browserHistory } from 'react-router';
import jwtDecode from 'jwt-decode';

import { LOGIN_REQUEST } from './constants';
import { SET_CURRENT_USER } from '../App/constants';

import { SENDING_REQUEST, REQUEST_ERROR } from '../RequestHandler/constants';
import { postRequest, setAuthorizationToken } from '../../utils/request';
import { addNotification } from '../NotificationList/actions';

function processLoginResponse(data) {
  const { access_token } = data;
  localStorage.setItem('jwtToken', access_token);
  setAuthorizationToken(access_token);
  return jwtDecode(access_token).sub;
}

export function* handleLoginRequest(data) {
  const { email, password } = data;
  const body = {
    grant_type: 'password',
    email,
    password,
  };

  yield put({ type: SENDING_REQUEST, sending: true });

  try {
    const response = yield call(postRequest, '/token', body);
    const currentUser = yield call(processLoginResponse, response);
    yield put(addNotification({ text: `Hello ${currentUser.email}` }));
    yield put({ type: SET_CURRENT_USER, user: currentUser });
    browserHistory.push('/');
  } catch (error) {
    yield put({ type: REQUEST_ERROR, error });
  } finally {
    yield put({ type: SENDING_REQUEST, sending: false });
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
