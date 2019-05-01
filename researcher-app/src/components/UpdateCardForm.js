import React from 'react';
import { connect } from 'react-redux';

import { updateCard } from '../actions/';



const mapStateToProps = state => ({
    id: state.id,
    cards: state.cards
});



class UpdateCardForm extends React.Component {

    state = {
        newCard: {
            title: this.props.title,
            category: this.props.category,
            description: this.props.description,
            link: this.props.link,
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


    handleUpdateCard = (e) => {
        e.preventDefault();
    
        const id = this.props.match.params.id;
        this.props.updateCard(id);
      }


    render() {
        return (
            <div className='card-form'>
                <form onSubmit={this.handleUpdateCard}>
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
                <button type="submit">Update</button>
                </form>
            </div>
        );
    }
}


export default connect(mapStateToProps, { updateCard })(UpdateCardForm);
