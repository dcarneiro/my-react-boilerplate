/*
 *
 * ResetPassword
 *
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import selectResetPassword from './selectors';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

import Title from '../../components/Title';
import ResetPasswordForm from '../../components/ResetPasswordForm';

export class ResetPassword extends Component {
  constructor() {
    super();
    this.handleResetPassword = this.handleResetPassword.bind(this);
  }

  handleResetPassword() {

  }

  render() {
    return (
      <div>
        <Title>
          <FormattedMessage {...messages.title} />
        </Title>
        <ResetPasswordForm handleResetPassword={this.handleResetPassword} />
      </div>
    );
  }
}

const mapStateToProps = selectResetPassword();

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ResetPassword);
