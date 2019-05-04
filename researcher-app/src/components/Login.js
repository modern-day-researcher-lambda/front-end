import React from "react";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";
import { login } from "../actions";
import LoginWrapper from '../styled-components/LoginWrapper';


class Login extends React.Component {
  state = {
    credentials: {
      username: "",
      password: ""
    }
  };

  handleChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  handleLogin = e => {
    e.preventDefault();
    // attempt to login (handled inside login method)
    // success -> goto /cards
    // failure -> stay here
    this.props.login(this.state.credentials, this.props.history);
  };

  render() {
    return (
      <LoginWrapper>

        {this.props.loginError && <p className='error'>{this.props.loginError}</p>}
        {this.props.infoMessage && <p>{this.props.infoMessage}</p>}

        <p>Please enter your User Name and Password:</p>

        <form onSubmit={this.handleLogin}>

          <div>
            <label name='username'>Name:</label>
            <input
              type="text"
              name="username"
              value={this.state.credentials.username}
              onChange={this.handleChange}
            />
          </div>

          <div>
            <label name='password'>Password:</label>
            <input
              type="password"
              name="password"
              value={this.state.credentials.password}
              onChange={this.handleChange}
            />
          </div>

          <button>
            {this.props.isLoggingIn ? (
              <Loader type="ThreeDots" color="#1f2a38" height="12" width="26" />
            ) : (
              "Log in"
            )}
          </button>

        </form>
        
      </LoginWrapper>
    );
  }
}

const mapStateToProps = state => {
  return {
    isLoggingIn: state.isLoggingIn,
    loginError: state.loginError,
    infoMessage: state.infoMessage
  };
};

export default connect(
  mapStateToProps,
  { login }
)(Login);
