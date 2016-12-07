/*
 *
 * ForgotPassword
 *
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';

import Title from '../../components/Title';
import ForgotPasswordForm from '../../components/ForgotPasswordForm';
import selectForgotPassword from './selectors';

export class ForgotPassword extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Title>Forgot Password</Title>
        <ForgotPasswordForm />
      </div>
    );
  }
}

const mapStateToProps = selectForgotPassword();

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ForgotPassword);
