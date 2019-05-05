import React from 'react';
import { connect } from 'react-redux';

import { addCard } from '../actions/';

import CardFormWrapper from '../styled-components/CardFormWrapper';


const mapStateToProps = state => ({
    loggedIn: state.loggedIn,
    user_id: state.user_id
});



class CardForm extends React.Component {

    state = {
        newCard: {
            title: "",
            category: "",
            description: "",
            link: "",
            completed: false,
            user_id: this.props.user_id
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


    handleCheck = e => {
        this.setState({
            newCard: {
                ...this.state.newCard,
                [e.target.name]: e.target.checked
            }
        });
    };


    handleAddCard = e => {
        e.preventDefault();
        const cdate = new Date();

        this.props.addCard({...this.state.newCard, created: cdate, updated: cdate}, this.props.history);
    }

    handleCancel = () => {
        this.props.history.push('/');
    }


    render() {

        if (this.props.loggedIn) {
            return (
                <CardFormWrapper>
                    <div className="header-container">
                        <h1>Add a New Card</h1>
                    </div>
                    <form onSubmit={this.handleAddCard} >
                        
                        <div>
                            <label name='title'>Title:</label>
                            <input
                                type="text"
                                name="title"
                                value={this.state.newCard.title}
                                onChange={this.handleChange}
                                autoFocus={true}
                            />
                        </div>

                        <div>
                            <label name='category'>Category:</label>
                            <input
                                type="text"
                                name="category"
                                value={this.state.newCard.category}
                                onChange={this.handleChange}
                            />
                        </div>

                        <div className='checkbox'>
                            <label name='completed'>Completed?</label>
                            <input
                                type="checkbox"
                                name="completed"
                                value={this.state.newCard.completed}
                                onChange={this.handleCheck}
                            />
                        </div>

                        <div>
                            <label name='link'>Link:</label>
                            <input
                                type="text"
                                name="link"
                                value={this.state.newCard.link}
                                onChange={this.handleChange}
                            />
                        </div>

                        <div>
                            <label name='description'>Description:</label>
                            <textarea
                                name="description"
                                onChange={this.handleChange}
                                value={this.state.newCard.description}
                            />
                        </div>
                        <div className="button-container">
                            <button type="submit">Add</button>
                            <button onClick={ this.handleCancel }>Cancel</button>
                        </div>
                    </form>
                </CardFormWrapper>
            );
        }
        else {
            this.props.history.push('/')
            return (
                <div> </div>
            )}
    }
}


export default connect(mapStateToProps, { addCard })(CardForm);
