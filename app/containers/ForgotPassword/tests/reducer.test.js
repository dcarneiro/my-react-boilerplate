import expect from 'expect';
import forgotPasswordReducer from '../reducer';
import { fromJS } from 'immutable';

describe('forgotPasswordReducer', () => {
  it('returns the initial state', () => {
    expect(forgotPasswordReducer(undefined, {})).toEqual(fromJS({}));
  });
});
