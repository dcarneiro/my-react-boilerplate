/**
 * Test  sagas
 */

import expect from 'expect';
import { put } from 'redux-saga/effects';

import { handleLogoutRequest } from '../sagas';
import { setCurrentUser } from '../../App/actions';

describe('handleLogoutRequest Saga', () => {
  it('should dispatch a set current user to null action', () => {
    const generator = handleLogoutRequest();
    const putDescriptor = generator.next().value;
    expect(putDescriptor).toEqual(put(setCurrentUser(null)));
  });
});
