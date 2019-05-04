import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import HeaderWrapper from '../styled-components/HeaderWrapper';
import HeaderSpacer from '../styled-components/HeaderSpacer';
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
			<HeaderWrapper>
				
				{ props.loggedIn
				  ? (
				  		<div className='logged-in'>
							<div className='greet'>Welcome, {props.user}</div>

				    		<Link to="/CardForm">Add Card</Link>
							<Link onClick={ handleLogout }to="/">Logout</Link>
						</div>
					)
				  : 
				  	(
						<div className='logged-out'>
							<Link to="/register">Register</Link>
							<Link to="/login">Login</Link>
				    	</div>
				    )
				}
				
			</HeaderWrapper>
			<HeaderSpacer/>
		</div>
	);
}


export default connect(
  mapStateToProps,
  { logout }
)(Header);
