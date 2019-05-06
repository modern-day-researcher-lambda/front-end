import React from 'react';
import { connect } from "react-redux";

import { resetErrors } from "../actions";
import WelcomeWrapper from '../styled-components/WelcomeWrapper';


const Welcome = (props) => {

	// reset any pending error states
	props.resetErrors();

    return (
	    <WelcomeWrapper>

        <div class="welcome-container">
            <h1 class="welcome-header">Research Pal</h1>
            <div class="welcome-message">
                <p>Login to get started.</p>
                <p>Or click register to create a new account!</p>
            </div>
        </div>

	    </WelcomeWrapper>
    );
};


export default connect(
  null,
  { resetErrors }
)(Welcome);
