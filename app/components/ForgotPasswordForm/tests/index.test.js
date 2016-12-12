import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';

import ForgotPasswordForm from '../index';

describe('<ForgotPasswordForm />', () => {
  it('should render a <form> tag', () => {
    const renderedComponent = shallow(
      <ForgotPasswordForm />
    );
    expect(renderedComponent.prop('form')).toEqual('forgotPasswordForm');
  });
});
