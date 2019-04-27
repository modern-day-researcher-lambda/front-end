import React from 'react';
import { connect } from 'react-redux';
import { Route, Link } from 'react-router-dom';

import { getCards } from '../actions/';
import SingleCard from './SingleCard';
import CardForm from './CardForm';


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
            
                <Link to="/cardform">Add</Link>
                <Route exact path="/cardform" component={ CardForm } />
            </div>
        );
    }
}


export default connect(mapStateToProps, { getCards })(Cards);

