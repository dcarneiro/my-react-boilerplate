/*
 *
 * ForgotPassword
 *
 */

import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Title from '../../components/Title';
import ForgotPasswordForm from '../../components/ForgotPasswordForm';
import ForgotPasswordRequestSent from '../../components/ForgotPasswordRequestSent';

import { forgotPasswordRequest } from './actions';
import { selectEmail } from './selectors';

export class ForgotPassword extends Component {
  constructor() {
    super();
    this.handleForgotPassword = this.handleForgotPassword.bind(this);
  }

  handleForgotPassword(email, password) {
    this.props.forgotPasswordRequest(email, password);
  }

  render() {
    const { email } = this.props;
    const forgotPasswordForm = <ForgotPasswordForm handleForgotPassword={this.handleForgotPassword} />;
    const forgotPasswordRequestSent = <ForgotPasswordRequestSent email={email} />;

    return (
      <div>
        <Title>Forgot Password</Title>
        { email ? forgotPasswordRequestSent : forgotPasswordForm }
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  email: selectEmail(),
});

function mapDispatchToProps(dispatch) {
  return {
    forgotPasswordRequest: bindActionCreators(forgotPasswordRequest, dispatch),
  };
}

ForgotPassword.propTypes = {
  forgotPasswordRequest: React.PropTypes.func,
  email: React.PropTypes.string,
};

export default connect(mapStateToProps, mapDispatchToProps)(ForgotPassword);
