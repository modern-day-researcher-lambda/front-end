import React from 'react';
import { connect } from 'react-redux';

import { getCards } from '../actions/';
import SingleCard from './SingleCard';


const mapStateToProps = state => ({
	cards: state.cards,
    user: state.user
});


class Cards extends React.Component {

    componentDidMount() {
        this.props.getCards(this.props.user);
    }

    render() {
        return (
            <div>
                <ul className='card-list'>
                    {this.props.cards.map(card => (
                        <SingleCard key={card.id} card={card} />
                    ))}
                </ul>
            
            </div>
        );
    }
}


export default connect(mapStateToProps, { getCards })(Cards);
