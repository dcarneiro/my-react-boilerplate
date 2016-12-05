import expect from 'expect';

import {
  ADD_NOTIFICATION,
  REMOVE_NOTIFICATION,
} from '../constants';

import {
  addNotification,
  removeNotification,
} from '../actions';


describe('NotificationList actions', () => {
  describe('addNotification', () => {
    it('has a type of ADD_NOTIFICATION', () => {
      const expected = {
        type: ADD_NOTIFICATION,
        message: 'An awesome notification',
      };
      expect(addNotification('An awesome notification')).toEqual(expected);
    });
  });

  describe('addNotification', () => {
    it('has a type of REMOVE_NOTIFICATION', () => {
      const expected = {
        type: REMOVE_NOTIFICATION,
        id: 47,
      };
      expect(removeNotification(47)).toEqual(expected);
    });
  });
});
