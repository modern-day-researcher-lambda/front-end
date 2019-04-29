import React from 'react';

import WelcomeWrapper from './WelcomeWrapper';


const Welcome = (props) => {

    return (
	    <WelcomeWrapper>
            <h1>Welcome to Research Pal!</h1>
            <p>Click 'Login' to begin</p>
            <p>First time user? Click 'Register' to create an account</p>
	    </WelcomeWrapper>
    );
};


export default Welcome;
