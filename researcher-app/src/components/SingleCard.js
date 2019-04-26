import React from 'react';
import { connect } from 'react-redux';

/*
import { getCards } from '../actions/';


const mapStateToProps = state => ({
	cards: state.cards
});
*/


const SingleCard = (props) => {

    return (
	    <div className={props.complete ? 'card complete' : 'card'} >
        	<p>{props.title}</p>
            <p>{props.category}</p>
            <p>{props.description}</p>
            <p>{props.link}</p>
            <p>{props.completed}</p>
	    </div>
    );
};



export default connect(null, {  })(SingleCard);

/*
        userid: "",
        id: 0,
        title: "",
        category: "",
        description: "",
        link: "",
        completed: false,
        created: new Date(),
        updated: null
*/