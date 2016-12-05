import { fromJS } from 'immutable';
import expect from 'expect';

import {
  selectRequestHandler,
} from '../selectors';

describe('selectRequestHandler', () => {
  const requestHandlerSelector = selectRequestHandler();

  it('should select the request handler', () => {
    const error = 'It looks like the server is offline';
    const mockedState = fromJS({
      requestHandler: {
        error,
      },
    });

    expect(requestHandlerSelector(mockedState).get('error')).toEqual(error);
  });
});
