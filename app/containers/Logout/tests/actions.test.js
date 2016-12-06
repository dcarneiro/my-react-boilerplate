import expect from 'expect';

import { LOGOUT_REQUEST } from '../constants';
import { logoutRequest } from '../actions';

describe('Logout actions', () => {
  describe('logoutRequest', () => {
    it('has a type of LOGOUT_REQUEST', () => {
      const expected = {
        type: LOGOUT_REQUEST,
      };
      expect(logoutRequest()).toEqual(expected);
    });
  });
});
