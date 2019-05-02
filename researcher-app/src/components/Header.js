import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import HeaderWrapper from './HeaderWrapper';
import HeaderSpacer from './HeaderSpacer';
import { logout } from '../actions'



const mapStateToProps = state => ({
	user: state.user,
	user_id: state.user_id,
	loggedIn: state.loggedIn
});


function Header(props) {

	const handleLogout = (e) => {
		e.preventDefault();
	
		props.logout(props.user_id, props.history)
		
	}

	return (
		<div>
			<HeaderWrapper height='80px'>
				{props.user && <p>Welcome, {props.user}</p>}
				
				
				{ props.loggedIn  
				  ? <>
				  		<Link to="/cards">Cards</Link>
				    	<Link to="/CardForm">Add Card</Link>
						<Link onClick={ handleLogout }to="/welcome">Logout</Link>
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
  { logout }
)(Header);
