import React from 'react';
import { connect } from 'react-redux';

import { addCard } from '../actions/';



const mapStateToProps = state => ({
    cards: state.cards
});

class CardForm extends React.Component {
    state = {
        newCard: {
            title: "",
            category: "",
            description: "",
            link: ""
        }
    }

    handleChange = e => {
        this.setState({
            newCard: {
                ...this.state.newCard,
                [e.target.name]: e.target.value
            }
        });
    };

    handleAddCard = e => {
        e.preventDefault();
        this.props.addCard(this.state.newCard);

        this.setState({
            newCard: {
                title: "",
                category: "",
                description: "",
                link: ""
            }
        })
    }

    render() {
        return (
            <ul className='card-form'>
            	
            </ul>
        );
    }
}


export default connect(mapStateToProps, { addCard })(CardForm);