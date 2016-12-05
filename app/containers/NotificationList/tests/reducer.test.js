import expect from 'expect';
import { fromJS } from 'immutable';
import notificationListReducer from '../reducer';

describe('notificationListReducer', () => {
  it('returns the initial state', () => {
    expect(notificationListReducer(undefined, {})).toEqual(fromJS({}));
  });
});
