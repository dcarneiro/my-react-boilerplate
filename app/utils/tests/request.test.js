/**
 * Test the request function
 */

import { getRequest, setAuthorizationToken } from '../request';
import axios from 'axios';
import moxios from 'moxios';
import expect from 'expect';
import sinon from 'sinon';

describe('setAuthorizationToken', () => {
  it('should set the auth token on axios', () => {
    setAuthorizationToken('myAuthToken');
    expect(axios.defaults.headers.common.Authorization).toEqual('Bearer myAuthToken');
  });

  it('should remove the auth token on axios', () => {
    setAuthorizationToken();
    expect(axios.defaults.headers.common.Authorization).toNotExist();
  });
});

describe('getRequest', () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it('should return the response data', (done) => {
    const responseData = { id: 1, firstName: 'Fred', lastName: 'Flintstone' };

    moxios.stubRequest(/.*\/hello/, {
      status: 200,
      response: responseData,
    });

    const onFulfilled = sinon.spy();
    getRequest('/hello').then(onFulfilled);

    moxios.wait(() => {
      expect(onFulfilled.getCall(0).args[0]).toEqual({ id: 1, firstName: 'Fred', lastName: 'Flintstone' });
      done();
    });
  });
});
