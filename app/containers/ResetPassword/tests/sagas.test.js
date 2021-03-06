/**
 * Test  sagas
 */

import expect from 'expect';
import { put, call } from 'redux-saga/effects';
import { push } from 'react-router-redux';

import { handleResetPasswordRequest } from '../sagas';
import { sendingRequest } from '../../RequestHandler/actions';
import { addSuccessNotification } from '../../NotificationList/actions';
import { setCurrentUser } from '../../App/actions';

import { postRequest } from '../../../utils/request';
import { handleJwtToken } from '../../../utils/jwtToken';

describe('handleResetPasswordRequest Saga', () => {
  const params = {
    id: 7,
    token: 'ajsnaasc',
    newPassword: '12345678',
  };

  const body = {
    data: {
      id: 7,
      type: 'change-password',
      attributes: {
        token: 'ajsnaasc',
        'new-password': '12345678',
      },
    },
  };

  const generator = handleResetPasswordRequest(params);

  it('sends a sending request action', () => {
    const descriptor = generator.next();
    expect(descriptor.value).toEqual(put(sendingRequest(true)));
  });

  it('calls the change password route', () => {
    const descriptor = generator.next();
    expect(descriptor.value).toEqual(call(postRequest, '/change_password', body));
  });

  it('sets the jwt token', () => {
    const accessTokenResponse = { access_token: 'alsfncal' };
    const descriptor = generator.next(accessTokenResponse);
    expect(descriptor.value).toEqual(call(handleJwtToken, accessTokenResponse));
  });

  it('set the current user', () => {
    const currentUser = { email: 'test@gmail.com' };
    const descriptor = generator.next(currentUser);
    expect(descriptor.value).toEqual(put(setCurrentUser(currentUser)));
  });

  it('notify the user the password was changed', () => {
    const text = 'Hello test@gmail.com. Your password was changed';
    const descriptor = generator.next(text);
    expect(descriptor.value).toEqual(put(addSuccessNotification(text)));
  });

  it('redirects to dashboard', () => {
    const descriptor = generator.next();
    expect(descriptor.value).toEqual(put(push('/dashboard')));
  });

  it('mark the sending request as done', () => {
    const descriptor = generator.next();
    expect(descriptor.value).toEqual(put(sendingRequest(false)));
  });

  it('ends the saga', () => {
    const descriptor = generator.next();
    expect(descriptor.done).toEqual(true);
  });
});
