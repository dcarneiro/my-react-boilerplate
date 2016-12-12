/**
*
* ResetPasswordForm
*
*/

import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form/immutable';
import FlatButton from 'material-ui/FlatButton';
import { FormattedMessage } from 'react-intl';
import { TextField } from 'redux-form-material-ui';

import messages from './messages';

const validate = (values) => {
  const errors = {};

  if (values.constructor.name === 'Map') {
    if (!values.get('newPassword')) {
      errors.newPassword = 'Required';
    }

    if (!values.get('passwordConfirmation')) {
      errors.passwordConfirmation = 'Required';
    } else if (values.get('newPassword') !== values.get('passwordConfirmation')) {
      errors.passwordConfirmation = 'Passwords do not match';
    }
  }

  return errors;
};

class ResetPasswordForm extends Component {
  constructor(props) {
    super(props);
    this.doSubmit = this.doSubmit.bind(this);
  }

  doSubmit(data) {
    if (data.get('newPassword') === data.get('passwordConfirmation')) {
      this.props.handleResetPassword(data.get('newPassword'));
    }
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.doSubmit)}>
        <div>
          <Field
            name="newPassword"
            component={TextField}
            floatingLabelText={<FormattedMessage {...messages.newPasswordLabel} />}
            type="password"
          />
        </div>
        <div>
          <Field
            name="passwordConfirmation"
            component={TextField}
            floatingLabelText={<FormattedMessage {...messages.passwordConfirmationLabel} />}
            type="password"
          />
        </div>
        <div>
          <FlatButton
            type="submit"
            label={<FormattedMessage {...messages.submitButtonLabel} />}
            primary
          />
        </div>
      </form>
    );
  }
}

ResetPasswordForm.propTypes = {
  handleResetPassword: React.PropTypes.func.isRequired,
  handleSubmit: React.PropTypes.func, // redux-form handles this one
};

export default reduxForm({
  form: 'resetPasswordForm',
  validate,
})(ResetPasswordForm);
