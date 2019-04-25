import React from 'react';
import connect from 'react-redux';

class Login extends React.Component {
    state = {
        credentials: {
            username: "",
            password: ""
        }
    }

    // handleChange function

    // handleLogin function

    render(){
        return (
            <div className="Login">

            </div>
        )
    }
}

const mapStateToProps = state => {
    return {

    };
};

export default connect (
    mapStateToProps,
    // { placeholder function }
)(Login);