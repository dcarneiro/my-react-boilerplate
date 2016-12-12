import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';

import ResetPasswordForm from '../index';

describe('<ResetPasswordForm />', () => {
  it('should render a <form> tag', () => {
    const renderedComponent = shallow(
      <ResetPasswordForm />
    );
    expect(renderedComponent.prop('form')).toEqual('resetPasswordForm');
  });
});
