import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import { Login } from '../index';
import LoginForm from '../../../components/LoginForm';

describe('<Login />', () => {
  it('should render the LoginForm', () => {
    const rendererComponent = shallow(
      <Login />
    );
    expect(rendererComponent.find(LoginForm).length).toEqual(1);
  });
});
