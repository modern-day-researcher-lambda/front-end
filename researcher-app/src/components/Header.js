import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import HeaderWrapper from './HeaderWrapper';
import HeaderSpacer from './HeaderSpacer';



const mapStateToProps = state => ({
	user: state.user,
	loggedIn: state.loggedIn
});

const logout = () => {
	
	this.$axios.setToken(false);
}


function Header(props) {
	return (
		<div>
			<HeaderWrapper height='80px'>
				{props.user && <p>Welcome, {props.user}</p>}
				
				
				{ props.loggedIn  
				  ? <>
				  		<Link to="/cards">Cards</Link>
				    	<Link to="/CardForm">Add Card</Link>
						<Link onClick={ logout }to="/welcome">Logout</Link>
					</>
				  : 
					<>
						<Link to="/register">Register</Link>
						<Link to="/login">Login</Link>
				    </>
				}
				
			</HeaderWrapper>
			<HeaderSpacer height='80px' />
		</div>
	);
}


export default connect(
  mapStateToProps,
  { }
)(Header);
