import expect from 'expect';
import forgotPasswordReducer from '../reducer';
import { fromJS } from 'immutable';

import { forgotPasswordRequestSent } from '../actions';

describe('forgotPasswordReducer', () => {
  let state;
  beforeEach(() => {
    state = fromJS({
      email: null,
    });
  });

  it('returns the initial state', () => {
    const action = forgotPasswordRequestSent('test@email.com');
    expect(forgotPasswordReducer(state, action).toJS()).toEqual({
      email: 'test@email.com',
    });
  });
});
