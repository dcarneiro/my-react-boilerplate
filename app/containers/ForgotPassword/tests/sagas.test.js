import expect from 'expect';
import { put, call } from 'redux-saga/effects';

import { handleForgotPasswordRequest } from '../sagas';
import { sendingRequest } from '../../RequestHandler/actions';
import { forgotPasswordRequestSent } from '../actions';

import { postRequest } from '../../../utils/request';

describe('handleForgotPasswordRequest Saga', () => {
  const email = 'test@mail.com';

  const params = {
    email,
  };

  const body = {
    data: {
      type: 'reset-password-token',
      attributes: {
        email,
      },
    },
  };

  const generator = handleForgotPasswordRequest(params);

  it('sends a sending request action', () => {
    const descriptor = generator.next();
    expect(descriptor.value).toEqual(put(sendingRequest(true)));
  });

  it('calls the forgot password route', () => {
    const descriptor = generator.next();
    expect(descriptor.value).toEqual(call(postRequest, '/forgot_password', body));
  });

  it('tells that the forgot password request was sent', () => {
    const descriptor = generator.next();
    expect(descriptor.value).toEqual(put(forgotPasswordRequestSent(email)));
  });
});
