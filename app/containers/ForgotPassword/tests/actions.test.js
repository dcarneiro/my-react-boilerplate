import expect from 'expect';
import {
  FORGOT_PASSWORD_REQUEST,
  FORGOT_PASSWORD_REQUEST_SENT,
} from '../constants';

import {
  forgotPasswordRequest,
  forgotPasswordRequestSent,
} from '../actions';

describe('ForgotPassword actions', () => {
  describe('Forgot Password Resent Action', () => {
    it('has a type of FORGOT_PASSWORD_REQUEST', () => {
      const email = 'email@gmail.com';
      const expected = {
        type: FORGOT_PASSWORD_REQUEST,
        email,
      };
      expect(forgotPasswordRequest(email)).toEqual(expected);
    });
  });

  describe('Forgot Password Request Sent Action', () => {
    it('has a type of FORGOT_PASSWORD_REQUEST_SENT', () => {
      const email = 'email@gmail.com';
      const expected = {
        type: FORGOT_PASSWORD_REQUEST_SENT,
        email,
      };
      expect(forgotPasswordRequestSent(email)).toEqual(expected);
    });
  });
});
