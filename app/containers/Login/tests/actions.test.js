import expect from 'expect';
import {
  LOGIN_REQUEST,
} from '../constants';

import {
  loginRequest,
} from '../actions';

describe('Login actions', () => {
  describe('Login Request Action', () => {
    it('has a type of LOGIN_REQUEST', () => {
      const email = 'email@gmail.com';
      const password = 'password';

      const expected = {
        type: LOGIN_REQUEST,
        email,
        password,
      };

      expect(loginRequest(email, password)).toEqual(expected);
    });
  });
});
