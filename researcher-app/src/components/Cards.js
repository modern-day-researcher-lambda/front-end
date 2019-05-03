import React from 'react';
import { connect } from 'react-redux';

import { getCards } from '../actions/';
import SingleCard from './SingleCard';


const mapStateToProps = state => ({
	cards: state.cards,
    categories: state.categories,
    user_id: state.user_id
});


class Cards extends React.Component {

    componentDidMount() {
       if (this.props.user_id) this.props.getCards(this.props.user_id);
    }

    render() {
        console.log('in Cards');
        console.log(this.props.categories);

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
