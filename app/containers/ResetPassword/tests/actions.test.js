import expect from 'expect';
import {
  RESET_PASSWORD_REQUEST,
  RESET_PASSWORD_REQUEST_SENT,
} from '../constants';

import {
  resetPasswordRequest,
  resetPasswordRequestSent,
} from '../actions';

describe('ForgotPassword actions', () => {
  describe('Forgot Password Resent Action', () => {
    it('has a type of RESET_PASSWORD_REQUEST', () => {
      const id = 42;
      const token = 'ucbskjbajkcjalksc';
      const newPassword = '12345678';

      const expected = {
        type: RESET_PASSWORD_REQUEST,
        id,
        token,
        newPassword,
      };
      expect(resetPasswordRequest(id, token, newPassword)).toEqual(expected);
    });
  });

  describe('Forgot Password Request Sent Action', () => {
    it('has a type of RESET_PASSWORD_REQUEST_SENT', () => {
      const email = 'email@gmail.com';
      const expected = {
        type: RESET_PASSWORD_REQUEST_SENT,
        email,
      };
      expect(resetPasswordRequestSent(email)).toEqual(expected);
    });
  });
});
