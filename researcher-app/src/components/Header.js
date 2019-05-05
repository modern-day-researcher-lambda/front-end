import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import HeaderWrapper from '../styled-components/HeaderWrapper';
import HeaderSpacer from '../styled-components/HeaderSpacer';
import { logout, toggleCats } from '../actions'



const mapStateToProps = state => ({
	user: state.user,
	user_id: state.user_id,
	loggedIn: state.loggedIn,
	show_cats: state.show_cats
});


class Header extends React.Component {

	handleLogout = (e) => {
		e.preventDefault();
	
		this.props.logout(this.props.history);
	};


	handleToggleCats = (e) => {
		e.preventDefault();
	
		this.props.toggleCats();
	};


	render() {
		return (
			<div>
				<HeaderWrapper>
					<div className='header-content'>
						<div className='left'>
							{ this.props.loggedIn
							  ? <>
									<div className='show-cats'
										onClick={ this.handleToggleCats } >
										<span>{this.props.show_cats ? 'Hide' : 'Show'}</span> <span>Categories</span>
									</div>
							    	<Link to="/CardForm">Add Card</Link>
								</>
							  : 
							  	<>
							    </>
							}
						</div>

						<div className='center'>
							Research Pal!
						</div>
						
						<div className='right'>
							{ this.props.loggedIn
							  ? <>
									<Link onClick={ this.handleLogout } to="/">Logout</Link>
								</>
							  :
							  	<>
							  		<Link to='/register'>Register</Link>
									<Link to="/login">Login</Link>
							    </>
							}
						</div>
					</div>
				
				</HeaderWrapper>
				<HeaderSpacer/>
			</div>
		);
	}
}


export default connect(
  mapStateToProps,
  { logout, toggleCats }
)(Header);
