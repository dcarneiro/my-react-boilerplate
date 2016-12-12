import { browserHistory } from 'react-router';
import { takeLatest } from 'redux-saga';
import { put, take, call, fork, cancel } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';

import { RESET_PASSWORD_REQUEST } from './constants';

import { sendingRequest, requestError } from '../RequestHandler/actions';
import { addSuccessNotification } from '../NotificationList/actions';
import { setCurrentUser } from '../App/actions';
import { postRequest } from '../../utils/request';
import { handleJwtToken } from '../../utils/jwtToken';

export function* handleResetPasswordRequest(data) {
  const { id, token, newPassword } = data;
  const body = {
    data: {
      type: 'reset_password',
      attributes: {
        id,
        token,
        'new-password': newPassword,
      },
    },
  };

  yield put(sendingRequest(true));

  try {
    const response = yield call(postRequest, '/change_password', body);
    const currentUser = yield call(handleJwtToken, response);

    const notificationMessage = `Hello ${currentUser.email}. Your password was changed`;

    yield put(setCurrentUser(currentUser));
    yield put(addSuccessNotification(notificationMessage));

    browserHistory.push('/');
  } catch (error) {
    yield put(requestError(error));
  } finally {
    yield put(sendingRequest(false));
  }
}

export function* getWatcher() {
  yield fork(takeLatest, RESET_PASSWORD_REQUEST, handleResetPasswordRequest);
}

export function* resetPasswordSaga() {
  // Fork watcher so we can continue execution
  const watcher = yield fork(getWatcher);

  // Suspend execution until location changes
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

// All sagas to be loaded
export default [
  resetPasswordSaga,
];
