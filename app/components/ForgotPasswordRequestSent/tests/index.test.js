import ForgotPasswordRequestSent from '../index';

import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';
import { FormattedMessage } from 'react-intl';

import messages from '../messages';

describe('<ForgotPasswordRequestSent />', () => {
  it('should render a text with the email', () => {
    const renderedComponent = shallow(
      <ForgotPasswordRequestSent email='test@email.com' />
    );

    expect(renderedComponent.contains(
      <FormattedMessage
        {...messages.body}
        values={{email: 'test@email.com'}}
      />
    )).toEqual(true);
  });
});
