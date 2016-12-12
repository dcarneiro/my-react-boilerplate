/**
*
* ForgotPasswordRequestSent
*
*/

import React from 'react';
import { FormattedMessage } from 'react-intl';

import messages from './messages';

const ForgotPasswordRequestSent = (props) => {
  const { email } = props;

  return (<FormattedMessage
    {...messages.body}
    values={{
      email,
    }}
  />);
};

ForgotPasswordRequestSent.propTypes = {
  email: React.PropTypes.string.isRequired,
};

export default ForgotPasswordRequestSent;
