import expect from 'expect';

import {
  SENDING_REQUEST,
  REQUEST_ERROR,
} from '../constants';

import {
  sendingRequest,
  requestError,
} from '../actions';

describe('RequestHandler actions', () => {
  describe('sendingRequest', () => {
    it('has a type of SENDING_REQUEST', () => {
      const expected = {
        type: SENDING_REQUEST,
        sending: true,
      };
      expect(sendingRequest(true)).toEqual(expected);
    });
  });

  describe('requestError', () => {
    it('has a type of REQUEST_ERROR', () => {
      const expected = {
        type: REQUEST_ERROR,
        error: 'error',
      };
      expect(requestError('error')).toEqual(expected);
    });
  });
});
