import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form/immutable';
import FlatButton from 'material-ui/FlatButton';
import { FormattedMessage } from 'react-intl';
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

  if (!values.get('password')) {
    errors.password = 'Required';
  }

  return errors;
};

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.doSubmit = this.doSubmit.bind(this);
  }

  doSubmit(data) {
    this.props.handleLogin(data.get('email'), data.get('password'));
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
          <Field
            name="password"
            component={TextField}
            floatingLabelText={<FormattedMessage {...messages.passwordLabel} />}
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

LoginForm.propTypes = {
  handleLogin: React.PropTypes.func.isRequired,
  handleSubmit: React.PropTypes.func, // redux-form handles this one
};

export default reduxForm({
  form: 'loginForm', // a unique name for this form
  validate,
})(LoginForm);
