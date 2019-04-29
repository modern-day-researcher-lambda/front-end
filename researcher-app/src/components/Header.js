import React from "react";
import { Link } from "react-router-dom";

import HeaderWrapper from './HeaderWrapper';
import HeaderSpacer from './HeaderSpacer';


function Header() {
	return (
		<>
			<HeaderWrapper height='80px'>
				<Link to="/cards">Home</Link>
				<Link to="/login">Login</Link>
				<Link to="/register">Register</Link>
			</HeaderWrapper>
			<HeaderSpacer height='80px' />
		</>
	);
}


export default Header;
