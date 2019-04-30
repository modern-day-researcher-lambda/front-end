import React from 'react';
import { connect } from "react-redux";

import { resetErrors } from "../actions";
import WelcomeWrapper from './WelcomeWrapper';


const Welcome = (props) => {

	// reset any pending error messages
	props.resetErrors();

    return (
	    <WelcomeWrapper>
            <h1>Welcome to Research Pal!</h1>
            <p>Click 'Login' to begin</p>
            <p>First time user? Click 'Register' to create an account</p>
	    </WelcomeWrapper>
    );
};


export default connect(
  null,
  { resetErrors }
)(Welcome);
