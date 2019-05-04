import React from 'react';
import { connect } from 'react-redux';

import { addCard } from '../actions/';



const mapStateToProps = state => ({
    user_id: state.user_id
});



class CardForm extends React.Component {

    state = {
        newCard: {
            title: "",
            category: "",
            description: "",
            link: "",
            user_id: this.props.user_id,
            created: new Date()
        }
    };


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
        this.props.addCard(this.state.newCard, this.props.history);
    }


    render() {
        return (
            <div className='card-form'>
                <form onSubmit={this.handleAddCard}>
                <input
                    onChange={this.handleChange}
                    placeholder="Title"
                    value={this.state.newCard.title}
                    name="title"
                    autoFocus={true}
                />
                <input
                    onChange={this.handleChange}
                    placeholder="Category"
                    value={this.state.newCard.category}
                    name="category"
                />
                <input
                    onChange={this.handleChange}
                    placeholder="description"
                    value={this.state.newCard.description}
                    name="description"
                />
                <input
                    onChange={this.handleChange}
                    placeholder="link"
                    value={this.state.newCard.link}
                    name="link"
                />
                <button type="submit">Add</button>
                </form>
            </div>
        );
    }
}


export default connect(mapStateToProps, { addCard })(CardForm);
