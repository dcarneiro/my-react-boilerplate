import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';

import LoginForm from '../index';

describe('<LoginForm />', () => {
  it('should render a <form> tag', () => {
    const renderedComponent = shallow(
      <LoginForm />
    );
    expect(renderedComponent.prop('form')).toEqual('loginForm');
  });
});
