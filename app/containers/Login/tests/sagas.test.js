/**
 * Test  sagas
 */

import expect from 'expect';
import { put, call } from 'redux-saga/effects';
import { push } from 'react-router-redux';

import { handleLoginRequest } from '../sagas';
import { sendingRequest } from '../../RequestHandler/actions';
import { addSuccessNotification } from '../../NotificationList/actions';
import { setCurrentUser } from '../../App/actions';

import { postRequest } from '../../../utils/request';
import { handleJwtToken } from '../../../utils/jwtToken';

describe('handleLoginRequest Saga', () => {
  const email = 'me@mail.com';
  const password = 'password';

  const params = {
    email,
    password,
  };

  const body = {
    grant_type: 'password',
    email,
    password,
  };

  const generator = handleLoginRequest(params);

  it('sends a sending request action', () => {
    const descriptor = generator.next();
    expect(descriptor.value).toEqual(put(sendingRequest(true)));
  });

  it('calls the change password route', () => {
    const descriptor = generator.next();
    expect(descriptor.value).toEqual(call(postRequest, '/token', body));
  });

  it('sets the jwt token', () => {
    const accessTokenResponse = { access_token: 'alsfncal' };
    const descriptor = generator.next(accessTokenResponse);
    expect(descriptor.value).toEqual(call(handleJwtToken, accessTokenResponse));
  });

  it('set the current user', () => {
    const currentUser = { email };
    const descriptor = generator.next(currentUser);
    expect(descriptor.value).toEqual(put(setCurrentUser(currentUser)));
  });

  it('notify the user the password was changed', () => {
    const text = `Hello ${email}.`;
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
