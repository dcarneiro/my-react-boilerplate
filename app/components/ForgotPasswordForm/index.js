/**
*
* ForgotPasswordForm
*
*/

import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { Field, reduxForm } from 'redux-form/immutable';
import FlatButton from 'material-ui/FlatButton';
import { TextField } from 'redux-form-material-ui';
import isEmail from 'sane-email-validation';

import messages from './messages';

const validate = (values) => {
  const errors = {};

  if (!values.get('email')) {
    errors.email = 'Required';
  } else if (!isEmail(values.get('email'))) {
    errors.email = 'Invalid email address';
  }

  return errors;
};

class ForgotPasswordForm extends Component {
  constructor(props) {
    super(props);
    this.doSubmit = this.doSubmit.bind(this);
  }

  doSubmit(data) {
    this.props.handleForgotPassword(data.get('email'));
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.doSubmit)}>
        <div>
          <Field
            name="email"
            component={TextField}
            floatingLabelText={<FormattedMessage {...messages.emailLabel} />}
            type="email"
          />
        </div>
        <div>
          <FlatButton
            type="submit"
            label={<FormattedMessage {...messages.submitButton} />}
            primary
          />
        </div>
      </form>
    );
  }
}

ForgotPasswordForm.propTypes = {
  handleForgotPassword: React.PropTypes.func.isRequired,
  handleSubmit: React.PropTypes.func, // redux-form handles this one
};

export default reduxForm({
  form: 'forgotPasswordForm',
  validate,
})(ForgotPasswordForm);
