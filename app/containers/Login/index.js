import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Title from '../../components/Title';
import LoginForm from '../../components/LoginForm';

import { loginRequest } from './actions';

class Login extends Component {
  constructor() {
    super();
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin(email, password) {
    this.props.loginRequest(email, password);
  }

  render() {
    return (
      <div>
        <Title>Login</Title>
        <LoginForm handleLogin={this.handleLogin} />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    loginRequest: bindActionCreators(loginRequest, dispatch),
  };
}

Login.propTypes = {
  loginRequest: React.PropTypes.func,
};

export default connect(null, mapDispatchToProps)(Login);
