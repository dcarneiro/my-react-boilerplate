import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import { ResetPassword } from '../index';
import ResetPasswordForm from '../../../components/ResetPasswordForm';

describe('<ResetPassword />', () => {
  it('should render the ResetPasswordForm', () => {
    const rendererComponent = shallow(
      <ResetPassword />
    );
    expect(rendererComponent.find(ResetPasswordForm).length).toEqual(1);
  });
});
