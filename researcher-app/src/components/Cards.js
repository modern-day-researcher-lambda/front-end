import React from 'react';
import { connect } from 'react-redux';

import { getCards } from '../actions/';
import SingleCard from './SingleCard';


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
    	            <SingleCard key={card.id} {...card} />
            	))}
            </ul>
        );
    }
}


export default connect(mapStateToProps, { getCards })(Cards);

