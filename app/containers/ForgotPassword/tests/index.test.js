import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import { ForgotPassword } from '../index';
import ForgotPasswordForm from '../../../components/ForgotPasswordForm';

describe('<ForgotPassword />', () => {
  it('should render the ForgotPasswordForm', () => {
    const rendererComponent = shallow(
      <ForgotPassword />
    );
    expect(rendererComponent.find(ForgotPasswordForm).length).toEqual(1);
  });
});
