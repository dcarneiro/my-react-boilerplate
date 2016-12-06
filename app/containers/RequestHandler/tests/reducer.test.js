import expect from 'expect';
import { fromJS } from 'immutable';

import requestHandlerReducer from '../reducer';

describe('requestHandlerReducer', () => {
  it('returns the initial state', () => {
    expect(requestHandlerReducer(undefined, {})).toEqual(fromJS({
      error: null,
      sending: false,
    }));
  });
});
