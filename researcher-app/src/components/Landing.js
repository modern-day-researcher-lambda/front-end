import React from "react";
import { connect } from "react-redux";

import Welcome from './Welcome';
import Cards from './Cards';


const mapStateToProps = state => ({
	loggedIn: state.loggedIn
});


function Landing(props) {

	return (
		<div>
			{ props.loggedIn ? <Cards /> : <Welcome /> }
		</div>
	);
}


export default connect(
  mapStateToProps,
  { }
)(Landing);
