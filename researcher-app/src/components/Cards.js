import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

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
            <div>
                <ul className='card-list'>
                    {this.props.cards.map(card => (
                        <SingleCard key={card.id} {...card} />
                    ))}
                </ul>
            
            </div>
        );
    }
}


export default connect(mapStateToProps, { getCards })(Cards);

