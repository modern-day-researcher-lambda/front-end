import React from 'react';
import { connect } from 'react-redux';

import { getCards } from '../actions/';


const mapStateToProps = state => ({
	cards: state.cards
});

class Cards extends React.Component {


    componentDidMount() {
        this.props.getCards();
    }

    render() {
        return (
            <ul className='card-list'>
            	{this.props.cards.map(card => (
    	            <li key={card.id} className={card.complete ? 'card complete' : 'card'} >
    	            	<p>{card.title}</p>
                        <p>{card.category}</p>
                        <p>{card.description}</p>
                        <p>{card.link}</p>
                        <p>{card.completed}</p>
    	            </li>
            	))}
            </ul>
        );
    }
}


export default connect(mapStateToProps, { getCards })(Cards);

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
