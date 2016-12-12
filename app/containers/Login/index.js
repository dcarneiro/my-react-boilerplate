import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';
import FlatButton from 'material-ui/FlatButton';

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
        <FlatButton label="Forgot your Password" onTouchTap={() => browserHistory.push('/forgot-password')} />
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
