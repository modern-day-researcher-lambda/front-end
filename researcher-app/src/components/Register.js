import React from "react";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";
import { register } from "../actions";

class Register extends React.Component {
  state = {
    credentials: {
      username: "",
      password: ""
    }
  };

  handleChange = e => {
    console.log(this.props.state);
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  handleRegister = e => {
    e.preventDefault();
    this.props
      .register(this.state.credentials)
      .then(() => this.props.history.push("/cards"));
  };

  render() {
    return (
      <div>
  

        {this.props.registerError && <p>Registration error, try again</p>}
        <form onSubmit={this.handleRegister}>
          <input
            type="text"
            name="username"
            value={this.state.credentials.username}
            onChange={this.handleChange}
          />
          <input
            type="password"
            name="password"
            value={this.state.credentials.password}
            onChange={this.handleChange}
          />
          <button>
            {this.props.isRegistering ? (
              <Loader type="ThreeDots" color="#1f2a38" height="12" width="26" />
            ) : (
              "Register"
            )}
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    state: state,
    isRegistering: state.isRegistering,
    registerError: state.registerError
  };
};

export default connect(
  mapStateToProps,
  { register }
)(Register);
