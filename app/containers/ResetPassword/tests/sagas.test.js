/**
 * Test  sagas
 */

import expect from 'expect';
import { put, call } from 'redux-saga/effects';

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
      type: 'reset_password',
      attributes: {
        id: 7,
        token: 'ajsnaasc',
        'new-password': '12345678',
      },
    },
  };

  const generator = handleResetPasswordRequest(params);

  let currentUser;

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
    currentUser = descriptor.value;
    expect(currentUser).toEqual(call(handleJwtToken, accessTokenResponse));
  });

  it('set the current user', () => {
    const descriptor = generator.next(currentUser);
    expect(descriptor.value).toEqual(put(setCurrentUser(currentUser)));
  });

  it('notify the user the password was changed', () => {
    // crap, the message is hardcoded
    const text = 'Hello undefined. Your password was changed';
    const descriptor = generator.next(text);
    expect(descriptor.value).toEqual(put(addSuccessNotification(text)));
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
