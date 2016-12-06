import { fromJS } from 'immutable';
import expect from 'expect';

import {
  selectIsAuthenticated,
  selectLocationState,
} from '../selectors';

describe('selectIsAuthenticated', () => {
  const isAuthenticatedSelector = selectIsAuthenticated();

  it('should select isAuthenticated', () => {
    const mockedState = fromJS({
      global: fromJS({
        isAuthenticated: true,
      }),
    });
    expect(isAuthenticatedSelector(mockedState)).toEqual(true);
  });
});

describe('selectLocationState', () => {
  it('should select the route as a plain JS object', () => {
    const route = fromJS({
      locationBeforeTransitions: null,
    });
    const mockedState = fromJS({
      route,
    });
    expect(selectLocationState()(mockedState)).toEqual(route.toJS());
  });
});
