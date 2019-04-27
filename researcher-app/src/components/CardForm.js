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
            <div className='card-form'>
                <form onSubmit={this.handleAddCard}>
                <input
                    onChange={this.handleChange}
                    placeholder="Title"
                    value={this.state.title}
                    name="title"
                />
                <input
                    onChange={this.handleChange}
                    placeholder="Category"
                    value={this.state.category}
                    name="category"
                />
                <input
                    onChange={this.handleChange}
                    placeholder="description"
                    value={this.state.description}
                    name="description"
                />
                <input
                    onChange={this.handleChange}
                    placeholder="link"
                    value={this.state.link}
                    name="link"
                />
                <button type="submit">Add</button>
                </form>
            </div>
        );
    }
}


export default connect(mapStateToProps, { addCard })(CardForm);